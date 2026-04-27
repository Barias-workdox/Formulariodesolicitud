import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

import { useIntersection } from 'react-use';

export interface IUseInfiniteScrollPagination {
  /**
   * A React node that serves as an indicator for the end of the page.
   * This node is typically placed at the bottom of the content to trigger pagination.
   */
  endOfPageNode: ReactNode;
}

export interface UseInfiniteScrollPaginationProps {
  'data-testid'?: string;
  disabled?: boolean;
  /** Options for the intersection observer. */
  intersectionOptions?: Parameters<typeof useIntersection>[1];
  /** A callback function to be called when the end of the page is reached, triggering pagination. */
  onPageEnd(): void;
}

/** Hook for enabling infinite scroll pagination. */
export const useInfiniteScrollPagination = ({
  'data-testid': dataTestId = 'design_system__infinite_scroll_pagination',
  disabled = false,
  intersectionOptions = {},
  onPageEnd,
}: UseInfiniteScrollPaginationProps): IUseInfiniteScrollPagination => {
  const endOfPageRef = useRef(null);
  const { isIntersecting } = useIntersection(endOfPageRef, intersectionOptions) || {};

  /**
   * Evaluates whether the intersection observer is intersecting, that is, it is inside the browser window,
   * if it is intersecting then will trigger "onPageEnd".
   */
  useEffect(() => {
    if (!disabled && isIntersecting) {
      onPageEnd();
    }
  }, [disabled, isIntersecting, onPageEnd]);

  return {
    endOfPageNode: (
      <div
        data-testid={`${dataTestId}-end_node`}
        ref={endOfPageRef}
      />
    ),
  };
};
