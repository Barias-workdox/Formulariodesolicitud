import { RefObject } from 'react';
/**
 * Scrollability information returned by useIsScrollable.
 */
interface ScrollableInfo {
    horizontal: boolean;
    vertical: boolean;
    any: boolean;
}
/**
 * Detects whether a container element is scrollable in each direction.
 *
 * Uses ResizeObserver (scheduled via requestAnimationFrame) to react to size
 * changes with no debounce delay. Returns `{ horizontal, vertical, any }`.
 */
export declare const useIsScrollable: (containerRef?: RefObject<HTMLDivElement | null>) => ScrollableInfo;
export {};
