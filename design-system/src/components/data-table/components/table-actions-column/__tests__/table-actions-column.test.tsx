import { userEvent } from '@testing-library/user-event';

import { createVirtualItems } from '@components/data-table/__tests__/data-table.test-utils';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';
import { noop } from '@utils/noop';

import { DataTableContext } from '../../../contexts/data-table.context';
import { TableActionsColumn } from '../table-actions-column';

import type { ColumnConfig, DataTableContextValues } from '../../../data-table.interfaces';

describe('TableActionsColumn', () => {
  const data = [
    ['John', 'action-1'],
    ['Jane', 'action-2'],
  ];

  const allColumnsConfig: ColumnConfig[] = [
    {
      id: 'first_name',
      label: 'First Name',
      isDraggable: true,
      align: 'center',
      isRemovable: true,
      isSortable: true,
      dataType: 'string',
      renderType: 'string',
    },
    {
      id: 'last_name',
      label: 'Last Name',
      isDraggable: true,
      align: 'center',
      isRemovable: true,
      isSortable: true,
      dataType: 'string',
      renderType: 'string',
    },
    {
      id: 'age',
      label: 'Age',
      isDraggable: true,
      align: 'center',
      isRemovable: true,
      isSortable: true,
      dataType: 'number',
      renderType: 'string',
    },
  ];

  const columnsConfig: ColumnConfig[] = allColumnsConfig.slice(0, 2);

  const handleOnChange = testHelpers.fn();

  const contextValue = (showHeaders = true): DataTableContextValues => ({
    data,
    hoveredRowIndex: -1,
    isScrollable: false,
    columnsConfig,
    allColumnsConfig,
    showHeaders,
    virtualItems: createVirtualItems(2),
    showHeaderActionButton: true,
    showActionsColumn: true,
    orderBy: 'first_name',
    orderDirection: 'asc',
    totalHeight: '100%',
    listRef: undefined,
    containerRef: undefined,
    onClickRow: undefined,
    onContextMenu: undefined,
    emptyState: undefined,
    rowsSelected: [],
    rowHeight: '48px',
    handleOnChange,
    updateHoveredRowIndex: noop,
  });

  const { t } = renderUseTranslation();

  const renderComponent = (showHeaders = true) =>
    render(
      <DataTableContext.Provider value={contextValue(showHeaders)}>
        <TableActionsColumn />
      </DataTableContext.Provider>,
    );

  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('renders the header cell with the "Add" button correctly when showHeaders is true', () => {
    renderComponent();

    const addButton = screen.getByLabelText(t('dataTable.addColumns'));

    expect(addButton).toBeInTheDocument();
  });

  it('does not render the header cell when showHeaders is false', () => {
    renderComponent(false);

    const addButton = screen.queryByText(t('dataTable.addColumns'));

    expect(addButton).toBeNull();
  });

  it('renders the action cells for each row correctly', () => {
    renderComponent();

    const actionButton1 = screen.getByText('action-1');
    const actionButton2 = screen.getByText('action-2');

    expect(actionButton1).toBeInTheDocument();
    expect(actionButton2).toBeInTheDocument();
  });

  it('calls handleOnChange with the correct arguments when a menu item is clicked in the header cell', async () => {
    renderComponent();

    // Click on the "Add" button in the header cell
    const addButton = screen.getByLabelText(t('dataTable.addColumns'));

    await userEvent.click(addButton);

    // Click on the "Age" menu item
    const ageMenuItem = screen.getByText('Age');

    await userEvent.click(ageMenuItem);

    // Verify that handleOnChange was called with the correct arguments
    expect(handleOnChange).toHaveBeenCalledWith({ payload: { id: 'age' }, event: 'show-column' });
  });
});
