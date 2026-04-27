import { useCallback, useEffect, useState } from 'react';
import type { MutableRefObject } from 'react';

import { debounce } from 'lodash';

import { IS_TEST_MODE } from '@constants/dev.constants';

type UseElementOverflowParams = { ref: MutableRefObject<HTMLElement>; maxLines?: number };

type UseElementOverflowReturn = {
  isOverflowing: boolean;
};

export const ELEMENT_OVERFLOW_DEBOUNCE_DELAY = 200;

/**
 * Custom hook to determine if the content of an HTML element overflows its container.
 *
 * @example
 * ```
 * const ref = useRef(null);
 * const { isOverflowing } = useElementOverflow({ ref });
 *
 * useEffect(() => {
 *   console.log('Is overflowing:', isOverflowing);
 * }, [isOverflowing]);
 *
 * return <div ref={ref}>Some text content</div>;
 * ```
 */
export const useElementOverflow = ({
  ref,
  maxLines = 1,
}: UseElementOverflowParams): UseElementOverflowReturn => {
  const [isOverflowing, setIsOverflowing] = useState(false);

  /**
   * Checks if the content of the referenced element is overflowing.
   * Sets the `isOverflowing` state to true if the content overflows, otherwise sets it to false.
   */
  const checkOverflow = useCallback(() => {
    const element = ref.current;

    if (element) {
      const lineHeight = parseFloat(window.getComputedStyle(element).lineHeight);
      const maxHeight = lineHeight * maxLines;
      const { scrollHeight } = element;

      setIsOverflowing(scrollHeight > maxHeight);
    }
  }, [maxLines, ref]);

  // TODO: Evaluate if we can add the missing dependencies
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedCheckOverflow = useCallback(
    debounce(checkOverflow, ELEMENT_OVERFLOW_DEBOUNCE_DELAY),
    [checkOverflow],
  );

  /**
   * It checks for overflow initially and sets up an observer to check for overflow on element content changes or resizing.
   * Cleans up the observer when the component unmounts or dependencies change.
   */
  useEffect(() => {
    const element = ref.current;

    if (element) {
      try {
        const resizeObserver = new ResizeObserver(debouncedCheckOverflow);

        resizeObserver.observe(element);

        // Ensure the overflow check runs initially
        debouncedCheckOverflow();

        return (): void => {
          resizeObserver.disconnect();
          debouncedCheckOverflow.cancel();
        };
      } catch (e) {
        // If the resize observer is not supported, fallback to the default overflow check
        checkOverflow();

        // Log the error only in non-test mode
        if (!IS_TEST_MODE) {
          console.log(e);
        }
      }
    }
  }, [ref, debouncedCheckOverflow, checkOverflow]);

  return { isOverflowing };
};
