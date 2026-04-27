import type { ReactNode, VoidFunctionComponent } from 'react';

import { CellSkeleton } from '../';
import { DEFAULT_ITEMS_PER_PAGE } from '../data-table.constants';

import { BooleanText } from './render-types/boolean-text';
import { DateAsText } from './render-types/date-text';
import { DatetimeAsText } from './render-types/datetime-text';
import { SimpleText } from './render-types/simple-text';

import type {
  ColumnConfig,
  ColumnType,
  PaginationSettings,
  TableCellRenderType,
} from '../data-table.interfaces';
import type { VirtualItem } from '@tanstack/react-virtual';

export type CustomRenders<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  DataType extends Record<string, any> = Record<string, any>,
  ExtraColumnsIds extends string = DataType[keyof DataType],
> = Partial<Record<keyof DataType | ExtraColumnsIds, VoidFunctionComponent<DataType>>>;

export type ActionCell<DataType> = VoidFunctionComponent<DataType>;

type GetTableDataParams<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  DataType extends Record<string, any> = Record<string, any>,
  ExtraColumnsIds extends string = string,
> = {
  defaultValue?: string;
  /** An array of raw data objects to be transformed into table rows. */
  rawData: DataType[];
  /** An array of column configuration objects specifying how to render each column. */
  columnsConfig: ColumnConfig<keyof DataType | ExtraColumnsIds>[];
  /** An optional custom component to be used for action cells in the table. */
  actionCell?: ActionCell<DataType>;
  /** An optional mapping of custom render functions for specific columns. */
  customRenders?: CustomRenders<DataType, ExtraColumnsIds>;
  /**
   * **Infinite pagination only**
   *
   * Indicates if there is a loading process in the table (e.g., there is a fetch in process)
   */
  isLoading?: boolean;
  /**
   * **Infinite pagination only**
   *
   * Configuration object for infinite pagination hook
   */
  paginationSettings?: PaginationSettings;
};

type RenderMapType = Record<
  Exclude<TableCellRenderType, 'custom'>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (value: any) => ReactNode
>;

export const renderMap: RenderMapType = {
  string: (value: string | number) => <SimpleText value={value} />,
  date: (value: string) => <DateAsText value={value} />,
  datetime: (value: string) => <DatetimeAsText value={value} />,
  boolean: (value: boolean) => <BooleanText value={value} />,
};

/**
 * Utility function for transforming raw data into a table-ready format.
 *
 * The `getTableData` function takes raw data, column configuration, and optional custom render functions
 * to produce a table-ready data structure. It maps and formats the raw data into an array of rows and cells
 * that can be directly rendered within a table component. This function is particularly useful for
 * preparing data for use with the Data Table component.
 *
 * @returns An array of rows, where each row is an array of ReactNode elements representing table cells.
 *
 * @example
 * ```jsx
 * type DataType = { id: number; name: string; birthday: string };
 *
 * const rawData: DataType[] = [
 *   { id: 1, name: 'John', birthday: '1990-05-15' },
 *   { id: 2, name: 'Jane', birthday: '1985-08-22' },
 *   // ... more raw data
 * ];
 *
 * const columnsConfig: ColumnConfig<keyof DataType>[] = [
 *   { id: 'id', label: 'ID', renderType: 'string' },
 *   { id: 'name', label: 'Name', renderType: 'string' },
 *   { id: 'birthday', label: 'Birthday', renderType: 'date' },
 * ];
 *
 * const locale = 'en';
 *
 * const customRenders = {
 *   name: (rowData): ReactElement => <strong>{rowData.name}</strong>,
 * };
 *
 * const tableData = getTableData<DataType>({
 *   rawData, // `rawData` must be of type `DataType[]`
 *   columnsConfig, // `columnsConfig` must be of type `ColumnConfig<keyof DataType>[]`
 *   locale,
 *   customRenders, // `customRenders` must contain a record with keys of `DataType` or `ExtraColumnsIds` which are defined in the second parameter of `getTableData`
 * });
 *
 * // tableData is an array of rows and cells ready for rendering in a table component.
 *
 * console.log(tableData);
 * // [
 * //   [1, <strong>John</strong>, 'May. 15, 1990'],
 * //   [2, <strong>Jane</strong>, 'Aug. 22, 1985'],
 * // ];
 * ```
 */
export const getTableData = <
  DataType extends Record<string, unknown> = Record<string, unknown>,
  ExtraColumnsIds extends string = never,
>({
  defaultValue,
  rawData,
  columnsConfig,
  actionCell,
  customRenders = {},
}: GetTableDataParams<DataType, ExtraColumnsIds>): ReactNode[][] =>
  rawData.map((row, index) => {
    const rowCells = columnsConfig.map(({ id, renderType }) => {
      if (customRenders[id] !== undefined || renderType === 'custom') {
        return customRenders[id]?.(row);
      } else {
        return renderMap[renderType](row[id] ?? defaultValue);
      }
    });

    return actionCell ? [...rowCells, actionCell(row, index)] : rowCells;
  });

/**
 * Utility function that serves a data placeholder when the infinite pagination process is loading.
 *
 * This function is only used in the context of infinite pagination configuration and should be used
 * only by `getInfiniteTableData`
 */
export const getInfiniteLoadingCells = <
  DataType extends Record<string, unknown> = Record<string, unknown>,
  ExtraColumnsIds extends string = never,
>({
  isLoading,
  columnsConfig,
  actionCell,
  paginationSettings: { itemsPerPage } = {
    isEnabled: false,
    method: 'infinite',
    itemsPerPage: DEFAULT_ITEMS_PER_PAGE,
    onPageEnd: (): void => {},
  },
}: GetTableDataParams<DataType, ExtraColumnsIds>): ReactNode[][] =>
  Array(isLoading ? itemsPerPage : 0)
    .fill(0)
    .map((_, index) => {
      /** Generates a unique identifier for the skeleton component */
      const composeDataTestId = (columnId: string): string =>
        `infinite-pagination-cell-skeleton-${index}-${columnId}`;

      const placeholderRowCells = columnsConfig.map(({ id }) => {
        const columnId = id.toString();

        return (
          <CellSkeleton
            key={columnId}
            data-testid={composeDataTestId(columnId)}
          />
        );
      });

      return actionCell
        ? [
            ...placeholderRowCells,
            <CellSkeleton
              key="action"
              data-testid={composeDataTestId('action')}
            />,
          ]
        : placeholderRowCells;
    });

/**
 * Utility function for transforming raw infinite data into a table-ready format.
 *
 * Accessor function for `getTableData`. Use only in infinite pagination context.
 */
export const getInfiniteTableData = <
  DataType extends Record<string, unknown> = Record<string, unknown>,
  ExtraColumnsIds extends string = never,
>(
  params: GetTableDataParams<DataType, ExtraColumnsIds>,
): ReactNode[][] => [...getTableData(params), ...getInfiniteLoadingCells(params)];

/**
 * Utility function to render virtualized rows for a table column or similar component.
 *
 * @returns An array of absolutely positioned row elements.
 */
export const renderVirtualizedRows = ({
  virtualItems,
  renderRow,
}: {
  virtualItems: VirtualItem[];
  renderRow(index: number): ReactNode;
}): ReactNode[] => {
  return virtualItems.map((virtualItem) => (
    <div
      key={virtualItem.key}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: `${virtualItem.size}px`,
        transform: `translateY(${virtualItem.start}px)`,
      }}
    >
      {renderRow(virtualItem.index)}
    </div>
  ));
};

/**
 * Determines if a column's cells should be disabled based on the reason.
 * - 'deleting' disables all column types
 * - Any other reason disables only the selection column
 */
export const isColumnDisabledByReason = (
  disableReason: string | undefined,
  columnType: ColumnType,
  _columnId?: string,
): boolean => {
  if (disableReason === 'deleting') return true;

  return columnType === 'selection';
};
