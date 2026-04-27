import { userEvent } from '@testing-library/user-event';

import { render, screen } from '@test/test-utils';

import { TableActionButton } from '../table-action-button';

const buttonText = 'Click Me';

describe('TableActionButton', () => {
  it('renders children correctly', () => {
    render(
      <TableActionButton popoverProps={{ content: <div>Popover Content</div> }}>
        {buttonText}
      </TableActionButton>,
    );

    const button = screen.getByText(buttonText);

    expect(button).toBeInTheDocument();
  });

  it('opens the popover on button click', async () => {
    render(
      <TableActionButton popoverProps={{ content: <div>Popover Content</div> }}>
        {buttonText}
      </TableActionButton>,
    );

    expect(screen.queryByText('Popover Content')).not.toBeInTheDocument();

    const button = screen.getByText(buttonText);

    await userEvent.click(button);

    const popoverContent = screen.getByText('Popover Content'); // Assuming you have a data-testid in your popover content

    expect(popoverContent).toBeInTheDocument();
  });
});
