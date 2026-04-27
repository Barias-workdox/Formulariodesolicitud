import { RESIZE_DIRECTIONS } from '@constants/resizable-element.constants';

import type { DimensionData, ResizeData } from '@interfaces/resizable-element.interfaces';

export interface CalculateNewDimensionsParams {
  /** The HTML element being resized. */
  element: HTMLElement;
  /** Initial data including dimensions, position, and direction of resizing. */
  data: ResizeData;
  /** Change in X coordinate from the starting point. */
  deltaX: number;
  /** Change in Y coordinate from the starting point. */
  deltaY: number;
  /** The margin of the element from the viewport boundary. */
  margin?: number;
  /** The minimum width of the element. */
  minWidth?: number;
  /** The minimum height of the element. */
  minHeight?: number;
}

/**
 * Calculates the new dimensions and position of the element during resizing.
 *
 * @returns The calculated new dimensions and position of the element.
 */
export const calculateNewDimensions = ({
  data,
  deltaX,
  deltaY,
  element,
  margin = 0,
  minWidth: minWidthProp,
  minHeight: minHeightProp,
}: CalculateNewDimensionsParams): DimensionData => {
  const { initialWidth, initialHeight, initialLeft, initialTop, direction } = data;

  let newWidth = initialWidth;
  let newHeight = initialHeight;
  let newLeft = initialLeft;
  let newTop = initialTop;

  // Horizontal resizing
  if (direction.includes(RESIZE_DIRECTIONS.RIGHT)) {
    // Expand width to the right, constrained by the viewport boundary and minimum width.
    const minWidth = parseFloat(element.style.minWidth) || minWidthProp;

    newWidth = Math.max(
      minWidth,
      Math.min(initialWidth + deltaX, window.innerWidth - margin - newLeft),
    );
  }

  if (direction.includes(RESIZE_DIRECTIONS.LEFT)) {
    // Resize from left edge: positive deltaX means dragging right (shrinking), negative means dragging left (expanding)
    const minWidth = parseFloat(element.style.minWidth) || minWidthProp; // Use dialog minimum width constant
    const maxWidth = parseFloat(element.style.maxWidth) || window.innerWidth - margin * 2; // Default max width

    // Calculate potential new dimensions
    const potentialNewWidth = initialWidth - deltaX; // Subtract deltaX because left edge resize
    const potentialNewLeft = initialLeft + deltaX; // Add deltaX to move left position

    // Ensure we don't go beyond the left margin (viewport boundary)
    if (potentialNewLeft < margin) {
      // If we hit the left boundary, keep left at margin and adjust width accordingly
      newLeft = margin;
      newWidth = Math.max(minWidth, initialWidth + initialLeft - margin);
    } else {
      // Normal case: respect min/max width constraints
      newWidth = Math.max(minWidth, Math.min(maxWidth, potentialNewWidth));

      // If width was constrained, adjust left position accordingly
      if (newWidth !== potentialNewWidth) {
        newLeft = initialLeft + initialWidth - newWidth;
      } else {
        newLeft = potentialNewLeft;
      }
    }

    // Final check: ensure minimum width is respected and adjust position if needed
    if (newWidth < minWidth) {
      newWidth = minWidth;
      newLeft = initialLeft + initialWidth - minWidth;
    }
  }

  // Vertical resizing
  if (direction.includes(RESIZE_DIRECTIONS.BOTTOM)) {
    // Expand height downward, constrained by the viewport boundary and minimum height.
    const minHeight = parseFloat(element.style.minHeight) || minHeightProp;

    newHeight = Math.max(
      minHeight,
      Math.min(initialHeight + deltaY, window.innerHeight - margin - newTop),
    );
  }

  if (direction.includes(RESIZE_DIRECTIONS.TOP)) {
    // Resize from top edge: positive deltaY means dragging down (shrinking), negative means dragging up (expanding)
    const minHeight = parseFloat(element.style.minHeight) || minHeightProp;
    const maxHeight = parseFloat(element.style.maxHeight) || window.innerHeight - margin * 2; // Default max height

    // Calculate potential new dimensions
    const potentialNewHeight = initialHeight - deltaY; // Subtract deltaY because top edge resize
    const potentialNewTop = initialTop + deltaY; // Add deltaY to move top position

    // Ensure we don't go beyond the top margin (viewport boundary)
    if (potentialNewTop < margin) {
      // If we hit the top boundary, keep top at margin and adjust height accordingly
      newTop = margin;
      newHeight = Math.max(minHeight, initialHeight + initialTop - margin);
    } else {
      // Normal case: respect min/max height constraints
      newHeight = Math.max(minHeight, Math.min(maxHeight, potentialNewHeight));

      // If height was constrained, adjust top position accordingly
      if (newHeight !== potentialNewHeight) {
        newTop = initialTop + initialHeight - newHeight;
      } else {
        newTop = potentialNewTop;
      }
    }

    // Final check: ensure minimum height is respected and adjust position if needed
    if (newHeight < minHeight) {
      newHeight = minHeight;
      newTop = initialTop + initialHeight - minHeight;
    }
  }

  return { width: newWidth, height: newHeight, left: newLeft, top: newTop };
};
