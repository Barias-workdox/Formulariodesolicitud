import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { TableActionsHeaderMenuContent } from '../table-actions-header-menu-content';

import type { ColumnConfig } from '../../../../../../../data-table.interfaces';

describe('TableActionsHeaderMenuContent', () => {
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

  it('renders available columns correctly', () => {
    render(
      <TableActionsHeaderMenuContent
        columnsConfig={columnsConfig}
        allColumnsConfig={allColumnsConfig}
        handleOnChange={handleOnChange}
      />,
    );

    // Check if all missing columns are rendered
    const ageColumn = screen.getByText('Age');

    expect(ageColumn).toBeInTheDocument();
  });

  it('calls handleOnChange with the correct arguments when a menu item is clicked', async () => {
    render(
      <TableActionsHeaderMenuContent
        columnsConfig={columnsConfig}
        allColumnsConfig={allColumnsConfig}
        handleOnChange={handleOnChange}
      />,
    );

    // Click on the "Age" menu item
    const ageMenuItem = screen.getByText('Age');

    await userEvent.click(ageMenuItem);

    // Verify that handleOnChange was called with the correct arguments
    expect(handleOnChange).toHaveBeenCalledWith({ payload: { id: 'age' }, event: 'show-column' });
  });

  it('displays the "Add Columns" title correctly', () => {
    render(
      <TableActionsHeaderMenuContent
        columnsConfig={columnsConfig}
        allColumnsConfig={allColumnsConfig}
        handleOnChange={handleOnChange}
      />,
    );

    const addColumnsTitle = screen.getByText(t('dataTable.addColumns'));

    expect(addColumnsTitle).toBeInTheDocument();
  });

  it('handles the case when there are no columns to show', () => {
    render(
      <TableActionsHeaderMenuContent
        columnsConfig={allColumnsConfig}
        allColumnsConfig={allColumnsConfig}
        handleOnChange={handleOnChange}
      />,
    );

    // Check if the "No items to display" message is rendered
    const emptyMessage = screen.getByText(t('dataTable.addColumnsEmpty'));

    expect(emptyMessage).toBeInTheDocument();
  });
});
