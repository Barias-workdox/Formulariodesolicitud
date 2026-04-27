import type { ReactElement } from 'react';

import { EmptyState } from '@components/empty-state';
import { ListItem, VirtualizedList } from '@components/list';
import { Spinner } from '@components/spinner';
import {
  COMMON_FLOATING_MAX_HEIGHT,
  COMMON_FLOATING_MAX_WIDTH,
  COMMON_HEIGHT_36,
} from '@constants/common.constants';

import { SearchContainer } from '../search-container';

import { useListFactoryItems } from './hooks/use-list-factory-items.hook';
import { LIST_MIN_WIDTH } from './list-factory.constants';

import type { Item, ListFactoryProps } from './list-factory.interfaces';

/**
 * Renders a searchable list of items using a factory-driven approach
 * for different "kinds" of list items.
 *
 * This component displays a search input for filtering by item label,
 * then renders each item using either a "basic" or an "avatar" variant.
 * The "basic" variant displays a checkbox as a `startEnhancer`, while
 * the "avatar" variant displays an avatar image.
 */
export const ListFactory = ({
  'data-testid': dataTestId = 'list',
  items,
  isFiltrable = true,
  minWidth = LIST_MIN_WIDTH,
  maxWidth = COMMON_FLOATING_MAX_WIDTH,
  maxHeight = COMMON_FLOATING_MAX_HEIGHT,
  emptyStateProps,
  searchValue = '',
  multi = false,
  paginationProps,
  onSearchValueChange,
  onItemClick,
}: ListFactoryProps): ReactElement => {
  const { isFetchingNextPage, onPageEnd } = paginationProps || {};
  const hasPagination = !!paginationProps;

  /**
   * Internal handler for item clicks. Fires the onItemClick callback
   * and resets the search value if the item has children.
   */
  const handleItemClick = (item: Item): void => {
    onItemClick({ item, multi });

    if (item.items) {
      onSearchValueChange('');
    }
  };

  const { renderListItems } = useListFactoryItems({
    dataTestId,
    items,
    handleItemClick,
  });

  const shouldRenderList = items.length > 0 || hasPagination;

  const content = shouldRenderList ? (
    <VirtualizedList
      data-testid={`${dataTestId}__list`}
      isInfinite={hasPagination}
      isFetchingNextPage={isFetchingNextPage}
      withBorder={false}
      $maxHeight="fit-content"
      itemHeight={parseInt(COMMON_HEIGHT_36)}
      onPageEnd={onPageEnd}
    >
      {renderListItems()}
      {isFetchingNextPage && (
        <ListItem
          data-testid={`${dataTestId}__loading`}
          label={<Spinner size="sm" />}
        />
      )}
    </VirtualizedList>
  ) : (
    <EmptyState {...emptyStateProps} />
  );

  return (
    <SearchContainer
      dataTestId={`${dataTestId}__search-container`}
      minWidth={minWidth}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      searchValue={searchValue}
      onSearchChange={onSearchValueChange}
      isFiltrable={isFiltrable}
    >
      {content}
    </SearchContainer>
  );
};
