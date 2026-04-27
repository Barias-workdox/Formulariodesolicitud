import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { TableActionCell } from '../table-actions-column-cell';

describe('TableActionCell', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('renders children correctly', () => {
    render(<TableActionCell isRowHovered={false}>Action Button</TableActionCell>);

    const cell = screen.getByText('Action Button');

    expect(cell).toBeInTheDocument();
  });

  it('handles mouse enter event', async () => {
    const onMouseEnter = testHelpers.fn();

    render(
      <TableActionCell
        isRowHovered={false}
        onMouseEnter={onMouseEnter}
      >
        Action Button
      </TableActionCell>,
    );

    const button = screen.getByText('Action Button');

    await userEvent.hover(button);

    expect(onMouseEnter).toHaveBeenCalledTimes(1);
  });

  it('handles mouse leave event', async () => {
    const onMouseLeave = testHelpers.fn();

    render(
      <TableActionCell
        isRowHovered={true}
        onMouseLeave={onMouseLeave}
      >
        Action Button
      </TableActionCell>,
    );

    const button = screen.getByText('Action Button');

    await userEvent.hover(button);

    await userEvent.unhover(button);

    expect(onMouseLeave).toHaveBeenCalledTimes(1);
  });
});
