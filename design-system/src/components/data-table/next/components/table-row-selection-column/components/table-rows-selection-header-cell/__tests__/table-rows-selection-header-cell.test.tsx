import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { TableRowsSelectionHeaderCell } from '../table-rows-selection-header-cell';

import type { TableRowsSelectionHeaderCellProps } from '../../../../../data-table.interfaces';

const mockOnClickAll = testHelpers.fn();
const mockDataTestId = 'data-test-id';

const defaultProps: TableRowsSelectionHeaderCellProps = {
  'data-testid': mockDataTestId,
  isAllCheck: false,
  isIndeterminate: false,
  onClickAll: mockOnClickAll,
};

/** Utility function to render component easily  */
const renderComponent = (props?: Partial<TableRowsSelectionHeaderCellProps>) => {
  render(
    <TableRowsSelectionHeaderCell
      {...defaultProps}
      {...props}
    />,
  );
};

describe('TableRowsSelectionHeaderCell', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('renders the "Checkbox" not checked correctly', () => {
    renderComponent();

    const checkbox = screen.getByTestId(`${mockDataTestId}--input`);

    expect(checkbox).not.toBeChecked();
  });

  it('renders the "Checkbox" checked correctly', () => {
    renderComponent({ isAllCheck: true });

    const checkbox = screen.getByTestId(`${mockDataTestId}--input`);

    expect(checkbox).toBeChecked();
  });

  it('calls onClickAll correctly', async () => {
    renderComponent({ isAllCheck: true });

    const checkbox = screen.getByTestId(`${mockDataTestId}--input`);

    await userEvent.click(checkbox);

    expect(mockOnClickAll).toHaveBeenCalledTimes(1);
  });
});
