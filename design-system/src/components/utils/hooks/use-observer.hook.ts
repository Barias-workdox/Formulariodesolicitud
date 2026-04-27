import { useCallback, useEffect, useRef } from 'react';
import type { RefObject } from 'react';

import ResizeObserver from 'resize-observer-polyfill';

export interface useObserverParams {
  element: RefObject<HTMLElement>;
  callback(entries: ResizeObserverEntry[]): void;
}

/**
 * This hook is used to observe an element in order to trigger a callback when it gets resized
 * we are using the ResizeObserver API to achieve this
 */
export const useObserver = ({ callback, element }: useObserverParams): void => {
  const currentElement = element && element.current;

  const observer = useRef(null);

  const observe = useCallback(() => {
    if (observer.current && currentElement) {
      observer.current.observe(currentElement);
    }
  }, [currentElement]);

  const unobserve = useCallback(() => {
    if (observer.current && currentElement) {
      observer.current.unobserve(currentElement);
    }
  }, [currentElement]);

  useEffect(() => {
    // if we are already observing old element
    unobserve();
    // set new observer
    observer.current = new ResizeObserver(callback);
    observe();

    return (): void => {
      unobserve();
    };
  }, [callback, observe, unobserve, currentElement]);
};
