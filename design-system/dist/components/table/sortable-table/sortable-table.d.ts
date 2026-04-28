import { ReactElement, ReactNode } from 'react';
import { TableCellProps } from '../components';
import { DraggableRowsTableProps } from '../draggable-rows-table';
import { DraggableCellTableProps } from '../draggable-rows-table/components/draggable-cell-table-next';
export interface SortableTableProps extends Pick<DraggableRowsTableProps, 'onDragEnd' | 'isDragDisabled' | 'droppableId'> {
    'data-testid': string;
    headers: (string | ((props: Partial<TableCellProps>) => ReactElement))[];
    children: (ReactNode | ((props: DraggableCellTableProps) => ReactElement<DraggableCellTableProps>))[][];
}
/** Sortable rows table component, renders the table with draggable rows and header for each column */
export declare const SortableTable: ({ "data-testid": dataTestId, isDragDisabled, droppableId, headers, children, onDragEnd, }: SortableTableProps) => ReactElement;
