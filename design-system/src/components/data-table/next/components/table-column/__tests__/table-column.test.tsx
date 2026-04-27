import { userEvent } from '@testing-library/user-event';

import { createVirtualItems } from '@components/data-table/next/__tests__/data-table.test-utils';
import { DEFAULT_SKELETON_ROW_COUNT } from '@components/data-table/next/data-table.constants';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';
import { noop } from '@utils/noop';

import { DataTableContext } from '../../../contexts/data-table.context';
import { TableColumn } from '../table-column';

import type { TableColumnProps } from '../table-column';
import type { DataTableContextValues } from '@components/data-table/next/contexts/data-table-context.interfaces';

const mockOnClickRow = testHelpers.fn();

const mockProps: TableColumnProps = {
  id: 'columnId',
  columnIndex: 0,
  label: 'Column Label',
  isDraggable: true,
  isSortable: true,
  align: 'left',
  isFixed: false,
  isRemovable: true,
  isDragging: false,
  isResizable: true,
  dataType: 'string',
  renderType: 'string',
  minWidth: '100px',
  maxWidth: '200px',
  columnData: ['Cell 1', 'Cell 2', 'Cell 3', 'Cell 4'],
  updateIsDragDisabled: testHelpers.fn(),
};

const contextValueDefaults = (
  props: Partial<TableColumnProps> = {},
  opts?: { skeletons?: boolean },
): DataTableContextValues => {
  return {
    ...mockProps,
    ...props,
    isLoading: false,
    isScrollable: false,
    isRowClickable: false,
    showRowsSelection: false,
    showHeaders: true,
    showActionsColumn: false,
    showHeaderActionButton: false,
    hoveredRowIndex: -1,
    rowHeight: '48px',
    orderBy: 'columnId',
    orderDirection: 'asc',
    virtualItems: opts?.skeletons
      ? createVirtualItems(DEFAULT_SKELETON_ROW_COUNT)
      : createVirtualItems((props.columnData || mockProps.columnData).length),
    onContextMenu: undefined,
    allColumnsConfig: [mockProps],
    columnsConfig: [mockProps],
    data: [mockProps.columnData],
    totalHeight: '100%',
    listRef: undefined,
    containerRef: undefined,
    emptyState: undefined,
    rowsSelected: [],
    paginationSettings: undefined,
    handleOnChange: testHelpers.fn(),
    onClickRow: mockOnClickRow,
    updateHoveredRowIndex: noop,
  };
};

const contextValue = (
  props: Partial<TableColumnProps> = {},
  contextOverrides: Partial<ReturnType<typeof contextValueDefaults>> = {},
  opts?: { skeletons?: boolean },
): DataTableContextValues => {
  const defaults = contextValueDefaults(props, opts);

  return {
    ...defaults,
    ...contextOverrides,
  };
};

const renderComponent = (
  props: Partial<TableColumnProps> = {},
  contextOverrides: Partial<ReturnType<typeof contextValueDefaults>> = {},
  opts?: { skeletons?: boolean },
): ReturnType<typeof render> =>
  render(
    <DataTableContext.Provider value={contextValue(props, contextOverrides, opts)}>
      <TableColumn
        {...mockProps}
        {...props}
      />
    </DataTableContext.Provider>,
  );

const { t } = renderUseTranslation();

describe('TableColumn', () => {
  it('renders correctly', () => {
    const { container } = renderComponent();

    expect(container).toBeInTheDocument();
  });

  it('renders with header', () => {
    renderComponent();

    expect(screen.getByText('Column Label')).toBeInTheDocument();
  });

  it('renders without header', () => {
    renderComponent({}, { showHeaders: false });

    expect(screen.queryByText('Column Label')).not.toBeInTheDocument();
  });

  it('renders all cells', () => {
    renderComponent();

    mockProps.columnData.forEach((cell) =>
      expect(screen.getByText(cell as string)).toBeInTheDocument(),
    );
  });

  it('renders the resize line if is resizable', () => {
    renderComponent({ isResizable: true });

    expect(screen.getByLabelText(t('dataTable.ariaLabels.resizeColumnLine'))).toBeInTheDocument();
  });

  it("doesn't render the resize line if is not resizable", () => {
    renderComponent({ isResizable: false });

    expect(
      screen.queryByLabelText(t('dataTable.ariaLabels.resizeColumnLine')),
    ).not.toBeInTheDocument();
  });

  it('executes `onClickRow` correctly', async () => {
    renderComponent();

    const [, cellText] = mockProps.columnData;

    await userEvent.click(screen.getByText(cellText as string));

    // It receives the row number
    expect(mockOnClickRow).toHaveBeenCalledWith(1);
  });

  it('renders loading cell skeletons when `isLoading` is true', () => {
    renderComponent({}, { isLoading: true }, { skeletons: true });

    Array(DEFAULT_SKELETON_ROW_COUNT)
      .fill(0)
      .forEach((_, cellSkeletonIndex) => {
        expect(
          screen.getByTestId(`${mockProps.columnIndex}-cell-skeleton-${cellSkeletonIndex}`),
        ).toBeInTheDocument();
      });
  });

  it("doesn't render loading cell skeletons when `isLoading` is false", () => {
    renderComponent({}, { isLoading: false }, { skeletons: true });

    Array(DEFAULT_SKELETON_ROW_COUNT)
      .fill(0)
      .forEach((_, cellSkeletonIndex) => {
        expect(
          screen.queryByTestId(`${mockProps.columnIndex}-cell-skeleton-${cellSkeletonIndex}`),
        ).not.toBeInTheDocument();
      });
  });
});
