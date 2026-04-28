import { RefObject } from 'react';
/**
 * Hook to listen to the window size and update the container width
 *
 * It is used to set the width in the popover content and in the selected value
 * to correctly apply the `textOverflow: ellipsis`.
 */
export declare const useContainerWidth: (ref: RefObject<HTMLDivElement>) => {
    containerWidth: number;
};
