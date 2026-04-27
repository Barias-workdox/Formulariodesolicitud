import { useCallback } from 'react';

import type { DropResult } from '@hello-pangea/dnd';

interface UseDragEnd {
  /**
   * A callback that receives DropResult and manage order of the list of elements.
   *
   * Use callback if exists to update the list on the component that uses this hook.
   */
  onDragEnd<T>(result: DropResult): T[];

  /**
   * A callback that removes an item from the list of elements.
   *
   * Use callback if exists to update the list on the component that uses this hook.
   */
  onRemoveElement<T>(index: number): T[];
}

/**
 * Hook to manage Drag End event for DraggableRowsTable using `@hello-pangea/dnd`.
 *
 * @param elementsList - List of items that should be sorted.
 */
export function useDragEnd<T>(elementsList: T[]): UseDragEnd {
  const onDragEnd = useCallback(
    (result: DropResult) => {
      const elementsClone: [] = JSON.parse(JSON.stringify(elementsList));
      const { destination, source } = result;
      // dropped outside the list
      if (!destination || destination?.index === source?.index) {
        return elementsClone;
      }

      // no movement
      if (destination?.index === source?.index) {
        return;
      }

      const [removed] = elementsClone.splice(source?.index, 1);

      elementsClone.splice(destination?.index, 0, removed);

      return elementsClone;
    },
    [elementsList],
  );

  const onRemoveElement = useCallback(
    (index) => {
      const elementsClone: [] = JSON.parse(JSON.stringify(elementsList));

      elementsClone.splice(index, 1);

      return elementsClone;
    },
    [elementsList],
  );

  return {
    onDragEnd,
    onRemoveElement,
  };
}
