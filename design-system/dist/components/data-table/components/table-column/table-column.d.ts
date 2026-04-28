import { ReactElement, ReactNode } from 'react';
import { ColumnConfig } from '../../data-table.interfaces';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export type TableColumnProps = WithTestId & ColumnConfig & {
    columnIndex: number;
    /**
     * The data to display in the column.
     */
    columnData: ReactNode[];
    /**
     * Indicates whether the column is currently being dragged.
     */
    isDragging?: boolean;
    /**
     * A function to update the drag disabled state.
     */
    updateIsDragDisabled?(value: boolean): void;
};
/**
 * Represents a column within a `DataTable`.
 *
 * This component represents a single column in a `DataTable`, offering features
 * like drag-and-drop reordering, sortable columns, text alignment, fixed positioning during
 * horizontal scrolling, resizable columns with custom minimum and maximum widths, and more.
 *
 * When the prop `isLoading` is set to true and there is no an infinite loading configuration,
 * a group of skeleton elements will be rendered at the end of the table. These skeletons serve as placeholders,
 * visually indicating that new data is currently being fetched.
 
 * It supports customization of appearance and behavior through various properties and callbacks.
 * The component provides data type information for sorting, custom row heights, optional header
 * cells, and event handling for hover interactions and cell registration to handle dynamic cell height.
 */
export declare const TableColumn: ({ dataTestId, id, columnIndex, label, isDraggable, isDragging, isSortable, isFixed, isRemovable, isResizable, dataType, align, width, minWidth, maxWidth, columnData, updateIsDragDisabled, }: TableColumnProps) => ReactElement;
