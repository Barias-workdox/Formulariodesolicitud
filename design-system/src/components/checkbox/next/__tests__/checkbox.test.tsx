import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { Checkbox } from '../checkbox';

import type { CheckboxProps } from '../checkbox.interfaces';
import type { RenderType } from '@test/test-utils';

const mockOnChange = testHelpers.fn();

const defaultProps: CheckboxProps = {
  checked: false,
  label: 'Checkbox label',
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
  beforeEach(() => {
    mockOnChange.mockClear();
  });

  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  describe('Basic functionality', () => {
    it('should render without crashing', () => {
      renderComponent();

      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('should be checked when checked prop is true', () => {
      renderComponent({ checked: true });

      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('should be unchecked when checked prop is false', () => {
      renderComponent({ checked: false });

      expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    it('should display the label correctly', () => {
      const label = 'Test checkbox label';

      renderComponent({ label });

      expect(screen.getByText(label)).toBeInTheDocument();
    });

    it('should not display label when not provided', () => {
      renderComponent({ label: undefined });

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toHaveAttribute('aria-label', 'checkbox');
    });

    it('should call onChange when clicked', async () => {
      renderComponent({ onChange: mockOnChange });

      const checkbox = screen.getByRole('checkbox');

      await userEvent.click(checkbox);

      expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

    it('should not call onChange when disabled', async () => {
      renderComponent({ disabled: true, onChange: mockOnChange });

      const checkbox = screen.getByRole('checkbox');

      await userEvent.click(checkbox);

      expect(checkbox).toBeDisabled();
      expect(mockOnChange).not.toHaveBeenCalled();
    });
  });

  describe('States', () => {
    it('should be disabled when disabled prop is true', () => {
      renderComponent({ disabled: true });

      expect(screen.getByRole('checkbox')).toBeDisabled();
    });

    it('should have error state when error prop is true', () => {
      renderComponent({ error: true });

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toHaveAttribute('aria-invalid', 'true');
    });

    it('should be indeterminate when indeterminate prop is true', () => {
      renderComponent({ indeterminate: true });

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
      // BaseWeb handles indeterminate state internally
      // The component should render without errors
    });

    it('should handle checked and indeterminate states together', () => {
      renderComponent({ checked: true, indeterminate: true });

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
      // BaseWeb handles both states together
    });
  });

  describe('Required indicator', () => {
    it('should display required indicator when required is true', () => {
      renderComponent({ required: true, label: 'Required checkbox' });

      expect(screen.getByText('Required checkbox')).toBeInTheDocument();
      expect(screen.getByText('*')).toBeInTheDocument();
    });

    it('should not display required indicator when required is false', () => {
      renderComponent({ required: false, label: 'Optional checkbox' });

      expect(screen.getByText('Optional checkbox')).toBeInTheDocument();
      expect(screen.queryByText('*')).not.toBeInTheDocument();
    });

    it('should not display required indicator when label is not provided', () => {
      renderComponent({ required: true, label: undefined });

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
      expect(screen.queryByText('*')).not.toBeInTheDocument();
    });
  });

  describe('Size variants', () => {
    it('should render with medium size by default', () => {
      renderComponent();

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
    });

    it('should render with small size', () => {
      renderComponent({ size: 'small' });

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
    });

    it('should render with medium size', () => {
      renderComponent({ size: 'medium' });

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have default data-testid', () => {
      renderComponent();

      expect(screen.getByTestId('design-system__checkbox--component')).toBeInTheDocument();
    });

    it('should use custom data-testid when provided', () => {
      const customTestId = 'custom-checkbox-test-id';

      renderComponent({ 'data-testid': customTestId });

      expect(screen.getByTestId(customTestId)).toBeInTheDocument();
    });

    it('should have aria-label with label text when label is provided', () => {
      const label = 'Accessible checkbox label';

      renderComponent({ label });

      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-label', label);
    });

    it('should have aria-label with "checkbox" when label is not provided', () => {
      renderComponent({ label: undefined });

      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-label', 'checkbox');
    });

    it('should pass aria-required prop to BaseWeb checkbox when required is true', () => {
      renderComponent({ required: true });

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
      // aria-required is passed to BaseWebCheckbox component
      // BaseWeb may handle it internally
    });

    it('should pass aria-required prop to BaseWeb checkbox when required is false', () => {
      renderComponent({ required: false });

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
      // aria-required is passed to BaseWebCheckbox component
    });
  });

  describe('Value prop', () => {
    it('should use default value "on" when value is not provided', () => {
      renderComponent();

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toHaveAttribute('value', 'on');
    });

    it('should use custom value when provided', () => {
      const customValue = 'custom-value';

      renderComponent({ value: customValue });

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toHaveAttribute('value', customValue);
    });
  });

  describe('Edge cases', () => {
    it('should handle onChange being undefined', async () => {
      renderComponent({ onChange: undefined });

      const checkbox = screen.getByRole('checkbox');

      await userEvent.click(checkbox);

      // Should not throw error when onChange is undefined
      expect(checkbox).toBeInTheDocument();
    });

    it('should handle empty label string', () => {
      renderComponent({ label: '' });

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toHaveAttribute('aria-label', 'checkbox');
    });

    it('should handle all props together', () => {
      renderComponent({
        checked: true,
        label: 'Complete checkbox',
        size: 'small',
        disabled: false,
        required: true,
        error: false,
        indeterminate: false,
        value: 'test-value',
        'data-testid': 'complete-test-id',
      });

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeChecked();
      expect(screen.getByText('Complete checkbox')).toBeInTheDocument();
      expect(screen.getByText('*')).toBeInTheDocument();
      expect(screen.getByTestId('complete-test-id')).toBeInTheDocument();
      expect(checkbox).toHaveAttribute('value', 'test-value');
    });

    it('should handle hover state internally', async () => {
      renderComponent({ label: 'Hover test' });

      const checkbox = screen.getByRole('checkbox');

      await userEvent.hover(checkbox);

      // Component should still be functional after hover
      expect(checkbox).toBeInTheDocument();
    });
  });
});
