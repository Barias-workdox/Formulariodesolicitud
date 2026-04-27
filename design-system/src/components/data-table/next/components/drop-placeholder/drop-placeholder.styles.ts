import { getTranslateX } from '../../../../utils/style.utils';

import type { StyleObject } from 'styletron-react';

/**
 * Retrieves the style object containing the position and dimensions for the `DropPlaceholder` component.
 *
 * @param list - The container element containing the list of columns.
 * @param sourceIndex - The index of the source element where the drag event started.
 * @param destinationIndex - The index of the destination element.
 * @returns The style object with `top`, `left`, `height`, and `width` properties.
 */
export const getRectStyles = (
  list: HTMLDivElement,
  sourceIndex: number,
  destinationIndex: number,
): StyleObject => {
  // Get the source element based on the `sourceIndex`
  const source: Element = list?.children[sourceIndex];
  // Get the destination element based on the `destinationIndex`
  const destination: Element = list?.children[destinationIndex];

  // Retrieve the top position and height of the element, or default to 0 if unavailable
  const { top, height } = list?.getBoundingClientRect() ?? { top: 0, height: 0 };

  // Retrieve the width of the source element, or default to 0 if unavailable
  const { width } = source?.getBoundingClientRect() ?? { width: 0 };

  // Retrieve the bounding rectangle of the destination element, or default to { left: 0, width: 0 } if unavailable
  const destinationRect = destination?.getBoundingClientRect() ?? { left: 0, width: 0 };

  // Calculate the index of the left sibling element
  const destinationLeftSiblingIndex = Math.max(destinationIndex - 1, 0);
  // Get the left sibling element based on the calculated index
  const leftSibling: Element = list?.children[destinationLeftSiblingIndex];
  // Retrieve the bounding rectangle of the left sibling element, or default to { left: 0, width: 0 } if unavailable
  const leftSiblingRect = leftSibling?.getBoundingClientRect() ?? { left: 0, width: 0 };

  // Calculate the destination left position based on conditions
  const left: number =
    destinationIndex === sourceIndex || !destinationIndex
      ? // If the destination is the same as the source or if the destination index is not set
        leftSiblingRect.left + leftSiblingRect.width - getTranslateX(leftSibling)
      : // Otherwise, calculate the left position based on the destination element and index relationship
        destinationRect.left -
        getTranslateX(destination) +
        (destinationIndex > sourceIndex ? destinationRect.width : 0);

  return { top: `${top}px`, left: `${left}px`, height: `${height}px`, width: `${width}px` };
};
