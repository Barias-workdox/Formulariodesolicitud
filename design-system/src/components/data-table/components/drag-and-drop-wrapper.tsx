import { useCallback, type PropsWithChildren, type ReactElement } from 'react';

import { DragDropContext, Droppable } from '@hello-pangea/dnd';

import { StyledWrapper } from '../data-table.styles';
import { useDataTableContext } from '../hooks/use-data-table-context';
import { useDragEvents } from '../hooks/use-drag-events';

import { DropPlaceholder } from './drop-placeholder';

import type { DroppableProvided } from '@hello-pangea/dnd';

type DragAndDropWrapperProps = PropsWithChildren;

/**
 * Wrapper component for the drag and drop functionality.
 *
 * This component is used to wrap the children components and provide the drag and drop functionality.
 */
export const DragAndDropWrapper = ({ children }: DragAndDropWrapperProps): ReactElement => {
  const { data, columnsConfig, listRef, totalHeight, containerRef, handleOnChange } =
    useDataTableContext();

  const { dragSourceIndex, dragDestinationIndex, onDragStart, onDragUpdate, onDragEnd } =
    useDragEvents({
      data,
      columnsConfig,
      updateTable: handleOnChange,
    });

  /**
   * Callback to assign the list node to both listRef and Droppable's innerRef.
   */
  const listRefCallback = useCallback(
    (node: HTMLDivElement, innerRef: DroppableProvided['innerRef']) => {
      if (node) {
        listRef.current = node;
        innerRef(node);
      }
    },
    [listRef],
  );

  return (
    <DragDropContext
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <Droppable
        droppableId="table"
        direction="horizontal"
      >
        {(dropProvided): ReactElement => (
          <StyledWrapper
            ref={(node): void => listRefCallback(node, dropProvided.innerRef)}
            style={{ height: totalHeight }}
            {...dropProvided.droppableProps}
          >
            {children}

            <DropPlaceholder
              containerRef={containerRef}
              listRef={listRef}
              sourceIndex={dragSourceIndex}
              destinationIndex={dragDestinationIndex}
              dropProvided={dropProvided}
            />
          </StyledWrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
};
