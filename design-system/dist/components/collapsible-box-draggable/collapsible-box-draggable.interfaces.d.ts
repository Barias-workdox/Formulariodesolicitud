import { ReactNode } from 'react';
import { CollapsibleBoxProps, PanelProps } from '../collapsible-box/next';
export type CollapsiblePanelProps = {
    id: string;
    panelProps: Omit<PanelProps, 'children' | 'isDraggable' | 'isDragging' | 'isOverlay' | 'expanded' | 'attributes' | 'listeners' | 'draggableId'> & {
        children(): ReactNode;
    };
};
export type CollapsibleBoxDraggableOnDragEndParams = {
    panels: CollapsiblePanelProps[];
    fromIndex: number;
    toIndex: number;
};
/** Props for CollapsibleDraggable component */
export type CollapsibleBoxDraggableProps = {
    'data-testid'?: string;
    expanded?: CollapsibleBoxProps['expanded'];
    panels: CollapsiblePanelProps[];
    onDragEnd(params: CollapsibleBoxDraggableOnDragEndParams): void;
};
