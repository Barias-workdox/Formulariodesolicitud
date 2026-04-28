import { UseTableReturn } from './use-table';
import { DataTableContextValues } from '../contexts/data-table-context.interfaces';
import { DragStart, DragUpdate, DropResult } from '@hello-pangea/dnd';
export type UseDragEventsParams = Required<Pick<DataTableContextValues, 'data' | 'columnsConfig'>> & {
    updateTable: UseTableReturn['handleOnChange'];
};
export type UseDragEventsReturn = {
    dragSourceIndex?: number;
    dragDestinationIndex?: number;
    onDragStart({ source }: DragStart): void;
    onDragUpdate({ destination }: DragUpdate): void;
    onDragEnd(result: DropResult): void;
};
/**
 * Custom hook for handling column rearrangement through drag-and-drop in a data table.
 */
export declare const useDragEvents: ({ data, columnsConfig, updateTable, }: UseDragEventsParams) => UseDragEventsReturn;
