import { userEvent } from '@testing-library/user-event';
import { useIntersection } from 'react-use';

import { render, screen, testHelpers } from '@test/test-utils';
import { noop } from '@utils/noop';

import { DataTableContext } from '../contexts';
import { DataTableWrapper } from '../data-table-wrapper';
import { DEFAULT_SKELETON_ROW_COUNT } from '../data-table.constants';
import { getTableData } from '../utils';

import { createVirtualItems } from './data-table.test-utils';

import '@test/__mocks__/use-virtualizer.mock';

import type {
  ColumnConfig,
  DataTableContextValues,
  PaginationSettings,
} from '../data-table.interfaces';
import type { UseDragEventsReturn } from '../hooks/use-drag-events';
import type { ProxiedRef } from '@components/utils/hooks/use-ref-proxy.hook';

/**
 * This declaration is being use so that the test for infinite pagination works properly.
 * The mock of the hook `useIntersection` from the library `react-use` needs to be mocked in order
 * to execute the callback function that loads more data.
 *
 * This are some useful links that explains the process:
 *
 * - [Github: How to use different mocks for each test with vi.mock?](https://github.com/vitest-dev/vitest/discussions/3589#discussioncomment-6195214)
 * - [Vitest mock](https://vitest.dev/api/vi.html#mock-modules)
 */
const mocks = vi.hoisted(() => ({
  useIntersection: vi.fn(),
  useMedia: vi.fn(),
}));

vi.mock('react-use', () => ({
  useIntersection: mocks.useIntersection,
  useMedia: mocks.useMedia,
}));

testHelpers.mock('./hooks/use-drag-events', () => ({
  useDragEvents: testHelpers.fn(
    (): UseDragEventsReturn => ({
      dragSourceIndex: undefined,
      dragDestinationIndex: undefined,
      onDragStart: noop,
      onDragUpdate: noop,
      onDragEnd: noop,
    }),
  ),
}));

const useIntersectionDefaultValues: IntersectionObserverEntry = {
  isIntersecting: undefined,
  boundingClientRect: undefined,
  intersectionRatio: undefined,
  intersectionRect: undefined,
  rootBounds: undefined,
  target: undefined,
  time: undefined,
};

const container = document.createElement('div');
const list = document.createElement('div');

const mockOnClickRow = testHelpers.fn();
const mockOnPageEnd = testHelpers.fn();

const disabledPaginationSettings: PaginationSettings = {
  isEnabled: false,
  itemsPerPage: 10,
  method: 'perPage',
  onPageEnd: mockOnPageEnd,
};

const infinitePaginationSettings: PaginationSettings = {
  isEnabled: true,
  itemsPerPage: 10,
  method: 'infinite',
  onPageEnd: mockOnPageEnd,
};

const allColumnsConfig: ColumnConfig[] = [
  {
    id: 'id',
    label: 'ID',
    isDraggable: true,
    align: 'center',
    isRemovable: true,
    isSortable: true,
    dataType: 'number',
    renderType: 'string',
  },
  {
    id: 'name',
    label: 'Name',
    isDraggable: true,
    align: 'center',
    isRemovable: true,
    isSortable: true,
    dataType: 'string',
    renderType: 'string',
  },
  {
    id: 'birthday',
    label: 'Birthday',
    isDraggable: true,
    align: 'center',
    isRemovable: true,
    isSortable: true,
    dataType: 'date',
    renderType: 'date',
  },
];

const rawData = [
  { id: 1, name: 'John', birthday: '1990-05-15' },
  { id: 2, name: 'Jane', birthday: '1985-08-22' },
];

const baseContextValues: DataTableContextValues = {
  isLoading: false,
  isScrollable: false,
  showHeaders: true,
  showActionsColumn: true,
  showRowsSelection: false,
  showHeaderActionButton: false,
  hoveredRowIndex: -1,
  rowHeight: '48px',
  orderBy: 'id',
  orderDirection: 'asc',
  totalHeight: '100%',
  virtualItems: createVirtualItems(2),
  paginationSettings: disabledPaginationSettings,
  columnsConfig: allColumnsConfig,
  allColumnsConfig,
  rowsSelected: [],
  emptyState: undefined,
  containerRef: { current: container } as ProxiedRef<HTMLDivElement>,
  listRef: { current: list } as ProxiedRef<HTMLDivElement>,
  data: getTableData({
    rawData,
    columnsConfig: allColumnsConfig,
    actionCell: ({ id }) => <span>{`action ${id}`}</span>,
  }),
  onClickRow: mockOnClickRow,
  handleOnChange: noop,
  updateHoveredRowIndex: noop,
};

const renderWithProvider = (customValues: Partial<DataTableContextValues> = {}) =>
  render(
    <DataTableContext.Provider value={{ ...baseContextValues, ...customValues }}>
      <DataTableWrapper />
    </DataTableContext.Provider>,
  );

describe('DataTableWrapper', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('renders column headers correctly', () => {
    renderWithProvider();

    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Birthday')).toBeInTheDocument();
  });

  it('renders cells correctly', () => {
    renderWithProvider();

    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
  });

  it('renders action buttons correctly', () => {
    renderWithProvider();

    expect(screen.getByText('action 1')).toBeInTheDocument();
    expect(screen.getByText('action 2')).toBeInTheDocument();
  });

  it("doesn't render the loading cell skeleton when `isLoading` is false", () => {
    renderWithProvider({ isLoading: false });

    Array(DEFAULT_SKELETON_ROW_COUNT)
      .fill(0)
      .forEach((_, cellSkeletonIndex) => {
        allColumnsConfig.forEach((_, columnIndex) => {
          expect(
            screen.queryByTestId(`${columnIndex}-cell-skeleton-${cellSkeletonIndex}`),
          ).not.toBeInTheDocument();
        });
      });
  });

  it('renders the loading cell skeleton when `isLoading` is true', () => {
    renderWithProvider({
      isLoading: true,
      paginationSettings: { ...infinitePaginationSettings, isEnabled: false },
    });

    Array(DEFAULT_SKELETON_ROW_COUNT)
      .fill(0)
      .forEach((_, cellSkeletonIndex) => {
        allColumnsConfig.forEach((_, columnIndex) => {
          expect(
            screen.getByTestId(`${columnIndex}-cell-skeleton-${cellSkeletonIndex}`),
          ).toBeInTheDocument();
        });
      });
  });

  it("doesn't render the action buttons when showActionsColumn=false", () => {
    renderWithProvider({ showActionsColumn: false });

    expect(screen.queryByText('action 1')).not.toBeInTheDocument();
    expect(screen.queryByText('action 2')).not.toBeInTheDocument();
  });

  it('executes `onClickRow` correctly', async () => {
    renderWithProvider();

    const rowIndex = 1;

    await userEvent.click(screen.getByText(rawData[rowIndex].name));

    // It receives the row index
    expect(mockOnClickRow).toHaveBeenCalledWith(rowIndex);
  });

  it('should execute the `onPageEnd` function for a infinite pagination configuration', () => {
    vi.mocked(useIntersection).mockReturnValue({
      ...useIntersectionDefaultValues,
      isIntersecting: true,
    });

    renderWithProvider({ paginationSettings: infinitePaginationSettings });

    const [endOfPageNode] = screen.getAllByTestId(
      'design_system__infinite_scroll_pagination-end_node',
    );

    expect(endOfPageNode).toBeInTheDocument();
    expect(mockOnPageEnd).toHaveBeenCalled();
  });

  it('does not implement infinite pagination functionality', () => {
    vi.mocked(useIntersection).mockReturnValue({
      ...useIntersectionDefaultValues,
      isIntersecting: false,
    });

    renderWithProvider({
      paginationSettings: disabledPaginationSettings,
    });

    const endOfPageNode = screen.queryByTestId(
      'design_system__infinite_scroll_pagination-end_node',
    );

    expect(endOfPageNode).not.toBeInTheDocument();
    expect(mockOnPageEnd).not.toHaveBeenCalled();
  });
});
