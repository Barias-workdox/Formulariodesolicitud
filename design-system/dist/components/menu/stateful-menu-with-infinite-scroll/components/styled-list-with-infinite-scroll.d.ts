import { PropsWithChildren } from 'react';
import { InfiniteScrollProps } from '../stateful-menu-with-infinite-scroll.interfaces';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export type StyledListWithInfiniteScrollProps = WithTestId & InfiniteScrollProps & PropsWithChildren<{
    itemHeight?: number;
    $maxHeight: string;
    role: string;
}>;
/**
 * A customized version of the StyledListBase that includes a LoadMoreSensor for infinite scrolling capabilities.
 * This list component is designed tor be used within an infinite-scrolling menu context, where it can handle
 * additional items being loaded as the user scrolls.
 *
 * The StyledList integrates with the LoadMoreSensor component to automatically trigger loading more items
 * based on scroll position and isLoadingMore flag.
 */
export declare const StyledListWithInfiniteScroll: import('react').ForwardRefExoticComponent<{
    'data-testid'?: string;
    dataTestId?: string;
} & InfiniteScrollProps & {
    itemHeight?: number;
    $maxHeight: string;
    role: string;
} & {
    children?: import('react').ReactNode | undefined;
} & import('react').RefAttributes<HTMLDivElement>>;
