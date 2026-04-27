import { userEvent } from '@testing-library/user-event';
import { useIntersection } from 'react-use';

import { ContentTypes } from '@components/filters-group-factory/filter-group-factory.constants';
import { render, renderUseTranslation, screen } from '@test/test-utils';
import '@test/__mocks__/use-virtualizer.mock';

import { FilterFactoryListType } from '../filter-factory-list-type';

import type { FilterFactoryListTypeProps } from '../filter-factory-list-type';
import type { Item } from '@components/list-factory/list-factory.interfaces';
import type { Mock } from 'vitest';

vi.mock('react-use', () => ({
  useIntersection: vi.fn(() => ({ isIntersecting: false })),
}));

describe('FilterFactoryListType', () => {
  const mockOnFilterChange = vi.fn();
  const id = 'category';
  const label = 'Category';
  const items: Item[] = [
    {
      id: 'electronics',
      label: 'Electronics',
      items: [
        { id: 'phones', label: 'Phones' },
        { id: 'laptops', label: 'Laptops' },
      ],
    },
    { id: 'books', label: 'Books' },
  ];

  const defaultProps: FilterFactoryListTypeProps = {
    id,
    label,
    value: [],
    content: {
      type: ContentTypes.List,
      items,
      pathIds: [],
      checkedIds: [],
      isFiltrable: true,
    },
    onFilterChange: mockOnFilterChange,
  };

  const { t } = renderUseTranslation();

  const renderComponent = (props: Partial<FilterFactoryListTypeProps> = {}) => {
    const componentProps: FilterFactoryListTypeProps = { ...defaultProps, ...props };

    const result = render(<FilterFactoryListType {...componentProps} />);

    const rerender = () => result.rerender(<FilterFactoryListType {...componentProps} />);

    return { ...result, rerender };
  };

  beforeEach(() => {
    mockOnFilterChange.mockClear();
  });

  it('renders with initial label and items', async () => {
    renderComponent();

    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('navigates through nested levels', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(label));

    // Click on Electronics to navigate deeper
    await userEvent.click(screen.getByText('Electronics'));

    expect(mockOnFilterChange).toHaveBeenCalledWith({
      filterId: id,
      type: ContentTypes.List,
      pathIds: ['electronics'],
      checkedIds: [],
    });
  });

  it('selects items in multi-select mode', async () => {
    renderComponent({
      multi: true,
      content: {
        ...defaultProps.content,
        pathIds: ['electronics'],
        checkedIds: ['phones'],
      },
    });

    // Show filter popover
    await userEvent.click(screen.getByText('Electronics'));

    // Select Laptops
    await userEvent.click(screen.getByText('Laptops'));

    expect(mockOnFilterChange).toHaveBeenCalledWith({
      filterId: id,
      type: ContentTypes.List,
      pathIds: ['electronics'],
      checkedIds: ['phones', 'laptops'],
    });
  });

  it('clears selection and resets path', async () => {
    renderComponent({
      content: {
        ...defaultProps.content,
        pathIds: ['electronics'],
        checkedIds: ['phones'],
      },
    });

    // Click clear button
    await userEvent.click(
      screen.getByTestId('filters-group__list-filter--category__end-enhancer-clear'),
    );

    expect(mockOnFilterChange).toHaveBeenCalledWith({
      filterId: id,
      type: ContentTypes.List,
      pathIds: [],
      checkedIds: [],
    });
  });

  it('filters items based on search input', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(label));

    const searchInput = screen.getByPlaceholderText(t('general.search'));

    await userEvent.type(searchInput, 'book');

    expect(screen.getByText('Books')).toBeInTheDocument();
    expect(screen.queryByText('Electronics')).not.toBeInTheDocument();
  });

  it('handles pagination', async () => {
    // Simulate no intersection
    vi.mocked(useIntersection as Mock).mockReturnValue({ isIntersecting: false });

    const mockPagination = { onPageEnd: vi.fn(), isFetchingNextPage: false };
    const { rerender } = renderComponent({
      content: {
        ...defaultProps.content,
        paginationProps: mockPagination,
      },
    });

    await userEvent.click(screen.getByText(label));

    expect(mockPagination.onPageEnd).not.toHaveBeenCalled();

    // Simulate intersection
    vi.mocked(useIntersection as Mock).mockReturnValue({ isIntersecting: true });

    rerender();

    expect(mockPagination.onPageEnd).toHaveBeenCalledTimes(1);
  });

  it('resets search when navigating paths', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(label));

    // Initial search
    const searchInput = screen.getByPlaceholderText(t('general.search'));

    await userEvent.type(searchInput, 'Electro');

    // Navigate to Electronics
    await userEvent.click(screen.getByText('Electronics'));

    expect(searchInput).toHaveValue('');
  });

  it('shows breadcrumb navigation in label', async () => {
    renderComponent({
      content: {
        ...defaultProps.content,
        pathIds: ['electronics'],
      },
    });

    expect(screen.getByText('Electronics')).toBeInTheDocument();
    expect(screen.queryByText(label)).not.toBeInTheDocument();
  });
});
