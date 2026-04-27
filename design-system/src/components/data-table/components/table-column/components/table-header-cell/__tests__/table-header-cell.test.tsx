import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { TableHeaderCell } from '../table-header-cell';

import type { TableHeaderCellProps } from '@components/data-table/components/common/table-header-cell/table-header-cell.interfaces';

const { t } = renderUseTranslation();

const label = 'Column Label';

describe('TableHeaderCell', () => {
  const handleOnChange = testHelpers.fn();

  const renderComponent = (props: Partial<TableHeaderCellProps> = {}) => {
    render(
      <TableHeaderCell
        id="columnId"
        label={label}
        isSortable
        isDraggable
        isRemovable
        isHovered={false}
        align="left"
        isDragging={false}
        isFixed={false}
        orderBy="anotherColumn"
        orderDirection="asc"
        dataType="string"
        handleOnChange={handleOnChange}
        {...props}
      />,
    );
  };

  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('renders correctly with sorting button', async () => {
    renderComponent();

    const headerLabel = screen.getByText(label);

    expect(headerLabel).toBeInTheDocument();

    const sortingButton = screen.getByLabelText(
      `${label} ${t('dataTable.ariaLabels.sortingButton')}`,
    );

    expect(sortingButton).toBeInTheDocument();
  });

  it('handles sorting options correctly', async () => {
    renderComponent();
    const sortingButton = screen.getByLabelText(
      `${label} ${t('dataTable.ariaLabels.sortingButton')}`,
    );

    await userEvent.click(sortingButton);

    const ascButton = screen.getByText(t('dataTable.sortBy.dataType.string.asc'));

    await userEvent.click(ascButton);

    expect(handleOnChange).toHaveBeenCalledWith({
      payload: { orderBy: 'columnId', orderDirection: 'asc' },
      event: 'sort',
    });
  });
});
