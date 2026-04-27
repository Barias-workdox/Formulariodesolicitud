import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { IconButton } from './icon-button';

describe('IconButton', () => {
  it('should render the button with content', () => {
    render(<IconButton onClick={testHelpers.fn()}>Button Text</IconButton>);

    const button = screen.getByText('Button Text');

    expect(button).toBeInTheDocument();
  });

  it('should call onClick handler when clicked', async () => {
    const handleClick = testHelpers.fn();

    render(<IconButton onClick={handleClick}>Button Text</IconButton>);

    const button = screen.getByText('Button Text');

    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when the disabled prop is true', () => {
    render(
      <IconButton
        onClick={testHelpers.fn()}
        disabled
      >
        Button Text
      </IconButton>,
    );

    const button = screen.getByText('Button Text');

    expect(button).toBeDisabled();
  });

  it('should not call onClick handler when disabled and clicked', () => {
    const handleClick = testHelpers.fn();

    render(
      <IconButton
        onClick={handleClick}
        disabled
      >
        Button Text
      </IconButton>,
    );

    const button = screen.getByText('Button Text');

    userEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
