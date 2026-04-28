import { ReactElement } from 'react';
import { InfiniteScrollProps } from './stateful-menu-with-infinite-scroll.interfaces';
import { WithTestId } from '../../../interfaces/common.interfaces';
import { StatefulMenuProps as BaseStatefulMenuProps } from 'baseui/menu';
export type StatefulMenuWithInfiniteScrollProps = WithTestId & BaseStatefulMenuProps & InfiniteScrollProps;
/**
 * Enhanced version of the BaseUI's StatefulMenu that supports infinite scrolling.
 * This component manages a list of items with the ability to load more items on demand.
 * It uses customized styles and properties passed to its internal components through the overrides prop.
 */
export declare const StatefulMenuWithInfiniteScroll: ({ dataTestId, isLoadingMore, items, overrides, onLoadMore, ...rest }: StatefulMenuWithInfiniteScrollProps) => ReactElement;
