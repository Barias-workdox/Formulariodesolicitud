import { useCallback, useRef } from 'react';
import type { MutableRefObject } from 'react';

/**
 * Custom React hook for creating a callback ref that can be used to reference a DOM element.
 *
 * This hook returns a mutable ref object and a setter function that allows you to set the ref to a DOM element.
 * It is useful when you need to maintain a reference to a DOM element in a functional component.
 *
 * @typeparam T - The type of the DOM element that the ref will hold (defaults to 'Element').
 * @returns A tuple containing the ref object and a setter function to assign a DOM element to the ref.
 *
 * @example
 * ```
 * const [myRef, setMyRef] = useRefCallback<HTMLDivElement>();
 * // ...
 * return <div ref={setMyRef}>This element is captured by myRef.</div>;
 * ```
 *
 * @deprecated Use `useRefProxy` instead. This hook will be removed in a future version.
 */
export const useRefCallback = <T extends Element = Element>(): [
  MutableRefObject<T | null>,
  (node?: T) => void,
] => {
  const ref = useRef<T | null>(null);
  const setRef = useCallback((node) => {
    if (node && ref?.current === null) {
      ref.current = node;
    }
  }, []);

  return [ref, setRef];
};
