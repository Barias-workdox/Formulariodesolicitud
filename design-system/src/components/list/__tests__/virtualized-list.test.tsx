import { useIntersection } from 'react-use';

import { CLIENT_RECT_HEIGHT_MOCK } from '@test/__mocks__/use-virtualizer.mock';
import { render, screen, testHelpers } from '@test/test-utils';

import { VirtualizedList } from '../virtualized-list';
import { VIRTUALIZED_LIST_OVERSCAN } from '../virtualized-list.constants';

import type { VirtualizedListProps } from '../virtualized-list';
import type { Mock } from 'vitest';

vi.mock('react-use', () => ({
  useIntersection: vi.fn(() => ({ isIntersecting: false })),
}));

const defaultProps: VirtualizedListProps = {
  $maxHeight: '300px',
  itemHeight: 40,
  children: [<div key="1">Item 1</div>, <div key="2">Item 2</div>, <div key="3">Item 3</div>],
};

const renderComponent = (props: Partial<VirtualizedListProps> = {}) => {
  const componentProps = { ...defaultProps, ...props } as VirtualizedListProps;

  const result = render(<VirtualizedList {...componentProps} />);

  const rerender = () => result.rerender(<VirtualizedList {...componentProps} />);

  return { ...result, rerender };
};

describe('VirtualizedList', () => {
  it('renders the list with virtualized items', () => {
    renderComponent();

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  it('handles empty children gracefully', () => {
    renderComponent({ ...defaultProps, children: [] });

    expect(screen.queryByText('Item 1')).toBeNull();
    expect(screen.queryByText('Item 2')).toBeNull();
    expect(screen.queryByText('Item 3')).toBeNull();
  });
});

describe('VirtualizedList infinite cases', () => {
  const mockOnLastItemRendered = vi.fn();
  const mockOnPageEnd = vi.fn();

  beforeEach(() => {
    testHelpers.clearAllMocks();

    // Simulate no intersection
    vi.mocked(useIntersection as Mock).mockReturnValue({ isIntersecting: false });
  });

  it('should call onLastItemRendered (deprecated) when `isInfinite` = true and onEndPage is not provided', () => {
    const { rerender } = renderComponent({
      isInfinite: true,
      isFetchingNextPage: false,
      onLastItemRendered: mockOnLastItemRendered, // deprecated callback
    });

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
    expect(mockOnLastItemRendered).toHaveBeenCalledTimes(0);

    // Simulate intersection
    vi.mocked(useIntersection as Mock).mockReturnValue({ isIntersecting: true });

    rerender();

    expect(mockOnLastItemRendered).toHaveBeenCalledTimes(1);
  });

  it('should call onPageEnd when `isInfinite` = true', () => {
    const { rerender } = renderComponent({
      isInfinite: true,
      isFetchingNextPage: false,
      onLastItemRendered: mockOnLastItemRendered, // deprecated callback
      onPageEnd: mockOnPageEnd, // new callback
    });

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
    expect(mockOnLastItemRendered).toHaveBeenCalledTimes(0);
    expect(mockOnPageEnd).toHaveBeenCalledTimes(0);

    // Simulate intersection
    vi.mocked(useIntersection as Mock).mockReturnValue({ isIntersecting: true });

    rerender();

    expect(mockOnLastItemRendered).toHaveBeenCalledTimes(0);
    expect(mockOnPageEnd).toHaveBeenCalledTimes(1);
  });

  it('should render only visible items and overscan items', () => {
    const manyItems = Array.from({ length: 1000 }, (_, i) => <div key={i}>Item {i}</div>);

    const visibleItemsCount = Math.floor(CLIENT_RECT_HEIGHT_MOCK / defaultProps.itemHeight);

    const totalRenderedItemsCount = visibleItemsCount + VIRTUALIZED_LIST_OVERSCAN;

    renderComponent({
      isInfinite: true,
      children: manyItems,
      isFetchingNextPage: false,
      onPageEnd: mockOnPageEnd,
    });

    expect(screen.getAllByText(/Item \d+/)).toHaveLength(totalRenderedItemsCount);
  });
});
