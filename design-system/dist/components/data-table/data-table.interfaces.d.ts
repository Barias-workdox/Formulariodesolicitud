import { ReactNode, RefObject } from 'react';
import { UseTableAction, UseTableReturn } from './hooks/use-table';
import { ProxiedRef } from '../utils/hooks/use-ref-proxy.hook';
import { OrderDirection, WithTestId } from '../../interfaces/common.interfaces';
import { VirtualItem } from '@tanstack/react-virtual';
import { OverrideObject } from '../../themes/theme.interfaces';
import { StyleObject } from 'styletron-standard';
export type DataTableContextValues<DataType extends Record<string, unknown> = Record<string, unknown>, ExtraColumnsIds extends string = never> = Partial<DataTableProps<DataType, ExtraColumnsIds>> & {
    isScrollable: boolean;
    hoveredRowIndex: number;
    rowsSelected?: number[];
    rowsDisabled?: Record<number, string>;
    virtualItems: VirtualItem[];
    totalHeight: string;
    containerRef?: ProxiedRef<HTMLDivElement>;
    listRef?: ProxiedRef<HTMLDivElement>;
    handleOnChange(params: UseTableAction<DataType, ExtraColumnsIds>): void;
    updateHoveredRowIndex(value: number): void;
    translateDisableReason?(reason: string): string;
    isColumnDisabledByReason(disableReason: string | undefined, columnType: ColumnType, columnId?: string): boolean;
};
export type DataTableDisabledRowContextValues = {
    isRowDisabled: boolean;
    disableReason?: string;
};
/**
 * Represents the data type of a column.
 *
 * When we show the column sorting options; asc/desc, with this type of column data
 * we can customize the message in a more humanized way.
 *
 * E.g.: A to Z, Lowest to Highest, New First
 */
export type ColumnDataType = 'string' | 'number' | 'date' | 'action';
/** Represents the different column types present on the table */
export type ColumnType = 'selection' | 'data' | 'actions';
/**
 * Represents the rendering type of a table cell.
 *
 * With this property we facilitate the type of rendering that would be generated
 * by means of the `getTableData` utility, thus we maintain the standards of styles
 * in the different types of content that can have the table.
 */
export type TableCellRenderType = 'string' | 'date' | 'datetime' | 'boolean' | 'custom';
/**
 * Represents the alignment type of a table cell.
 */
export type TableCellAlignType = 'left' | 'center' | 'right';
/** Represents the configuration of a table column. */
export type ColumnConfig<ColumnId = string> = {
    /** Unique identifier for the column. */
    id: ColumnId;
    /** Display label for the column. */
    label: ReactNode;
    /** Indicates if the column can be dragged and reordered. */
    isDraggable: boolean;
    /** Indicates the column alignment. */
    align?: TableCellAlignType;
    /** Indicates if the column can be removed. */
    isRemovable: boolean;
    /** Indicates if the column should remain fixed during horizontal scrolling. */
    isFixed?: boolean;
    /** Indicates if the column can be resized. */
    isResizable?: boolean;
    /** Indicates if the column is sortable. */
    isSortable: boolean;
    /**
     * User customizations saved in the local storage for column width.
     *
     * @example '150px'
     */
    width?: StyleObject['width'];
    /**
     * Minimum width for the column.
     *
     * @example '100px'
     */
    minWidth?: StyleObject['minWidth'];
    /**
     * Maximum width for the column.
     *
     * @example '300px'
     */
    maxWidth?: StyleObject['maxWidth'];
    /** The data type of the column, used to customize the column sorting translations. */
    dataType: ColumnDataType;
    /** The rendering type for table cells in this column. */
    renderType: TableCellRenderType;
};
/** Represents the type of update events for the table. */
export type UpdateEventType = 'drag' | 'sort' | 'show-column' | 'hide-column' | 'resize-column-width' | 'updated-props' | 'row-selection';
/** Represents the configuration object for infinite pagination hook */
export type PaginationSettings = {
    /** Indicates if the pagination logic should be enabled */
    isEnabled: boolean;
    /** Pagination method to be used */
    method: 'perPage' | 'infinite';
    /** Value for the items that would be fetched in a pagination process */
    itemsPerPage: number;
    /** Callback function that is executed if the last element of the list is reached */
    onPageEnd?(): void;
};
export type AllKeys<T> = T extends Record<string, unknown> ? keyof T : never;
export type TableActionsColumnHeaderCellProps<DataType extends Record<string, unknown> = Record<string, unknown>, ExtraColumnsIds = never> = WithTestId & Pick<UseTableReturn, 'handleOnChange'> & {
    columnsConfig: ColumnConfig<AllKeys<DataType> | ExtraColumnsIds>[];
    /** The configuration of all available columns, including hidden ones. */
    allColumnsConfig: ColumnConfig<AllKeys<DataType> | ExtraColumnsIds>[];
    showButton?: boolean;
    overrides?: {
        CellContent: OverrideObject<Record<string, never>>;
    };
};
export interface TableRowsSelectionHeaderCellProps {
    'data-testid'?: string;
    isAllCheck: boolean;
    isIndeterminate: boolean;
    overrides?: {
        CellContent: OverrideObject<Record<string, never>>;
    };
    onClickAll(): void;
}
type DataTableOverrides = {
    TableActionsColumnHeaderCell: OverrideObject<TableActionsColumnHeaderCellProps>;
    TableRowsSelectionHeaderCell: OverrideObject<TableRowsSelectionHeaderCellProps>;
};
/**
 * Represents the props for the `DataTable` component.
 *
 * @typeparam DataType - Type of the raw data for the table.
 * @typeparam ExtraColumnsIds - The ids for extra columns that are not part of the DataType keys.
 */
export type DataTableProps<DataType extends Record<string, unknown> = Record<string, unknown>, ExtraColumnsIds extends string = never> = WithTestId<{
    /** If true, shows table cell skeletons to indicate that is the data is being loaded. */
    isLoading?: boolean;
    /** Indicates whether the table row is clickable, affecting cell styling. */
    isRowClickable?: boolean;
    /**
     * When enabled, renders a hidden sizer element per column that measures
     * visible cell content in normal document flow. This allows CSS intrinsic
     * sizing (e.g. `max-content`) to account for body cell widths — not just
     * headers — despite virtualized rows using absolute positioning.
     *
     * **Performance note:** This duplicates the render of visible cells (~20 rows
     * per column) inside a hidden container. The browser skips painting
     * (`visibility: hidden`) but still performs layout. Updates are deferred via
     * `useDeferredValue` so they never block user interactions. For tables with
     * many columns or expensive custom cell renders, profile before enabling.
     *
     * @defaultValue false
     */
    autoMeasureCells?: boolean;
    /** The data to be rendered in the table. */
    data: ReactNode[][];
    /** The key of the column to be sorted by. */
    orderBy: AllKeys<DataType> | ExtraColumnsIds;
    /** The sorting direction (asc or desc) for the table. */
    orderDirection: OrderDirection;
    /** The configuration of the table columns. */
    columnsConfig: ColumnConfig<AllKeys<DataType> | ExtraColumnsIds>[];
    /** The configuration of all available columns, including hidden ones. */
    allColumnsConfig: ColumnConfig<AllKeys<DataType> | ExtraColumnsIds>[];
    /** The min-height of each row in the table. */
    rowHeight?: StyleObject['height'];
    /** Indicates whether column headers should be displayed. */
    showHeaders?: boolean;
    /** Indicates whether the actions column should be displayed. */
    showActionsColumn?: boolean;
    /** Indicates whether the actions header button (show columns) should be displayed. */
    showHeaderActionButton?: boolean;
    /** Indicates whether the row checkbox selection should be displayed. */
    showRowsSelection?: boolean;
    /** Indicates the rows selected whether the table rows selection is available, */
    rowsSelected?: number[];
    /** Indicates the rows disabled whether the table rows selection is available and the reason why they were disabled. */
    rowsDisabled?: Record<number, string>;
    /** Indicates the component to render when the table is empty. */
    emptyState?: ReactNode;
    /** Configuration object for infinite pagination hook */
    paginationSettings?: PaginationSettings;
    /**
     * Overrides for subcomponents used by the DataTable.
     *
     * Allows customization of the appearance and behavior of subcomponents through
     * styled components.
     */
    overrides?: DataTableOverrides;
    /**
     * A ref to the table container element. Useful to trigger scroll to top on certain events.
     */
    tableRef?: RefObject<HTMLDivElement>;
    /**
     * A function to handle changes in table settings.
     *
     * @param values - The updated values for the table settings.
     * @param event - The type of update event.
     */
    onChange(values: DataTableProps<DataType, ExtraColumnsIds>, event: UpdateEventType): void;
    /**
     * A function to handle click on table row.
     *
     * @param rowIndex - The row index that was clicked.
     */
    onClickRow?(rowIndex: number): void;
    /**
     * A function to handle context menu on table cell.
     *
     * @param event - The context menu event.
     */
    onContextMenu?(event: React.MouseEvent<HTMLDivElement>, rowIndex: number): void;
    /**
     * A function to translate disable reasons.
     * This allows the consuming app to provide localized messages.
     *
     * @param reason - The reason key (e.g., 'deleting', 'updating')
     * @returns The translated message to display in the tooltip
     */
    translateDisableReason?(reason: string): string;
    /**
     * A function to determine if a column is disabled based on the provided reason.
     * This allows for custom logic to disable specific columns under certain conditions.
     *
     * @param disableReason - The reason why the column might be disabled.
     * @param columnType - The type of the column ('selection', 'data', 'actions').
     * @param columnId - (Optional) The unique identifier of the column.
     * @returns A boolean indicating whether the column is disabled.
     */
    isColumnDisabledByReason?(disableReason: string | undefined, columnType: ColumnType, columnId?: string): boolean;
}>;
export {};
