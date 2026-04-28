import { MutableRefObject } from 'react';
type UseElementOverflowParams = {
    ref: MutableRefObject<HTMLElement>;
    maxLines?: number;
};
type UseElementOverflowReturn = {
    isOverflowing: boolean;
};
export declare const ELEMENT_OVERFLOW_DEBOUNCE_DELAY = 200;
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
export declare const useElementOverflow: ({ ref, maxLines, }: UseElementOverflowParams) => UseElementOverflowReturn;
export {};
