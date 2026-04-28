import { RefObject } from 'react';
export interface useObserverParams {
    element: RefObject<HTMLElement>;
    callback(entries: ResizeObserverEntry[]): void;
}
/**
 * This hook is used to observe an element in order to trigger a callback when it gets resized
 * we are using the ResizeObserver API to achieve this
 */
export declare const useObserver: ({ callback, element }: useObserverParams) => void;
