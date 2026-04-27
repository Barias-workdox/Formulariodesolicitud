import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { Checkbox } from '../checkbox';

import type { CheckboxProps } from '../checkbox';
import type { RenderType } from '@test/test-utils';

const mockOnChange = testHelpers.fn();

const defaultProps: CheckboxProps = {
  checked: false,
  children: 'Label text',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<CheckboxProps>): RenderType =>
  render(
    <Checkbox
      {...defaultProps}
      {...props}
    />,
  );

describe('Checkbox - test', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should be checked', () => {
    renderComponent({ checked: true });

    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('should be unchecked', () => {
    renderComponent({ checked: false });

    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('should display correctly the label', () => {
    renderComponent();

    expect(screen.getByText('Label text')).toBeInTheDocument();
  });

  it('should not display the label', () => {
    renderComponent({ children: undefined });

    expect(screen.queryByText('Label text')).not.toBeInTheDocument();
  });

  it('should execute correctly when is clicked', async () => {
    renderComponent({ onChange: mockOnChange });

    await userEvent.click(screen.getByRole('checkbox'));
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
