import { useState } from 'react';

import { reorder } from '../../utils/arrays/arrays.utils';

import type { UseTableReturn } from './use-table';
import type { DataTableProps } from '../data-table.interfaces';
import type { DragStart, DragUpdate, DropResult } from '@hello-pangea/dnd';

export type UseDragEventsParams = Required<Pick<DataTableProps, 'data' | 'columnsConfig'>> & {
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
export const useDragEvents = ({
  data,
  columnsConfig,
  updateTable,
}: UseDragEventsParams): UseDragEventsReturn => {
  const [sourceIndex, setSourceIndex] = useState<number>();
  const [destinationIndex, setDestinationIndex] = useState<number>();

  /**
   * Handler for when a rearrangement starts.
   */
  const onDragStart = ({ source }: DragStart): void => {
    setSourceIndex(source.index);
    setDestinationIndex(source.index);
  };

  /**
   * Handler for when of the rearrangement is updated.
   */
  const onDragUpdate = ({ destination }: DragUpdate): void => {
    if (destination) {
      setDestinationIndex(destination.index);
    } else {
      setDestinationIndex(sourceIndex);
    }
  };

  /**
   * Handler for when a rearrangement ends, leaving the columns in their new order.
   */
  const onDragEnd = (result: DropResult): void => {
    setSourceIndex(undefined);
    setDestinationIndex(undefined);

    // dropped outside the list
    if (!result.destination) {
      return;
    }

    // The source and destination are the same or the destination is not draggable.
    if (
      result.destination.index === result.source.index ||
      !columnsConfig[result.destination.index].isDraggable
    ) {
      return;
    }

    const updatedColumnsConfig = reorder(
      columnsConfig,
      result.source.index,
      result.destination.index,
    );

    const updatedData = data.map((row) =>
      result.destination ? reorder(row, result.source.index, result.destination.index) : row,
    );

    updateTable({
      payload: { data: updatedData, columnsConfig: updatedColumnsConfig },
      event: 'drag',
    });
  };

  return {
    dragSourceIndex: sourceIndex,
    dragDestinationIndex: destinationIndex,
    onDragStart,
    onDragUpdate,
    onDragEnd,
  };
};
