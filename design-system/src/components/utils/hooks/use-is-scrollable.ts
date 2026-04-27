import { useLayoutEffect, useState, type RefObject } from 'react';

/**
 * Scrollability information returned by useIsScrollable.
 */
interface ScrollableInfo {
  horizontal: boolean;
  vertical: boolean;
  any: boolean;
}

const INITIAL_STATE: ScrollableInfo = { horizontal: false, vertical: false, any: false };

/**
 * Detects whether a container element is scrollable in each direction.
 *
 * Uses ResizeObserver (scheduled via requestAnimationFrame) to react to size
 * changes with no debounce delay. Returns `{ horizontal, vertical, any }`.
 */
export const useIsScrollable = (
  containerRef?: RefObject<HTMLDivElement | null>,
): ScrollableInfo => {
  const [scrollableInfo, setScrollableInfo] = useState<ScrollableInfo>(INITIAL_STATE);

  useLayoutEffect(() => {
    const el = containerRef?.current;

    if (!el) return;

    let rafId = 0;

    /**
     * Checks whether the container is scrollable in each direction and updates state
     */
    const check = (): void => {
      const { overflowX, overflowY } = window.getComputedStyle(el);
      const horizontal = overflowX !== 'hidden' && el.scrollWidth > el.clientWidth;
      const vertical = overflowY !== 'hidden' && el.scrollHeight > el.clientHeight;

      setScrollableInfo((prev) => {
        if (prev.horizontal === horizontal && prev.vertical === vertical) return prev;

        return { horizontal, vertical, any: horizontal || vertical };
      });
    };

    /**
     * Schedules a check on the next animation frame, canceling any previously scheduled check
     */
    const schedule = (): void => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(check);
    };

    check(); // synchronous initial check before first paint

    const ro = new ResizeObserver(schedule);

    ro.observe(el);

    return (): void => {
      ro.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [containerRef]);

  return scrollableInfo;
};
