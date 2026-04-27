import { userEvent } from '@testing-library/user-event';
import { useIntersection } from 'react-use';

import { render, renderUseTranslation, screen, waitFor } from '@test/test-utils';

import '@test/__mocks__/use-virtualizer.mock';
import {
  extendedFiltersFactoryConfigMocks,
  filtersFactoryConfigMocks,
} from '../__mocks__/filters-group-factory.mocks';
import { ContentTypes } from '../filter-group-factory.constants';
import { FiltersGroupFactory } from '../filters-group-factory';
import { getFilterRawValuesArray } from '../utils/filters-group-factory.utils';

import type { FiltersGroupFactoryProps } from '../filters-group-factory';
import type {
  FilterFactoryConfig,
  FilterFactoryRawValues,
} from '../filters-group-factory.interfaces';
import type { Mock } from 'vitest';

vi.mock('react-use', () => ({
  useIntersection: vi.fn(() => ({ isIntersecting: false })),
}));

describe('FiltersGroupFactory', () => {
  const onFilterChangeMock = vi.fn();
  const onClearAllFiltersMock = vi.fn();

  const [{ label: firstItemLabel, content }, { label: secondItemLabel }] =
    filtersFactoryConfigMocks;

  const firstItemChildren = content.type === ContentTypes.List ? content.items : [];

  const defaultProps: FiltersGroupFactoryProps = {
    filtersConfig: filtersFactoryConfigMocks,
    defaultRawValues: [],
    visibleFiltersId: ['filter1'],
    addVisibleFilter: vi.fn(),
    onFilterChange: onFilterChangeMock,
    onClearAllFilters: onClearAllFiltersMock,
  };

  const renderComponent = (props: Partial<FiltersGroupFactoryProps> = {}) => {
    return render(
      <FiltersGroupFactory
        {...defaultProps}
        {...props}
      />,
    );
  };

  const { t } = renderUseTranslation();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the FiltersGroup component with initial visible filters', () => {
    renderComponent();

    // Only filter1 should be visible initially
    expect(screen.getByText(firstItemLabel)).toBeInTheDocument();
    expect(screen.queryByText(secondItemLabel)).not.toBeInTheDocument();
  });

  it('renders all filters when visibleFiltersId includes all filter IDs', () => {
    renderComponent({ visibleFiltersId: ['filter1', 'filter2'] });

    expect(screen.getByText(firstItemLabel)).toBeInTheDocument();
    expect(screen.getByText(secondItemLabel)).toBeInTheDocument();
  });

  it('handles filter change correctly', async () => {
    renderComponent();

    const filter1 = screen.getByText(firstItemLabel);

    await userEvent.click(filter1);

    const item1 = screen.getByText(firstItemChildren[0].label);

    await userEvent.click(item1);

    expect(onFilterChangeMock).toHaveBeenCalledWith({
      filterId: 'filter1',
      pathIds: [],
      checkedIds: ['item1'],
      type: ContentTypes.List,
    });
  });

  it('renders the clear all filters button and handles click when filters are dirty', async () => {
    // Simulate a dirty state by providing defaultPathValues that differ from current state
    const dirtyDefaultPathValues: FilterFactoryRawValues[] = [
      {
        id: 'filter1',
        pathIds: ['non', 'default', 'path'],
        checkedIds: [],
        type: ContentTypes.List,
      },
      {
        id: 'filter2',
        pathIds: [],
        checkedIds: [],
        type: ContentTypes.List,
      },
      {
        id: 'filter3',
        type: ContentTypes.Datepicker,
        date: '2025-01-01',
      },
    ];

    renderComponent({
      filtersConfig: filtersFactoryConfigMocks,
      defaultRawValues: dirtyDefaultPathValues,
    });

    const cleanButton = screen.getByText(t('filtersGroup.cleanAllFilters'));

    expect(cleanButton).toBeInTheDocument();

    await userEvent.click(cleanButton);

    expect(onClearAllFiltersMock).toHaveBeenCalled();
  });

  it("doesn't render the clear all filters button when filters are not dirty", () => {
    // Simulate a non-dirty state by matching defaultPathValues with current filter values
    const samePathValues = getFilterRawValuesArray(filtersFactoryConfigMocks);

    renderComponent({
      filtersConfig: filtersFactoryConfigMocks,
      defaultRawValues: samePathValues,
      visibleFiltersId: filtersFactoryConfigMocks.map(({ id }) => id),
    });

    expect(screen.queryByTestId('filters-group__clean-all-filters-button')).not.toBeInTheDocument();
  });

  it('renders the extra filters button and displays additional filters on click', async () => {
    renderComponent();

    const extraFiltersButton = screen.getByTestId('filters_group--extra-filters-button');

    expect(extraFiltersButton).toBeInTheDocument();

    // Initially, only filter1 is visible
    expect(screen.queryByText(secondItemLabel)).not.toBeInTheDocument();

    // Click the extra filters button
    await userEvent.click(extraFiltersButton);

    // Now, filter2 should be visible
    await waitFor(() => {
      expect(screen.getByText(secondItemLabel)).toBeInTheDocument();
    });
  });

  it('renders correctly when there are no filters', () => {
    renderComponent({ filtersConfig: [] });

    expect(screen.queryByText(firstItemLabel)).not.toBeInTheDocument();
    expect(screen.queryByText(secondItemLabel)).not.toBeInTheDocument();
  });

  it('handles multiple filters and their interactions', () => {
    renderComponent({
      filtersConfig: extendedFiltersFactoryConfigMocks,
      visibleFiltersId: ['filter1', 'filter3'],
    });

    // Check that filter1 and filter3 are rendered
    expect(screen.getByText(extendedFiltersFactoryConfigMocks[0].label)).toBeInTheDocument();
    expect(screen.getByText(extendedFiltersFactoryConfigMocks[2].label)).toBeInTheDocument();

    // filter2 should not be rendered
    expect(screen.queryByText(extendedFiltersFactoryConfigMocks[1].label)).not.toBeInTheDocument();
  });

  describe('MaxActiveFilters', () => {
    it('does not disable any filters when maxActiveFilters is not set', () => {
      renderComponent({
        filtersConfig: extendedFiltersFactoryConfigMocks,
        visibleFiltersId: ['filter1', 'filter2', 'filter3'],
        defaultRawValues: [
          {
            id: 'filter1',
            pathIds: [],
            checkedIds: ['item1'],
            type: ContentTypes.List,
          },
        ],
      });

      // All filters should be enabled (no disabled attribute)
      extendedFiltersFactoryConfigMocks.forEach((filter) => {
        const filterElement = screen.getByTestId(`filters-group--${filter.id}`);

        expect(filterElement).not.toBeDisabled();
      });
    });

    it('does not disable any filters when maxActiveFilters is not reached', () => {
      renderComponent({
        filtersConfig: extendedFiltersFactoryConfigMocks,
        visibleFiltersId: ['filter1', 'filter2', 'filter3'],
        maxActiveFilters: 3,
        defaultRawValues: [
          {
            id: 'filter1',
            pathIds: [],
            checkedIds: ['item1'],
            type: ContentTypes.List,
          },
        ],
      });

      // All filters should be enabled since we only have 1 active filter out of 3 max
      extendedFiltersFactoryConfigMocks.forEach((filter) => {
        const filterElement = screen.getByTestId(`filters-group--${filter.id}`);

        expect(filterElement).not.toBeDisabled();
      });
    });

    it('disables inactive filters when maxActiveFilters is reached', () => {
      renderComponent({
        filtersConfig: extendedFiltersFactoryConfigMocks,
        visibleFiltersId: ['filter1', 'filter2', 'filter3'],
        maxActiveFilters: 2,
        defaultRawValues: [
          {
            id: 'filter1',
            pathIds: [],
            checkedIds: ['item1'],
            type: ContentTypes.List,
          },
          {
            id: 'filter2',
            pathIds: [],
            checkedIds: ['item2'],
            type: ContentTypes.List,
          },
        ],
      });

      // filter1 and filter2 should be enabled (they have active values)
      // filter3 should be disabled (maxActiveFilters reached and it's not active)
      const [filter1, filter2, inactiveFilter] = extendedFiltersFactoryConfigMocks;
      const activeFilters = [filter1, filter2];

      activeFilters.forEach((filter) => {
        const filterElement = screen.getByTestId(`filters-group--${filter.id}`);

        expect(filterElement).not.toBeDisabled();
      });

      const inactiveFilterElement = screen.getByTestId(`filters-group--${inactiveFilter.id}`);

      expect(inactiveFilterElement).toBeDisabled();
    });

    it('enables previously disabled filters when active filters are cleared', async () => {
      const { rerender } = renderComponent({
        filtersConfig: extendedFiltersFactoryConfigMocks,
        visibleFiltersId: ['filter1', 'filter2', 'filter3'],
        maxActiveFilters: 2,
        defaultRawValues: [
          {
            id: 'filter1',
            pathIds: [],
            checkedIds: ['item1'],
            type: ContentTypes.List,
          },
          {
            id: 'filter2',
            pathIds: [],
            checkedIds: ['item2'],
            type: ContentTypes.List,
          },
        ],
      });

      // Initially filter3 should be disabled
      const [_, _filter2, filter3] = extendedFiltersFactoryConfigMocks;
      const filter3Element = screen.getByTestId(`filters-group--${filter3.id}`);

      const cleanAllFiltersButton = screen.getByTestId('filters-group__clean-all-filters-button');

      expect(filter3Element).toBeDisabled();

      // Clear all filters
      await userEvent.click(cleanAllFiltersButton);

      // Rerender with cleared filters
      rerender(
        <FiltersGroupFactory
          {...defaultProps}
          filtersConfig={extendedFiltersFactoryConfigMocks}
          visibleFiltersId={['filter1', 'filter2', 'filter3']}
          maxActiveFilters={2}
          defaultRawValues={[]}
        />,
      );

      // Now all filters should be enabled again
      extendedFiltersFactoryConfigMocks.forEach((filter) => {
        const filterElement = screen.getByTestId(`filters-group--${filter.id}`);

        expect(filterElement).not.toBeDisabled();
      });
    });

    it('correctly calculates activeFiltersCount when maxActiveFilters is set', () => {
      const { rerender } = renderComponent({
        filtersConfig: extendedFiltersFactoryConfigMocks,
        visibleFiltersId: ['filter1', 'filter2', 'filter3'],
        maxActiveFilters: 2,
        defaultRawValues: [
          {
            id: 'filter1',
            pathIds: [],
            checkedIds: ['item1'],
            type: ContentTypes.List,
          },
        ],
      });

      // Should show 1 active filter
      expect(screen.queryByText('1/2')).toBeInTheDocument();

      // Add another active filter
      rerender(
        <FiltersGroupFactory
          {...defaultProps}
          filtersConfig={extendedFiltersFactoryConfigMocks}
          visibleFiltersId={['filter1', 'filter2', 'filter3']}
          maxActiveFilters={2}
          defaultRawValues={[
            {
              id: 'filter1',
              pathIds: [],
              checkedIds: ['item1'],
              type: ContentTypes.List,
            },
            {
              id: 'filter2',
              pathIds: [],
              checkedIds: ['item2'],
              type: ContentTypes.List,
            },
          ]}
        />,
      );

      // Should show 2 active filters
      expect(screen.getByText('2/2')).toBeInTheDocument();
    });
  });

  describe('List type with pagination', () => {
    beforeEach(() => {
      vi.clearAllMocks();

      // Simulate no intersection initially
      vi.mocked(useIntersection as Mock).mockReturnValue({ isIntersecting: false });
    });

    it('handles pagination in list filters correctly', async () => {
      const onFilterChangeMock = vi.fn();
      const onSearchValueChangeMock = vi.fn();
      const onPageEndMock = vi.fn();

      // Create a paginated list filter config
      const paginatedListFilter: FilterFactoryConfig = {
        id: 'paginatedFilter',
        label: 'Paginated List',
        content: {
          type: ContentTypes.List,
          items: [
            { id: 'item1', label: 'Item 1', withCheckbox: true },
            { id: 'item2', label: 'Item 2', withCheckbox: true },
          ],
          pathIds: [],
          checkedIds: [],
          isFiltrable: true,
          paginationProps: {
            isFetchingNextPage: false,
            onPageEnd: onPageEndMock,
          },
          onSearchValueChange: onSearchValueChangeMock,
        },
      };

      // Simulate intersection
      vi.mocked(useIntersection as Mock).mockReturnValue({ isIntersecting: true });

      renderComponent({
        filtersConfig: [paginatedListFilter],
        visibleFiltersId: ['paginatedFilter'],
        onFilterChange: onFilterChangeMock,
      });

      // Open the filter
      const filterButton = screen.getByText('Paginated List');

      await userEvent.click(filterButton);

      // Verify the list is rendered
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();

      expect(onPageEndMock).toHaveBeenCalledTimes(1);
    });

    it('shows loading state during pagination', async () => {
      // Create a filter config with active loading state
      const loadingListFilter: FilterFactoryConfig = {
        id: 'loadingFilter',
        label: 'Loading List',
        content: {
          type: ContentTypes.List,
          items: [{ id: 'item1', label: 'Item 1', withCheckbox: true }],
          pathIds: [],
          checkedIds: [],
          isFiltrable: true,
          paginationProps: {
            isFetchingNextPage: true, // Set loading state to true
            onPageEnd: vi.fn(),
          },
        },
      };

      renderComponent({
        filtersConfig: [loadingListFilter],
        visibleFiltersId: ['loadingFilter'],
      });

      // Open the filter
      const filterButton = screen.getByText('Loading List');

      await userEvent.click(filterButton);

      // Verify loading spinner is present
      expect(screen.getByTestId('filters-group__list__loading')).toBeInTheDocument();
    });

    it('handles search value changes in paginated lists', async () => {
      const onSearchValueChangeMock = vi.fn();

      const searchableListFilter: FilterFactoryConfig = {
        id: 'searchableFilter',
        label: 'Searchable List',
        content: {
          type: ContentTypes.List,
          items: [
            { id: 'item1', label: 'Item 1', withCheckbox: true },
            { id: 'item2', label: 'Item 2', withCheckbox: true },
          ],
          pathIds: [],
          checkedIds: [],
          isFiltrable: true,
          paginationProps: {
            isFetchingNextPage: false,
            onPageEnd: vi.fn(),
          },
          onSearchValueChange: onSearchValueChangeMock,
        },
      };

      renderComponent({
        filtersConfig: [searchableListFilter],
        visibleFiltersId: ['searchableFilter'],
      });

      // Open the filter
      const filterButton = screen.getByText('Searchable List');

      await userEvent.click(filterButton);

      // Find and type in the search input
      const searchInput = screen.getByRole('textbox');

      await userEvent.type(searchInput, 'test');

      // Verify onSearchValueChange was called with the search value
      expect(onSearchValueChangeMock).toHaveBeenCalledWith('test');
    });
  });
});
