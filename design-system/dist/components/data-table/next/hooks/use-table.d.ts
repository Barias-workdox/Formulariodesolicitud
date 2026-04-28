import { AllKeys, ColumnConfig, DataTableProps, UpdateEventType } from '../data-table.interfaces';
type UseTableActionBase<Payload, EventType extends UpdateEventType> = {
    payload: Payload;
    event: EventType;
};
type DragEvent<DataType extends Record<string, unknown> = Record<string, unknown>, ExtraColumnsIds extends string = never> = UseTableActionBase<Pick<DataTableProps<DataType, ExtraColumnsIds>, 'data' | 'activeColumns'>, 'drag'>;
type SortEvent<DataType extends Record<string, unknown> = Record<string, unknown>, ExtraColumnsIds extends string = never> = UseTableActionBase<Pick<DataTableProps<DataType, ExtraColumnsIds>, 'orderBy' | 'orderDirection'>, 'sort'>;
type ShowColumnEvent<DataType extends Record<string, unknown> = Record<string, unknown>> = UseTableActionBase<Pick<ColumnConfig<keyof DataType>, 'id'>, 'show-column'>;
type HideColumnEvent<DataType extends Record<string, unknown> = Record<string, unknown>> = UseTableActionBase<Pick<ColumnConfig<keyof DataType>, 'id'>, 'hide-column'>;
type ResizeColumnWidthEvent<DataType extends Record<string, unknown> = Record<string, unknown>> = UseTableActionBase<Pick<ColumnConfig<keyof DataType>, 'id' | 'width'>, 'resize-column-width'>;
type UpdatedPropsEvent<DataType extends Record<string, unknown> = Record<string, unknown>, ExtraColumnsIds extends string = never> = UseTableActionBase<DataTableProps<DataType, ExtraColumnsIds>, 'updated-props'>;
type ChangeRowSelectionEvent<DataType extends Record<string, unknown> = Record<string, unknown>, ExtraColumnsIds extends string = never> = UseTableActionBase<Pick<DataTableProps<DataType, ExtraColumnsIds>, 'rowsSelected'>, 'row-selection'>;
export type UseTableAction<DataType extends Record<string, unknown> = Record<string, unknown>, ExtraColumnsIds extends string = never> = DragEvent<DataType, ExtraColumnsIds> | SortEvent<DataType, ExtraColumnsIds> | ShowColumnEvent<DataType> | HideColumnEvent<DataType> | ResizeColumnWidthEvent<DataType> | UpdatedPropsEvent<DataType, ExtraColumnsIds> | ChangeRowSelectionEvent<DataType, ExtraColumnsIds>;
type UseTableState<DataType extends Record<string, unknown> = Record<string, unknown>, ExtraColumnsIds extends string = never> = DataTableProps<DataType, ExtraColumnsIds>;
export type UseTableReturn<DataType extends Record<string, unknown> = Record<string, unknown>, ExtraColumnsIds extends string = never> = UseTableState<DataType, ExtraColumnsIds> & {
    /**
     * Array of column configurations for currently active (visible) columns.
     */
    columnsConfig: ColumnConfig<AllKeys<DataType> | ExtraColumnsIds>[];
    /**
     * Handler function for managing table state changes.
     *
     * This function is responsible for processing various table events and updating both the
     * internal state and notifying external components about changes. It handles events such as:
     * - Column drag and drop reordering
     * - Column sorting (ascending/descending)
     * - Showing/hiding columns
     * - Resizing column widths
     * - Row selection changes
     * - External data updates
     */
    handleOnChange(params: UseTableAction<DataType, ExtraColumnsIds>): void;
};
/**
 * Custom hook for managing the state of a data table.
 *
 * The `useTable` hook provides a powerful mechanism for managing and synchronizing the state
 * of a draggable columns table. It handles various table-related events, such as drag-and-drop
 * column reordering, column sorting, showing/hiding columns, adjusting column widths, and updating
 * the table data. This hook allows you to seamlessly integrate and control the behavior of the table
 * within your application.
 *
 * @returns The updated table state.
 */
export declare const useTable: <DataType extends Record<string, unknown> = Record<string, unknown>, ExtraColumnsIds extends string = never>(props: Omit<UseTableState<DataType, ExtraColumnsIds>, "columnsConfig">) => UseTableReturn<DataType, ExtraColumnsIds>;
export {};
