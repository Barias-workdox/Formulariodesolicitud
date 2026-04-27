import { useCallback, useEffect, useRef } from 'react';
import type { RefObject } from 'react';

import { applyDimensions } from '@utils/styles.utils';

import { calculateNewDimensions } from './utils/calculate-new-dimensions.util';

import type { ResizeData, ResizeDirection } from '@interfaces/resizable-element.interfaces';

export interface UseResizableElementParams {
  /**
   * A reference to the HTML element that should be resizable.
   */
  elementRef: RefObject<HTMLElement>;
  /**
   * Specifies the margin applied to the dynamic modal component relative to the viewport.
   */
  margin?: number;
  /**
   * Specifies the minimum width of the element.
   */
  minWidth?: number;
  /**
   * Specifies the minimum height of the element.
   */
  minHeight?: number;
}

export interface UseResizableElementReturn {
  /**
   * Handles the resizing of the referenced element based on the provided resize directions.
   *
   * @param event - The pointer event that initiated the resize action.
   * @param direction - An array of directions indicating which edges of the element to resize (`top`, `right`, `bottom`, `left`).
   */
  handleResize(event: React.PointerEvent, direction: ResizeDirection[]): void;
}

/**
 * A custom hook that provides functionality to make an element resizable in specified directions.
 *
 * The hook allows resizing of the referenced element by dragging its edges or corners.
 * The resizing is constrained by the window boundaries and optional `minWidth`, `minHeight`, `maxWidth`, and `maxHeight` CSS styles of the element.
 *
 * @returns An object containing a function to handle the resizing logic.
 */
export const useResizableElement = ({
  elementRef,
  margin,
  minWidth = 0,
  minHeight = 0,
}: UseResizableElementParams): UseResizableElementReturn => {
  const elementStyleTransition = useRef<string | null>(null);

  /**
   * Sets the initial transition style of the element when the component mounts.
   * This ensures that the element's transition is preserved for smooth animations.
   */
  useEffect(() => {
    if (elementRef.current === null) return;

    elementStyleTransition.current = elementRef.current.style.transition;
  }, [elementRef]);

  const handleResize = useCallback(
    (event: React.PointerEvent, direction: ResizeDirection[]) => {
      if (elementRef.current === null) return;

      event.preventDefault();

      const data: ResizeData = {
        initialX: event.clientX,
        initialY: event.clientY,
        initialWidth: elementRef.current.offsetWidth,
        initialHeight: elementRef.current.offsetHeight,
        initialLeft: elementRef.current.offsetLeft,
        initialTop: elementRef.current.offsetTop,
        direction,
      };

      /**
       * Handles the pointer move event during resizing.
       */
      const handlePointerMove = (moveEvent: PointerEvent): void => {
        if (elementRef.current === null) return;

        // Disable all animations on the element during resizing
        elementRef.current.style.transition = 'none';

        const deltaX = moveEvent.clientX - data.initialX;
        const deltaY = moveEvent.clientY - data.initialY;

        const newDimensions = calculateNewDimensions({
          data,
          deltaX,
          deltaY,
          element: elementRef.current,
          margin,
          minWidth,
          minHeight,
        });

        applyDimensions(elementRef.current, newDimensions);
      };

      /**
       * Handles the pointer up event to stop resizing.
       */
      const handlePointerUp = (): void => {
        // Re-enable the transition style after resizing
        elementRef.current.style.transition = elementStyleTransition.current;

        document.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('pointerup', handlePointerUp);
      };

      document.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('pointerup', handlePointerUp);
    },
    [elementRef, margin, minWidth, minHeight],
  );

  return { handleResize };
};
