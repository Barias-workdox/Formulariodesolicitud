import { ReactElement } from 'react';
import { TableColumnProps } from './table-column';
export type TableColumnDraggableProps = Omit<TableColumnProps, 'updateIsDragDisabled'>;
/**
 * Represents a draggable table column in a `DataTable`.
 *
 * This component wraps the TableColumn component and provides the functionality to make
 * the column draggable within a `DataTable` using the `@hello-pangea/dnd` library.
 * It manages the drag-and-drop behavior of the column and updates its position.
 */
export declare const TableColumnDraggable: (props: TableColumnDraggableProps) => ReactElement;
