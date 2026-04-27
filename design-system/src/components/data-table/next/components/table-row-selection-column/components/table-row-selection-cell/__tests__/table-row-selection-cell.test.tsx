import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { TableRowSelectionCell } from '../table-row-selection-cell';

import type { TableRowSelectionCellProps } from '../table-row-selection-cell';
import type { RenderResult } from '@test/test-utils';

const mockText = 'Text';

const defaultProps: TableRowSelectionCellProps = {
  isRowHovered: false,
  isRowChecked: false,
  children: mockText,
};

const renderComponent = (props?: Partial<TableRowSelectionCellProps>): RenderResult => {
  return render(
    <TableRowSelectionCell
      {...defaultProps}
      {...props}
    >
      {mockText}
    </TableRowSelectionCell>,
  );
};

describe('TableRowSelectionCell', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('renders children correctly', () => {
    renderComponent();

    const cell = screen.getByText(mockText);

    expect(cell).toBeInTheDocument();
  });

  it('handles mouse enter event', async () => {
    const onMouseEnter = testHelpers.fn();

    renderComponent({
      onMouseEnter,
    });

    const button = screen.getByText(mockText);

    await userEvent.hover(button);

    expect(onMouseEnter).toHaveBeenCalledTimes(1);
  });

  it('handles mouse leave event', async () => {
    const onMouseLeave = testHelpers.fn();

    renderComponent({
      onMouseLeave,
      isRowHovered: true,
    });

    const button = screen.getByText(mockText);

    await userEvent.hover(button);

    await userEvent.unhover(button);

    expect(onMouseLeave).toHaveBeenCalledTimes(1);
  });
});
