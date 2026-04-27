import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { Switch } from './switch';

import type { SwitchProps } from './switch';
import type { RenderType } from '@test/test-utils';

const dataTestId = 'test';
const mockOnChange = testHelpers.fn();

const defaultProps: SwitchProps = {
  'data-testid': dataTestId,
  checked: false,
  onChange: mockOnChange,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<SwitchProps>): RenderType =>
  render(
    <Switch
      {...defaultProps}
      {...props}
    />,
  );

describe('Switch - test', () => {
  it('should be checked and clicked', async () => {
    renderComponent({ checked: true });

    const checkbox = screen.getByRole('checkbox');

    await userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(mockOnChange).toHaveBeenCalledWith(false);
  });

  it('should be unchecked', () => {
    renderComponent();

    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('should be loading and disabled', async () => {
    renderComponent({ loading: true });

    const checkbox = screen.getByRole('checkbox');

    await userEvent.click(checkbox);

    expect(checkbox).toBeDisabled();
    // Click success but is disabled so no changes occurred
    expect(mockOnChange).not.toHaveBeenCalledWith(true);
    expect(screen.getByTestId(`${dataTestId}--spinner`)).toBeInTheDocument();
  });

  it('should render the description text', () => {
    const description = 'Description text';

    renderComponent({ description });

    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
