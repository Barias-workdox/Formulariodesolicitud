import { Children, cloneElement, useCallback, useEffect, useRef } from 'react';
import type { PropsWithChildren, ReactElement } from 'react';

import { useVirtualizer } from '@tanstack/react-virtual';
import { Block } from 'baseui/block';

import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { useInfiniteScrollPagination } from '@hooks/use-infinite-scroll-pagination.hook';
import { themedStyled } from '@themes/utilities';
import { noop } from '@utils/noop';

import { List } from './list';
import { VIRTUALIZED_LIST_OVERSCAN } from './virtualized-list.constants';
import { getVirtualItemStyles } from './virtualized-list.styles';

import type { WithTestId } from '@interfaces/common.interfaces';
import type { StyleObject } from 'styletron-react';

const Container = themedStyled<
  'div',
  { $maxHeight: string; $withBorder: boolean; $styles?: StyleObject }
>('div', ({ $theme, $maxHeight, $withBorder, $styles }) => ({
  height: '100%',
  overflow: 'auto',
  maxHeight: $maxHeight,
  border: $withBorder ? `1px solid ${$theme.colors.neutralSubtle}` : undefined,
  ...$styles,
}));

type BaseVirtualizedListProps = WithTestId & {
  role?: string;
  $maxHeight: string;
  withBorder?: boolean;
  itemHeight?: number;
  containerStyles?: StyleObject;
};

type VirtualizedListType =
  | ({
      isInfinite?: false;
      isFetchingNextPage?: boolean;
      /** @deprecated Use `onPageEnd` instead */
      onLastItemRendered?(): void;
      onPageEnd?(): void;
    } & BaseVirtualizedListProps)
  | ({
      isInfinite: true;
      isFetchingNextPage: boolean;
      /** @deprecated Use `onPageEnd` instead */
      onLastItemRendered?(): void;
      onPageEnd(): void;
    } & BaseVirtualizedListProps);

export type VirtualizedListProps = PropsWithChildren<VirtualizedListType>;

/**
 * A virtualized list component that efficiently renders a large list of items.
 *
 * @remarks
 * **Important**: Each direct child of this component must include an `overrides` prop
 * in its props object. The virtualized list applies inline styles (via `getVirtualItemStyles`)
 * to each child by merging and passing them through `overrides`. If a child does not
 * implement or pass the `overrides` prop, the virtualized layout and styling will
 * not be applied correctly (leading to potential layout or measurement issues).
 *
 * @example
 * ```tsx
 * // Example usage demonstrating a child component (ListItem) that exposes an `overrides` prop.
 *
 * <VirtualizedList $maxHeight="300px" itemHeight={44}>
 *   {myData.map((item, index) => (
 *     <ListItem
 *       key={item.id}
 *       label={item.label}
 *
 *       // At least internally, the component must spread the override styles
 *       // for proper measurement & virtualization.
 *       overrides={{ // At least internally the component must spread the override styles
 *         Root: {
 *           style: { color: 'red' },
 *         },
 *       }}
 *       // Other props as needed
 *     />
 *   ))}
 * </VirtualizedList>
 * ```
 */
export const VirtualizedList = ({
  'data-testid': dataTestId = 'list',
  $maxHeight,
  itemHeight,
  role = 'list',
  children,
  containerStyles,
  isInfinite = false,
  isFetchingNextPage,
  withBorder = true,
  onLastItemRendered = noop,
  onPageEnd,
}: PropsWithChildren<VirtualizedListProps>): JSX.Element => {
  const parentRef = useRef<HTMLDivElement>(null);
  const isFetchingNextPageRef = useRef(isFetchingNextPage);
  const items = Children.toArray(children);

  const rowVirtualizer = useVirtualizer({
    count: items.length,
    overscan: VIRTUALIZED_LIST_OVERSCAN,
    estimateSize: () => itemHeight,
    getScrollElement: () => parentRef.current,
  });

  /**
   * Handles triggering the appropriate callback when the end of the list is reached.
   */
  const handleOnPageEnd = useCallback(() => {
    if (!isFetchingNextPageRef.current) {
      if (onPageEnd) {
        onPageEnd();
      } else {
        onLastItemRendered();
      }

      isFetchingNextPageRef.current = true;
    }
  }, [onLastItemRendered, onPageEnd]);

  const { endOfPageNode } = useInfiniteScrollPagination({
    onPageEnd: handleOnPageEnd,
  });

  /**
   * Synchronizes the internal `isFetchingNextPageRef` state with the current `isFetchingNextPage` prop.
   */
  useEffect(() => {
    if (!isFetchingNextPage) {
      isFetchingNextPageRef.current = false;
    }
  }, [isFetchingNextPage]);

  const virtualItems = rowVirtualizer.getVirtualItems();
  const height = `${rowVirtualizer.getTotalSize()}px`;

  return (
    <Container
      data-testid={dataTestId}
      ref={parentRef}
      $maxHeight={$maxHeight}
      $withBorder={withBorder}
      $styles={containerStyles}
    >
      {/* The large inner element to hold all of the items */}
      <List
        data-testid={`${dataTestId}__list-inner`}
        role={role}
        $height={height}
        $withBorder={false}
        $overflow="unset"
      >
        {/* Only the visible items in the virtualizer, manually positioned to be in view */}
        {virtualItems.map((virtualItem) =>
          cloneElement(items[virtualItem.index] as ReactElement, {
            key: (items[virtualItem.index] as ReactElement).key || virtualItem.key,
            'data-index': virtualItem.index,
            ref: rowVirtualizer.measureElement,
            overrides: mergeOverridesDeep(
              {
                Root: {
                  props: {
                    'data-index': virtualItem.index,
                  },
                  style: getVirtualItemStyles(virtualItem, itemHeight),
                },
              },
              (items[virtualItem.index] as ReactElement).props?.overrides || {},
            ),
          }),
        )}

        {isInfinite && (
          <Block
            position="absolute"
            bottom={0}
            left={0}
            width="100%"
          >
            {endOfPageNode}
          </Block>
        )}
      </List>
    </Container>
  );
};
