import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { OAuthButton } from './oauth-button';

import type { OAuthButtonProps } from './oauth-button';
import type { RenderType } from '@test/test-utils';

const mockOnClick = testHelpers.fn();

const defaultProps: OAuthButtonProps = {
  variant: 'google',
  onClick: mockOnClick,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<OAuthButtonProps>): RenderType =>
  render(
    <OAuthButton
      {...defaultProps}
      {...props}
    />,
  );

describe('OAuthButton - test', () => {
  it('should execute correctly when is clicked', async () => {
    renderComponent();

    expect(mockOnClick.mock.calls.length).toBe(0);
    await userEvent.click(screen.getByRole('button'));
    expect(mockOnClick.mock.calls.length).toBe(1);
  });

  it('should render Google if `variant` prop is google', () => {
    renderComponent();
    const text = screen.getByText('Google');

    expect(text).toBeInTheDocument();
  });

  it('should render Microsoft if `variant` prop is microsoft', () => {
    renderComponent({ variant: 'microsoft' });
    const text = screen.getByText('Microsoft');

    expect(text).toBeInTheDocument();
  });
});
