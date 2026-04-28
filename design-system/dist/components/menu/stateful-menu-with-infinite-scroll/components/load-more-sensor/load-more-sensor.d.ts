import { ReactElement } from 'react';
import { InfiniteScrollProps } from '../../stateful-menu-with-infinite-scroll.interfaces';
import { WithTestId } from '../../../../../interfaces/common.interfaces';
type LoadMoreSensorProps = WithTestId<InfiniteScrollProps>;
/**
 * Helper component to observe if the element is visible
 */
export declare const LoadMoreSensor: ({ "data-testid": dataTestId, isLoadingMore, onLoadMore, }: LoadMoreSensorProps) => ReactElement;
export {};
