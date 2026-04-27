import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { Button } from '../button';

import type { ButtonProps } from '../button.interfaces';
import type { RenderType } from '@test/test-utils';

const mockOnClick = testHelpers.fn();

const defaultProps: ButtonProps = {
  children: 'Button',
  onClick: mockOnClick,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ButtonProps>): RenderType =>
  render(
    <Button
      {...defaultProps}
      {...props}
    />,
  );

describe('Button - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component', () => {
    renderComponent();

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(defaultProps.children.toString())).toBeInTheDocument();
  });

  it('should execute correctly when the component is clicked', async () => {
    renderComponent({ onClick: mockOnClick });

    expect(mockOnClick.mock.calls.length).toBe(0);
    await userEvent.click(screen.getByRole('button'));
    expect(mockOnClick.mock.calls.length).toBe(1);
  });
});
