import { Add, ArrowRight } from '@carbon/icons-react';
import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { Button } from '../button';

import type { ButtonProps } from '../button.interfaces';
import type { RenderType } from '@test/test-utils';

const mockOnClick = testHelpers.fn();

const defaultProps: ButtonProps = {
  children: 'Test Button',
};

const renderComponent = (props?: Partial<ButtonProps>): RenderType =>
  render(
    <Button
      {...defaultProps}
      {...props}
    />,
  );

describe('Button - Next Generation Tests', () => {
  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  describe('Basic Rendering', () => {
    it('should render the component', () => {
      renderComponent();

      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByText('Test Button')).toBeInTheDocument();
    });

    it('should render empty button when children is undefined', () => {
      renderComponent({ children: undefined });

      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should apply custom data-testid', () => {
      renderComponent({ dataTestId: 'custom-button' });

      expect(screen.getByTestId('custom-button')).toBeInTheDocument();
    });
  });

  describe('Visual Variants', () => {
    it.each(['brand', 'neutral', 'positive', 'negative', 'contrast'] as const)(
      'should render with %s kind',
      (kind) => {
        renderComponent({ kind });

        expect(screen.getByRole('button')).toBeInTheDocument();
      },
    );

    it.each(['filled', 'tonal', 'outlined', 'ghost'] as const)(
      'should render with %s appearance',
      (appearance) => {
        renderComponent({ appearance });

        expect(screen.getByRole('button')).toBeInTheDocument();
      },
    );

    it.each(['44px', '32px'] as const)('should render with %s size', (size) => {
      renderComponent({ size });

      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should render with full width', () => {
      renderComponent({ fullWidth: true });

      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('Icons', () => {
    it('should render with left icon', () => {
      renderComponent({ startEnhancer: Add });

      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
      expect(button.querySelector('svg')).toBeInTheDocument();
    });

    it('should render with right icon', () => {
      renderComponent({ endEnhancer: ArrowRight });

      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
      expect(button.querySelector('svg')).toBeInTheDocument();
    });

    it('should render both icons when both are provided', () => {
      renderComponent({ startEnhancer: Add, endEnhancer: ArrowRight });

      const button = screen.getByRole('button');

      expect(button.querySelectorAll('svg')).toHaveLength(2);
    });
  });

  describe('States', () => {
    it('should be disabled when disabled prop is true', () => {
      renderComponent({ disabled: true });

      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('should show loading state', () => {
      renderComponent({ isLoading: true });

      const button = screen.getByRole('button');

      expect(button).toHaveAttribute('aria-busy', 'true');
      expect(button).toHaveAttribute('aria-live', 'polite');
    });
  });

  describe('Event Handlers', () => {
    it('should call onClick when clicked', async () => {
      renderComponent({ onClick: mockOnClick });

      await userEvent.click(screen.getByRole('button'));

      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when disabled', async () => {
      renderComponent({ onClick: mockOnClick, disabled: true });

      await userEvent.click(screen.getByRole('button'));

      expect(mockOnClick).not.toHaveBeenCalled();
    });

    it('should not call onClick when loading', async () => {
      renderComponent({ onClick: mockOnClick, isLoading: true });

      await userEvent.click(screen.getByRole('button'));

      expect(mockOnClick).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('should apply aria-label correctly', () => {
      renderComponent({ 'aria-label': 'Close dialog' });

      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close dialog');
    });

    it('should apply aria-pressed correctly', () => {
      renderComponent({ 'aria-pressed': true });

      expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true');
    });

    it('should apply aria-disabled when disabled', () => {
      renderComponent({ disabled: true });

      expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true');
    });

    it('should have proper button type', () => {
      renderComponent();

      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });
  });
});
