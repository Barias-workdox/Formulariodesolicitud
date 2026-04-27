import type { ReactElement } from 'react';

import { useInfiniteScrollPagination } from '@hooks/use-infinite-scroll-pagination.hook';

import { INFINITE_SCROLL_PAGINATION_MARGIN } from '../data-table.constants';
import { useDataTableContext } from '../hooks/use-data-table-context';

/**
 * Helper component for DataTable infinite scroll pagination.
 *
 * This node is used internally to detect when the user has reached the end of the list,
 * triggering the loading of additional data if infinite pagination is enabled.
 * It leverages the Intersection Observer API via the useInfiniteScrollPagination hook.
 *
 * Should not be used directly outside of the DataTable context.
 */
export const EndOfPageNode = (): ReactElement => {
  const {
    listRef,
    containerRef,
    paginationSettings: { isEnabled, method, onPageEnd = (): void => {} } = {},
  } = useDataTableContext();

  const isInfinitePaginationEnabled = isEnabled && method === 'infinite';

  const { endOfPageNode } = useInfiniteScrollPagination({
    disabled: !isInfinitePaginationEnabled,
    intersectionOptions: {
      root: containerRef?.current?.parentElement,
      rootMargin: INFINITE_SCROLL_PAGINATION_MARGIN,
      threshold: 0.1,
    },
    onPageEnd,
  });

  return isInfinitePaginationEnabled ? (
    <div style={{ width: `${listRef?.current?.clientWidth}px` }}>{endOfPageNode}</div>
  ) : (
    <></>
  );
};
