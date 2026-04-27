import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { Switch } from '../switch';

import type { SwitchProps } from '../switch.interface';
import type { RenderType } from '@test/test-utils';

const dataTestId = 'test';
const mockOnChange = testHelpers.fn();

const defaultProps: SwitchProps = {
  dataTestId,
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
  beforeEach(() => {
    mockOnChange.mockClear();
  });

  describe('Basic functionality', () => {
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

    it('should be disabled', async () => {
      renderComponent({ disabled: true });

      const checkbox = screen.getByRole('checkbox');

      await userEvent.click(checkbox);

      expect(checkbox).toBeDisabled();
      // Click success but is disabled so no changes occurred
      expect(mockOnChange).not.toHaveBeenCalledWith(true);
    });

    it('should render the description text', () => {
      const description = 'Description text';

      renderComponent({ description });

      expect(screen.getByText(description)).toBeInTheDocument();
    });

    it('should toggle from unchecked to checked', async () => {
      renderComponent({ checked: false });

      const checkbox = screen.getByRole('checkbox');

      await userEvent.click(checkbox);

      expect(mockOnChange).toHaveBeenCalledWith(true);
    });

    it('should not call onChange when disabled', async () => {
      renderComponent({ disabled: true, checked: false });

      const checkbox = screen.getByRole('checkbox');

      await userEvent.click(checkbox);

      expect(mockOnChange).not.toHaveBeenCalled();
    });
  });

  describe('Title and description rendering', () => {
    it('should render title text', () => {
      const title = 'Switch Title';

      renderComponent({ title });

      expect(screen.getByText(title)).toBeInTheDocument();
    });

    it('should render both title and description', () => {
      const title = 'Switch Title';
      const description = 'Switch Description';

      renderComponent({ title, description });

      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(description)).toBeInTheDocument();
    });

    it('should not render title when not provided', () => {
      renderComponent({ description: 'Only description' });

      expect(screen.getByText('Only description')).toBeInTheDocument();
      expect(screen.queryByTestId('switch-title')).not.toBeInTheDocument();
    });

    it('should not render description when not provided', () => {
      renderComponent({ title: 'Only title' });

      expect(screen.getByText('Only title')).toBeInTheDocument();
      expect(screen.queryByTestId('switch-description')).not.toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('should render with 14px variant', () => {
      renderComponent({
        title: 'Test Title',
        description: 'Test Description',
        variant: '14px',
      });

      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test Description')).toBeInTheDocument();
    });

    it('should render with 16px variant (default)', () => {
      renderComponent({
        title: 'Test Title',
        description: 'Test Description',
        variant: '16px',
      });

      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test Description')).toBeInTheDocument();
    });
  });

  describe('Label placement', () => {
    it('should render with right label placement (default)', () => {
      renderComponent({ title: 'Test Title' });

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
    });

    it('should render with top label placement', () => {
      renderComponent({
        title: 'Test Title',
        labelPlacement: 'top',
      });

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have correct data-testid', () => {
      renderComponent({ dataTestId: 'custom-test-id' });

      // The data-testid is applied to the Checkbox component, not a specific element
      expect(screen.getByTestId('custom-test-id')).toBeInTheDocument();
    });

    it('should use ariaLabel when provided', () => {
      const ariaLabel = 'Custom accessible label';

      renderComponent({ ariaLabel });

      const switchElement = screen.getByRole('switch');

      expect(switchElement).toHaveAttribute('aria-label', ariaLabel);
    });

    it('should use title as accessible name when no ariaLabel provided', () => {
      const title = 'Switch Title';

      renderComponent({ title });

      const switchElement = screen.getByRole('switch');

      expect(switchElement).toHaveAttribute('aria-labelledby', 'switch-label');
    });

    it('should use custom ariaLabelledBy when provided', () => {
      const customAriaLabelledBy = 'custom-label-id';

      renderComponent({ ariaLabelledBy: customAriaLabelledBy });

      const switchElement = screen.getByRole('switch');

      expect(switchElement).toHaveAttribute('aria-labelledby', customAriaLabelledBy);
    });

    it('should use custom ariaDescribedBy when provided', () => {
      const customAriaDescribedBy = 'custom-description-id';

      renderComponent({
        description: 'Test Description',
        ariaDescribedBy: customAriaDescribedBy,
      });

      const switchElement = screen.getByRole('switch');

      expect(switchElement).toHaveAttribute('aria-describedby', customAriaDescribedBy);
    });

    it('should be keyboard accessible', async () => {
      renderComponent({ title: 'Test Title' });

      const switchElement = screen.getByRole('switch');

      switchElement.focus();
      await userEvent.keyboard('{Enter}');

      expect(mockOnChange).toHaveBeenCalledWith(true);
    });

    it('should be keyboard accessible with space key', async () => {
      renderComponent({ title: 'Test Title' });

      const switchElement = screen.getByRole('switch');

      switchElement.focus();
      await userEvent.keyboard(' ');

      expect(mockOnChange).toHaveBeenCalledWith(true);
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

    it('should handle empty title and description', () => {
      renderComponent({ title: '', description: '' });

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
    });

    it('should handle very long title and description', () => {
      const longTitle =
        'This is a very long title that might wrap to multiple lines and should still be rendered correctly';
      const longDescription =
        'This is a very long description that might wrap to multiple lines and should still be rendered correctly';

      renderComponent({ title: longTitle, description: longDescription });

      expect(screen.getByText(longTitle)).toBeInTheDocument();
      expect(screen.getByText(longDescription)).toBeInTheDocument();
    });
  });
});
