import { vi } from 'vitest';

import { useInfiniteScrollPagination } from '@hooks/use-infinite-scroll-pagination.hook';
import { render, testHelpers } from '@test/test-utils';

import type { UseInfiniteScrollPaginationProps } from '@hooks/use-infinite-scroll-pagination.hook';
import type { RenderType } from '@test/test-utils';

vi.mock('react-use', () => ({
  useIntersection: vi.fn(() => ({ isIntersecting: true })),
}));

const onPageEndMock = testHelpers.fn();

const defaultProps: UseInfiniteScrollPaginationProps = {
  onPageEnd: onPageEndMock,
};

const TestComponent = ({ onPageEnd, disabled }: UseInfiniteScrollPaginationProps) => {
  const { endOfPageNode } = useInfiniteScrollPagination({
    onPageEnd,
    disabled,
  });

  return <div>{endOfPageNode}</div>;
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<UseInfiniteScrollPaginationProps>): RenderType => {
  return render(
    <TestComponent
      {...defaultProps}
      {...props}
    />,
  );
};

afterEach(() => {
  testHelpers.clearAllMocks();
});

describe('useInfiniteScrollPagination - tests', () => {
  it('should call onPageEnd when intersection occurs', () => {
    renderComponent();

    expect(onPageEndMock).toHaveBeenCalledTimes(1);
  });

  it('should not call onPageEnd when disabled is true', () => {
    renderComponent({ disabled: true });

    expect(onPageEndMock).not.toHaveBeenCalled();
  });
});
