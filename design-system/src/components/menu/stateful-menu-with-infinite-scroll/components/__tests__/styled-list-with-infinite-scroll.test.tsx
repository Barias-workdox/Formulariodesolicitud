import { forwardRef } from 'react';
import type { ForwardedRef, ReactElement, ReactNode } from 'react';

import { render, screen } from '@test/test-utils';
import '@test/__mocks__/use-virtualizer.mock';

import { StyledListWithInfiniteScroll } from '../styled-list-with-infinite-scroll';

import type { StyledListWithInfiniteScrollProps } from '../styled-list-with-infinite-scroll';

/** Component to use as child of StyledListWithInfiniteScroll. */
const Item = forwardRef(function Item(
  { children }: { children: ReactNode; 'data-index': number },
  ref: ForwardedRef<HTMLDivElement>,
): ReactElement {
  return (
    <div
      data-index={1}
      ref={ref}
    >
      {children}
    </div>
  );
});

const defaultProps: StyledListWithInfiniteScrollProps = {
  $maxHeight: '300px',
  role: 'listbox',
  isLoadingMore: false,
  children: [
    <Item
      data-index={1}
      key="1"
    >
      Item 1
    </Item>,
    <Item
      data-index={2}
      key="2"
    >
      Item 2
    </Item>,
    <Item
      data-index={3}
      key="3"
    >
      Item 3
    </Item>,
  ],
  onLoadMore: vi.fn(),
};

const renderComponent = (props: Partial<StyledListWithInfiniteScrollProps> = {}) => {
  return render(
    <StyledListWithInfiniteScroll
      {...defaultProps}
      {...props}
    />,
  );
};

describe('StyledListWithInfiniteScroll', () => {
  it('renders the list with virtualized items', () => {
    renderComponent();

    // Assert that the virtualized items are rendered
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  it('renders the "load more sensor" when there are items and isLoadingMore=false', async () => {
    renderComponent({
      isLoadingMore: false,
    });

    // Assert that the load more sensor is rendered
    expect(screen.getByTestId('load-more-sensor')).toBeInTheDocument();
  });

  it('renders the "load more spinner" when there are items and isLoadingMore=true', async () => {
    renderComponent({
      isLoadingMore: true,
    });

    // Assert that the load more sensor is rendered
    expect(screen.getByTestId('load-more-sensor--spinner')).toBeInTheDocument();
  });

  it('does not render the load more sensor when there are no items', () => {
    renderComponent({
      isLoadingMore: true,
      children: undefined,
    });

    // Assert that the load more sensor is not rendered
    expect(screen.queryByTestId('load-more-sensor')).toBeNull();
  });
});
