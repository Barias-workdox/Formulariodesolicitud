import { ReactNode } from 'react';
import { DragDropContextProps, DraggableProps, DroppableProps } from '@hello-pangea/dnd';
import { StyleObject } from 'styletron-standard';
export interface DraggableRowsTableProps {
    'data-testid'?: string;
    droppableId: DroppableProps['droppableId'];
    onDragEnd: DragDropContextProps['onDragEnd'];
    headers: ReactNode[];
    /** Each row has consists of an array of semantic React nodes */
    items: ReactNode[];
    /** Custom division line between headers and data */
    divisionLine?: ReactNode;
    isDragDisabled?: DraggableProps['isDragDisabled'];
    overrides?: {
        Root?: StyleObject;
        Row?: StyleObject;
        DivisionContainer?: StyleObject;
    };
}
/**
 * Styled Draggable rows table, allowing user to send custom styled headers and rows.
 * The dragging element is reparented using the draggable clone api, to avoid position
 * issues. This way, the dragged element
 */
export declare const DraggableRowsTable: ({ "data-testid": dataTestId, onDragEnd, headers, items, droppableId, divisionLine, isDragDisabled, overrides, }: DraggableRowsTableProps) => JSX.Element;
