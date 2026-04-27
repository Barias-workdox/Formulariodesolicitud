import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { TableActionsColumnHeaderCell } from '../table-actions-column-header-cell';

import type { ColumnConfig } from '../../../../../data-table.interfaces';

describe('TableActionsColumnHeaderCell', () => {
  const allColumnsConfig: ColumnConfig[] = [
    {
      id: 'id',
      label: 'ID',
      isDraggable: true,
      align: 'center',
      isRemovable: true,
      isSortable: true,
      dataType: 'string',
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

  const { t } = renderUseTranslation();

  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('renders the "Add" button correctly', () => {
    render(
      <TableActionsColumnHeaderCell
        columnsConfig={columnsConfig}
        allColumnsConfig={allColumnsConfig}
        handleOnChange={handleOnChange}
      />,
    );

    const addButton = screen.getByLabelText(t('dataTable.addColumns'));

    expect(addButton).toBeInTheDocument();
  });

  it('doesn\'t render the "Add" button when "showButton" is false', () => {
    render(
      <TableActionsColumnHeaderCell
        columnsConfig={columnsConfig}
        allColumnsConfig={allColumnsConfig}
        handleOnChange={handleOnChange}
        showButton={false}
      />,
    );

    const addButton = screen.queryByLabelText(t('dataTable.addColumns'));

    expect(addButton).not.toBeInTheDocument();
  });

  it('opens the popover menu when the "Add" button is clicked', async () => {
    render(
      <TableActionsColumnHeaderCell
        columnsConfig={columnsConfig}
        allColumnsConfig={allColumnsConfig}
        handleOnChange={handleOnChange}
      />,
    );

    // Click on the "Add" button
    const addButton = screen.getByLabelText(t('dataTable.addColumns'));

    await userEvent.click(addButton);

    // Verify that the popover menu content is rendered
    const addColumnsTitle = screen.getByText(t('dataTable.addColumns'));

    expect(addColumnsTitle).toBeInTheDocument();
  });

  it('calls handleOnChange with the correct arguments when a menu item is clicked', async () => {
    render(
      <TableActionsColumnHeaderCell
        columnsConfig={columnsConfig}
        allColumnsConfig={allColumnsConfig}
        handleOnChange={handleOnChange}
      />,
    );

    // Click on the "Add" button
    const addButton = screen.getByLabelText(t('dataTable.addColumns'));

    await userEvent.click(addButton);

    // Click on the "Age" menu item
    const ageMenuItem = screen.getByText('Age');

    await userEvent.click(ageMenuItem);

    // Verify that handleOnChange was called with the correct arguments
    expect(handleOnChange).toHaveBeenCalledWith({ payload: { id: 'age' }, event: 'show-column' });
  });
});
