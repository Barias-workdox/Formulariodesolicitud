import type { ColumnType, DataTableProps } from '../data-table.interfaces';
import type { UseTableReturn } from '../hooks/use-table';
import type { ProxiedRef } from '@components/utils/hooks/use-ref-proxy.hook';
import type { VirtualItem } from '@tanstack/react-virtual';

type DataTablePropsForContextValues<
  DataType extends Record<string, unknown>,
  ExtraColumnsIds extends string,
> = Partial<
  Omit<
    DataTableProps<DataType, ExtraColumnsIds>,
    'orderBy' | 'orderDirection' | 'allColumnsConfig' | 'data' | 'handleOnChange'
  >
>;

type UseTableReturnForContextValues<
  DataType extends Record<string, unknown>,
  ExtraColumnsIds extends string,
> = Pick<
  // UseTableReturn
  UseTableReturn<DataType, ExtraColumnsIds>,
  'orderBy' | 'orderDirection' | 'columnsConfig' | 'allColumnsConfig' | 'data' | 'handleOnChange'
>;

type InternalDataTableContextValues = {
  isScrollable: boolean;
  hoveredRowIndex: number;
  rowsSelected?: number[];
  rowsDisabled?: Record<number, string>;

  // Virtualization
  virtualItems: VirtualItem[];
  totalHeight: string;

  // References
  containerRef?: ProxiedRef<HTMLDivElement>;
  listRef?: ProxiedRef<HTMLDivElement>;

  // Methods
  updateHoveredRowIndex(value: number): void;
  isColumnDisabledByReason(
    disableReason: string | undefined,
    columnType: ColumnType,
    columnId?: string,
  ): boolean;
};

export type DataTableContextValues<
  DataType extends Record<string, unknown> = Record<string, unknown>,
  ExtraColumnsIds extends string = never,
> = DataTablePropsForContextValues<DataType, ExtraColumnsIds> &
  UseTableReturnForContextValues<DataType, ExtraColumnsIds> &
  InternalDataTableContextValues;

export type DataTableDisabledRowContextValues = {
  isRowDisabled: boolean;
  disableReason?: string;
};
