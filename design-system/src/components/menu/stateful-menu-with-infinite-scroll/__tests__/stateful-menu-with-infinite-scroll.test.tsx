import '@test/__mocks__/use-virtualizer.mock';

import { render, screen } from '@test/test-utils';

import { StatefulMenuWithInfiniteScroll } from '../stateful-menu-with-infinite-scroll';

import type { StatefulMenuWithInfiniteScrollProps } from '../stateful-menu-with-infinite-scroll';
import type { MenuOverrides } from 'baseui/menu';

const items = [
  { id: 1, label: 'Item 1' },
  { id: 2, label: 'Item 2' },
  { id: 3, label: 'Item 3' },
];

const overrides: MenuOverrides = {
  List: {},
};

const renderComponent = (props: Partial<StatefulMenuWithInfiniteScrollProps> = {}) => {
  return render(
    <StatefulMenuWithInfiniteScroll
      items={items}
      isLoadingMore={false}
      overrides={overrides}
      onLoadMore={vi.fn()}
      {...props}
    />,
  );
};

describe('StatefulMenuWithInfiniteScroll', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the menu items correctly', () => {
    renderComponent();

    items.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('displays the loading sendor when isLoadingMore is false', () => {
    renderComponent();

    expect(screen.getByTestId('load-more-sensor')).toBeInTheDocument();
    expect(screen.queryByTestId('load-more-sensor--spinner')).not.toBeInTheDocument();
  });

  it('displays loading indicator when isLoadingMore is true', () => {
    renderComponent({ isLoadingMore: true });

    expect(screen.queryByTestId('load-more-sensor')).not.toBeInTheDocument();
    expect(screen.getByTestId('load-more-sensor--spinner')).toBeInTheDocument();
  });
});
