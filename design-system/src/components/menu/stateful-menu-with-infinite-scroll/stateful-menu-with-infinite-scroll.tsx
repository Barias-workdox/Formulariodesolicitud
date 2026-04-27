import { useMemo } from 'react';
import type { ReactElement } from 'react';

import { StatefulMenu as BaseStatefulMenu } from 'baseui/menu';

import { mergeOverridesDeep } from '@components/utils/baseui/helpers';

import { StyledListWithInfiniteScroll } from './components/styled-list-with-infinite-scroll';

import type { InfiniteScrollProps } from '@components/menu/stateful-menu-with-infinite-scroll/stateful-menu-with-infinite-scroll.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';
import type { StatefulMenuProps as BaseStatefulMenuProps, Items, MenuOverrides } from 'baseui/menu';

export type StatefulMenuWithInfiniteScrollProps = WithTestId &
  BaseStatefulMenuProps &
  InfiniteScrollProps;

/**
 * Enhanced version of the BaseUI's StatefulMenu that supports infinite scrolling.
 * This component manages a list of items with the ability to load more items on demand.
 * It uses customized styles and properties passed to its internal components through the overrides prop.
 */
export const StatefulMenuWithInfiniteScroll = ({
  dataTestId = 'menu',
  isLoadingMore,
  items,
  overrides = {},
  onLoadMore,
  ...rest
}: StatefulMenuWithInfiniteScrollProps): ReactElement => {
  const itemsArray: Items = Array.isArray(items) ? [...items] : { ...items };
  const {
    List: { style: listStyles, props: listProps },
    ...restOverrides
  } = overrides;

  const baseOverrides: MenuOverrides = useMemo(
    () => ({
      List: {
        component: StyledListWithInfiniteScroll,
        props: {
          ...listProps,
          dataTestId: `${dataTestId}__list`,
          isLoadingMore,
          onLoadMore,
        },
        style: listStyles,
      },
      EmptyState: {
        style: ({ $theme }) => ({
          color: $theme.colors.neutralSubdued,
        }),
      },
    }),
    [dataTestId, isLoadingMore, listProps, listStyles, onLoadMore],
  );

  const mergedOverrides = useMemo(
    () => mergeOverridesDeep(baseOverrides, restOverrides),
    [baseOverrides, restOverrides],
  );

  return (
    <BaseStatefulMenu
      {...rest}
      items={itemsArray}
      overrides={mergedOverrides}
    />
  );
};
