import { Children, cloneElement, forwardRef, useRef } from 'react';
import type { PropsWithChildren, ReactElement } from 'react';

import { useVirtualizer } from '@tanstack/react-virtual';
import { withStyle } from 'baseui';
import { StyledList } from 'baseui/menu';

import { menuItemListItemStyles } from '@components/menu/components/menu-item.styles';
import { useCss } from '@components/utils/hooks/use-css';
import { themedStyled } from '@themes/utilities';

import { LoadMoreSensor } from './load-more-sensor';

import type { InfiniteScrollProps } from '@components/menu/stateful-menu-with-infinite-scroll/stateful-menu-with-infinite-scroll.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

const Container = themedStyled<'div', { $maxHeight: string }>('div', ({ $maxHeight }) => ({
  height: '100%',
  maxHeight: $maxHeight,
  overflow: 'auto',
}));

const List = withStyle<typeof StyledList, { $height: string }>(StyledList, ({ $height }) => ({
  height: $height,
  minHeight: '1px',
  width: '100%',
  position: 'relative',
  padding: 0,
}));

const StyledSensorWrapper = themedStyled('li', ({ $theme }) => ({
  ...menuItemListItemStyles({ theme: $theme, optionListBorderBottom: false }),
  position: 'absolute',
  width: '100%',
  listStyle: 'none',
  bottom: 0,
  padding: 0,
}));

export type StyledListWithInfiniteScrollProps = WithTestId &
  InfiniteScrollProps &
  PropsWithChildren<{
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
export const StyledListWithInfiniteScroll = forwardRef<
  HTMLDivElement,
  StyledListWithInfiniteScrollProps
>(function StyledListWithInfiniteScrollInner(
  { dataTestId = 'list', children, isLoadingMore, itemHeight = 48, role, onLoadMore, ...props },
  _,
) {
  const { css } = useCss();

  // The scrollable element for your list
  const parentRef = useRef();

  const items = Children.toArray(children);
  const isEmpty = !Array.isArray(children);

  // The virtualizer
  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => itemHeight,
  });

  const height = `${rowVirtualizer.getTotalSize()}px`;
  const totalHeight = isLoadingMore ? `calc(${height} + ${itemHeight}px)` : height;
  const listHeight = isEmpty ? 'auto' : totalHeight;

  return (
    <Container
      ref={parentRef}
      {...props}
    >
      {/* The large inner element to hold all of the items */}
      <List
        data-testid={dataTestId}
        role={role}
        $height={listHeight}
      >
        {/* Only the visible items in the virtualizer, manually positioned to be in view */}
        {rowVirtualizer.getVirtualItems().map((virtualItem) =>
          cloneElement(items[virtualItem.index] as ReactElement, {
            'data-index': virtualItem.index,
            'data-testid': `${dataTestId}__item--${virtualItem.index}`,
            key: virtualItem.key,
            ref: rowVirtualizer.measureElement,
            className: css({
              top: 0,
              left: 0,
              width: '100%',
              alignItems: 'center',
              justifyContent: isEmpty ? 'center' : undefined,
              boxSizing: 'border-box',
            }),
            style: {
              position: !isEmpty ? 'absolute' : undefined,
              transform: `translateY(${virtualItem.start}px)`,
              minHeight: virtualItem.index === 0 ? itemHeight : virtualItem.size,
              display: 'flex',
            },
          }),
        )}
        {!isEmpty && (
          <StyledSensorWrapper>
            <LoadMoreSensor
              isLoadingMore={isLoadingMore}
              onLoadMore={onLoadMore}
            />
          </StyledSensorWrapper>
        )}
      </List>
    </Container>
  );
});

StyledListWithInfiniteScroll.displayName = 'StyledListWithInfiniteScroll';
