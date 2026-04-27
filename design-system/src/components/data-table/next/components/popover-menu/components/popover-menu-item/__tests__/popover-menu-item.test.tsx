import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { PopoverMenuItem } from '../popover-menu-item';

describe('PopoverMenuItem', () => {
  it('renders children content', () => {
    const buttonText = 'Click Me';

    render(<PopoverMenuItem onClick={() => {}}>{buttonText}</PopoverMenuItem>);

    const button = screen.getByText(buttonText);

    expect(button).toBeInTheDocument();
  });

  it('calls onClick callback when clicked', async () => {
    const onClickMock = testHelpers.fn();

    render(<PopoverMenuItem onClick={onClickMock}>Item</PopoverMenuItem>);

    const button = screen.getByText('Item');

    await userEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
