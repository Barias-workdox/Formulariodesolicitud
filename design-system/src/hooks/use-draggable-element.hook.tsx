import { useCallback, useEffect, useRef } from 'react';
import type { RefObject } from 'react';

export type DragDirection = 'both' | 'horizontal' | 'vertical';

const VERTICAL_DRAG_DIRECTIONS: DragDirection[] = ['vertical', 'both'];

const HORIZONTAL_DRAG_DIRECTIONS: DragDirection[] = ['horizontal', 'both'];

export interface UseDraggableElementParams {
  /**
   * A reference to the HTML element that should be resizable.
   * Can be null when dragging is disabled.
   */
  elementRef: RefObject<HTMLElement> | null;
  /**
   * Specifies the margin applied to the dynamic modal component relative to the viewport.
   */
  margin?: number;
  /**
   * Constrains the drag direction to horizontal, vertical, or both (default)
   */
  direction?: DragDirection;
  parent?: Window;
}

export interface UseDraggableElementReturn {
  handlePointerDown(event: React.PointerEvent | PointerEvent): void;
}

/**
 * A custom hook that provides functionality to make an element draggable within the viewport.
 *
 * This hook attaches pointer event handlers to enable dragging of an element referenced by `elementRef`.
 * It ensures the element remains within the boundaries of the window while being dragged.
 * The drag direction can be constrained to horizontal-only, vertical-only, or both directions.
 *
 * @returns An object containing a method to initialize the drag behavior.
 */
export const useDraggableElement = ({
  elementRef,
  margin = 0,
  direction = 'both',
  parent,
}: UseDraggableElementParams): UseDraggableElementReturn => {
  const elementStyleTransition = useRef<string | null>(null);

  /**
   * Sets the initial transition style of the element when the component mounts.
   * This ensures that the element's transition is preserved for smooth animations.
   */
  useEffect(() => {
    if (!elementRef || elementRef.current === null) return;

    elementStyleTransition.current = elementRef.current.style.transition;
  }, [elementRef]);

  /**
   * Handles the `pointerdown` event to start the drag process.
   * Initializes drag state and attaches `pointermove` and `pointerup` event listeners.
   */
  const handlePointerDown = useCallback(
    (event: React.PointerEvent) => {
      if (!elementRef || elementRef.current === null) return;

      const widthBoundary =
        parent instanceof Window ? parent.innerWidth : elementRef.current.parentElement.offsetWidth;
      const heightBoundary =
        parent instanceof Window
          ? parent.innerHeight
          : elementRef.current.parentElement.offsetHeight;

      event.preventDefault(); // Prevent text selection
      const initialX = event.clientX;
      const initialY = event.clientY;
      const initialLeft = elementRef.current.offsetLeft;
      const initialTop = elementRef.current.offsetTop;

      /**
       * Handles the `pointermove` event to update the element's position while dragging.
       */
      const handlePointerMove = (moveEvent: PointerEvent): void => {
        if (!elementRef || elementRef.current === null) return;

        // Disable all animations on the element during resizing
        elementRef.current.style.transition = 'none';

        const deltaX = moveEvent.clientX - initialX;
        const deltaY = moveEvent.clientY - initialY;

        // Only update position based on direction constraint
        if (HORIZONTAL_DRAG_DIRECTIONS.includes(direction)) {
          const newLeft = Math.min(
            Math.max(margin, initialLeft + deltaX),
            widthBoundary - margin - elementRef.current.offsetWidth,
          );

          elementRef.current.style.left = `${newLeft}px`;
        }

        if (VERTICAL_DRAG_DIRECTIONS.includes(direction)) {
          const newTop = Math.min(
            Math.max(margin, initialTop + deltaY),
            heightBoundary - margin - elementRef.current.offsetHeight,
          );

          elementRef.current.style.top = `${newTop}px`;
        }
      };

      /**
       * Handles the `pointerup` event to stop the drag process.
       * Removes the `pointermove` and `pointerup` event listeners.
       */
      const handlePointerUp = (): void => {
        // Re-enable the transition style after resizing
        if (elementRef && elementRef.current) {
          elementRef.current.style.transition = elementStyleTransition.current;
        }

        document.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('pointerup', handlePointerUp);
      };

      document.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('pointerup', handlePointerUp);
    },
    [elementRef, parent, direction, margin],
  );

  return { handlePointerDown };
};
