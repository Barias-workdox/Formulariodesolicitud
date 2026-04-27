import { createVirtualItems } from '@components/data-table/__tests__/data-table.test-utils';
import { render, screen, testHelpers } from '@test/test-utils';
import { noop } from '@utils/noop';

import { DataTableContext } from '../../../contexts/data-table.context';
import { TableRowSelectionColumn } from '../table-row-selection-column';

import type { DataTableContextValues, ColumnConfig } from '../../../data-table.interfaces';

const mockDataTestId = 'data-test-id';

describe('TableRowSelectionColumn', () => {
  const data = [['John'], ['Jane']];

  const handleOnChange = testHelpers.fn();

  const columnsConfig: ColumnConfig[] = [
    {
      id: 'first_name',
      label: 'First Name',
      isDraggable: true,
      align: 'center',
      isRemovable: true,
      isSortable: true,
      dataType: 'string',
      renderType: 'string',
      isFixed: false,
    },
  ];

  const contextValue = (showHeaders = true): DataTableContextValues => ({
    'data-testid': mockDataTestId,
    data,
    isScrollable: false,
    showActionsColumn: false,
    showRowsSelection: true,
    showHeaderActionButton: false,
    showHeaders,
    columnsConfig,
    hoveredRowIndex: -1,
    virtualItems: createVirtualItems(2),
    rowsSelected: [],
    rowHeight: '48px',
    allColumnsConfig: columnsConfig,
    orderBy: 'first_name',
    orderDirection: 'asc',
    totalHeight: '100%',
    listRef: undefined,
    containerRef: undefined,
    onClickRow: undefined,
    onContextMenu: undefined,
    emptyState: undefined,
    paginationSettings: undefined,
    handleOnChange,
    updateHoveredRowIndex: noop,
  });

  const renderComponent = (showHeaders = true): ReturnType<typeof render> =>
    render(
      <DataTableContext.Provider value={contextValue(showHeaders)}>
        <TableRowSelectionColumn />
      </DataTableContext.Provider>,
    );

  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('renders the header cell with "Checkbox" correctly when showHeaders is true', () => {
    renderComponent();

    const checkbox = screen.getByTestId(`${mockDataTestId}--checkbox-all`);

    expect(checkbox).toBeInTheDocument();
  });

  it('does not render the header cell when showHeaders is false', () => {
    renderComponent(false);

    // The Checkbox should not be in the document as header
    const checkbox = screen.queryByTestId(`${mockDataTestId}--checkbox-all`);

    expect(checkbox).toBeNull();
  });

  it('renders the checkbox cells for each row correctly', () => {
    renderComponent();

    for (let i = 0; i < data.length; i++) {
      const checkbox = screen.getByTestId(`${mockDataTestId}--checkbox-${i}`);

      expect(checkbox).toBeInTheDocument();
    }
  });
});
