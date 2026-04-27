import { useCallback, useLayoutEffect, useState } from 'react';
import type { MutableRefObject, ReactElement } from 'react';

import isEqual from 'lodash/isEqual';

import { DATA_TABLE_Z_INDEX } from '@components/data-table/next/data-table.constants';

import { useCss } from '../../../../utils/hooks/use-css';

import { getRectStyles } from './drop-placeholder.styles';

import type { DroppableProvided } from '@hello-pangea/dnd';
import type { StyleObject } from 'styletron-react';

type DropPlaceholderProps = {
  containerRef?: MutableRefObject<HTMLDivElement | null>;
  listRef?: MutableRefObject<HTMLDivElement | null>;
  sourceIndex?: number;
  destinationIndex?: number;
  dropProvided: DroppableProvided;
};

/**
 * A component that displays a drop placeholder during drag and drop operations.
 *
 * It receives the necessary props including the container and list references, source and destination indices,
 * and the `DroppableProvided` object provided by `@hello-pangea/dnd`.
 * It calculates the position and dimensions of the placeholder based on the source and destination indices
 * and applies the updated styles to a fixed-position element with dashed border and specified colors.
 * The position and dimensions of the placeholder are updated when scrolling occurs.
 */
export const DropPlaceholder = ({
  containerRef,
  listRef,
  sourceIndex,
  destinationIndex,
  dropProvided,
}: DropPlaceholderProps): ReactElement => {
  const { theme } = useCss();
  const [styles, setStyles] = useState<StyleObject | null>({
    top: 0,
    left: 0,
    height: 0,
    width: 0,
  });

  /**
   * Callback function to update the position of the element.
   *
   * This function calculates the updated position of the element based on the source and destination indices.
   * It uses the `getRectStyles` utility function to obtain the updated styles, including `top`, `left`, `height`, and `width` properties.
   * The updated styles are then applied to the element using the `setStyles` function.
   * The update is scheduled using `requestAnimationFrame` to ensure smooth rendering and avoid layout thrashing.
   *
   * Note: The function early returns if the source index is not set (falsy).
   */
  const updatePosition = useCallback((): void => {
    if (!sourceIndex || !destinationIndex) {
      return;
    }

    window.requestAnimationFrame(() => {
      if (listRef?.current) {
        const updatedStyles = getRectStyles(listRef.current, sourceIndex, destinationIndex);

        if (!isEqual(styles, updatedStyles)) {
          setStyles(updatedStyles);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sourceIndex, destinationIndex]);

  /**
   * Effect to update the position of the element.
   *
   * This effect is responsible for initially updating the position of the element and attaching event listeners
   * to the container and window scroll events to ensure the position is updated when scrolling occurs.
   * The `updatePosition` callback is invoked to calculate and apply the updated position.
   *
   * The effect returns a cleanup function that removes the event listeners when the component unmounts to avoid memory leaks.
   */
  useLayoutEffect(() => {
    updatePosition();

    let container: HTMLDivElement | null = null;

    if (containerRef?.current) {
      container = containerRef.current;
      container.addEventListener('scroll', updatePosition);
      window.addEventListener('scroll', updatePosition);
    }

    // Cleanup function to remove event listeners when the component unmounts
    return (): void => {
      container?.removeEventListener('scroll', updatePosition);
      window.removeEventListener('scroll', updatePosition);
      setStyles(null);
    };
  }, [containerRef, updatePosition]);

  return (
    <>
      {dropProvided.placeholder}

      {sourceIndex !== undefined && styles && (
        <div
          data-testid="data-table__drop--placeholder"
          style={{
            zIndex: DATA_TABLE_Z_INDEX.sticky,
            position: 'fixed',
            top: styles.top,
            width: styles.width,
            left: `calc(${styles.left} - 1px)`,
            height: `calc(${styles.height} - 2px)`,
            border: `1px dashed ${theme.colors.brand}`,
            backgroundColor: theme.colors.brandWashed,
          }}
        />
      )}
    </>
  );
};
