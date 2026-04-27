import { render, screen, act } from '@test/test-utils';

import { Spinner } from '../spinner';

import type { SpinnerProps } from '../spinner.interface';
import type { RenderType } from '@test/test-utils';

const baseTestId = 'loading-spinner';

const defaultProps: SpinnerProps = {
  dataTestId: baseTestId,
  kind: 'brand',
  size: 'medium',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<SpinnerProps>): RenderType =>
  render(
    <Spinner
      {...defaultProps}
      {...props}
    />,
  );

describe('Spinner', () => {
  describe('Basic rendering', () => {
    it('should render the spinner correctly', () => {
      renderComponent();

      const spinner = screen.getByTestId(baseTestId);

      expect(spinner).toBeInTheDocument();
      expect(spinner.tagName).toBe('svg');
    });

    it('should render with custom test id', () => {
      const customTestId = 'my-custom-spinner';

      renderComponent({ dataTestId: customTestId });

      const spinner = screen.getByTestId(customTestId);

      expect(spinner).toBeInTheDocument();
    });

    it('should render with different sizes', () => {
      const { rerender } = renderComponent({ size: 'small' });
      let spinner = screen.getByTestId(baseTestId);

      expect(spinner).toBeInTheDocument();

      rerender(
        <Spinner
          {...defaultProps}
          size="large"
        />,
      );
      spinner = screen.getByTestId(baseTestId);

      expect(spinner).toBeInTheDocument();
    });

    it('should render with different kinds', () => {
      const { rerender } = renderComponent({ kind: 'contrast' });
      let spinner = screen.getByTestId(baseTestId);

      expect(spinner).toBeInTheDocument();

      rerender(
        <Spinner
          {...defaultProps}
          kind="custom"
          customColor="#ff0000"
        />,
      );
      spinner = screen.getByTestId(baseTestId);

      expect(spinner).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have correct accessibility attributes by default', () => {
      renderComponent();

      const spinner = screen.getByTestId(baseTestId);

      expect(spinner).toHaveAttribute('role', 'status');
      expect(spinner).not.toHaveAttribute('aria-busy');
    });

    it('should have aria-label when provided', () => {
      const ariaLabel = 'Loading document';

      renderComponent({ ariaLabel });

      const spinner = screen.getByTestId(baseTestId);

      expect(spinner).toHaveAttribute('aria-label', ariaLabel);
    });

    it('should use label as aria-label when both are provided', () => {
      const label = 'Loading content';
      const ariaLabel = 'Should not be used';

      renderComponent({ label, ariaLabel });

      const spinner = screen.getByTestId(baseTestId);

      expect(spinner).toHaveAttribute('aria-label', label);
    });

    it('should have aria-busy=true when fullWidth is true', () => {
      renderComponent({ fullWidth: true });

      const spinner = screen.getByTestId(baseTestId);

      expect(spinner).toHaveAttribute('aria-busy', 'true');
    });

    it('should not have aria-busy when fullWidth is false', () => {
      renderComponent({ fullWidth: false });

      const spinner = screen.getByTestId(baseTestId);

      expect(spinner).not.toHaveAttribute('aria-busy');
    });
  });

  describe('Label functionality', () => {
    it('should render label when provided', () => {
      const label = 'Loading data...';

      renderComponent({ label });

      const labelElement = screen.getByTestId(`${baseTestId}__label`);
      const inlineWrapper = screen.getByTestId(`${baseTestId}__inline-wrapper`);

      expect(labelElement).toBeInTheDocument();
      expect(labelElement).toHaveTextContent(label);
      expect(inlineWrapper).toBeInTheDocument();
    });

    it('should not render label element when label is not provided', () => {
      renderComponent();

      const labelElement = screen.queryByTestId(`${baseTestId}__label`);
      const inlineWrapper = screen.queryByTestId(`${baseTestId}__inline-wrapper`);

      expect(labelElement).not.toBeInTheDocument();
      expect(inlineWrapper).not.toBeInTheDocument();
    });

    it('should not render label when not visible (delay)', () => {
      const label = 'Loading...';

      renderComponent({ label, delay: 100 });

      const labelElement = screen.queryByTestId(`${baseTestId}__label`);

      expect(labelElement).not.toBeInTheDocument();
    });
  });

  describe('Full width mode', () => {
    it('should render overlay when fullWidth is true', () => {
      renderComponent({ fullWidth: true });

      const overlay = screen.getByTestId(`${baseTestId}__overlay`);
      const spinner = screen.getByTestId(baseTestId);

      expect(overlay).toBeInTheDocument();
      expect(spinner).toBeInTheDocument();
    });

    it('should not render overlay when fullWidth is false', () => {
      renderComponent({ fullWidth: false });

      const overlay = screen.queryByTestId(`${baseTestId}__overlay`);

      expect(overlay).not.toBeInTheDocument();
    });

    it('should render both overlay and label when fullWidth and label are provided', () => {
      const label = 'Processing...';

      renderComponent({ fullWidth: true, label });

      const overlay = screen.getByTestId(`${baseTestId}__overlay`);
      const labelElement = screen.getByTestId(`${baseTestId}__label`);
      const spinner = screen.getByTestId(baseTestId);

      expect(overlay).toBeInTheDocument();
      expect(labelElement).toBeInTheDocument();
      expect(labelElement).toHaveTextContent(label);
      expect(spinner).toBeInTheDocument();
    });
  });

  describe('Delay functionality', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.clearAllTimers();
    });

    it('should not show spinner immediately when delay is set', () => {
      renderComponent({ delay: 500 });

      const spinner = screen.queryByTestId(baseTestId);

      expect(spinner).not.toBeInTheDocument();
    });

    it('should show spinner after delay', () => {
      renderComponent({ delay: 500 });

      // Initially not visible
      expect(screen.queryByTestId(baseTestId)).not.toBeInTheDocument();

      // Fast forward time
      act(() => {
        vi.advanceTimersByTime(500);
      });

      // Should be visible now
      const spinner = screen.getByTestId(baseTestId);

      expect(spinner).toBeInTheDocument();
    });

    it('should not show label immediately when delay is set', () => {
      const label = 'Loading...';

      renderComponent({ label, delay: 500 });

      const labelElement = screen.queryByTestId(`${baseTestId}__label`);

      expect(labelElement).not.toBeInTheDocument();
    });

    it('should show label after delay', () => {
      const label = 'Loading...';

      renderComponent({ label, delay: 500 });

      // Initially not visible
      expect(screen.queryByTestId(`${baseTestId}__label`)).not.toBeInTheDocument();

      // Fast forward time
      act(() => {
        vi.advanceTimersByTime(500);
      });

      // Should be visible now
      const labelElement = screen.getByTestId(`${baseTestId}__label`);

      expect(labelElement).toBeInTheDocument();
      expect(labelElement).toHaveTextContent(label);
    });

    it('should show immediately when delay is 0', () => {
      renderComponent({ delay: 0 });

      const spinner = screen.getByTestId(baseTestId);

      expect(spinner).toBeInTheDocument();
    });
  });

  describe('SVG structure', () => {
    it('should render SVG with correct attributes', () => {
      renderComponent();

      const spinner = screen.getByTestId(baseTestId);

      expect(spinner).toHaveAttribute('preserveAspectRatio', 'xMidYMid');
      expect(spinner).toHaveAttribute('viewBox');
    });

    it('should render circle elements', () => {
      renderComponent();

      const spinner = screen.getByTestId(baseTestId);
      const circles = spinner.querySelectorAll('circle');

      expect(circles.length).toBeGreaterThan(0);
    });

    it('should have correct dimensions based on size config', () => {
      renderComponent({ size: 'small' });

      const spinner = screen.getByTestId(baseTestId);

      expect(spinner).toHaveAttribute('width');
      expect(spinner).toHaveAttribute('height');
      expect(spinner.getAttribute('width')).toBe(spinner.getAttribute('height'));
    });
  });

  describe('Edge cases', () => {
    it('should handle empty label gracefully', () => {
      renderComponent({ label: '' });

      const labelElement = screen.queryByTestId(`${baseTestId}__label`);

      expect(labelElement).not.toBeInTheDocument();
    });

    it('should handle missing ariaLabel gracefully', () => {
      renderComponent({ ariaLabel: undefined });

      const spinner = screen.getByTestId(baseTestId);

      expect(spinner).toBeInTheDocument();
    });

    it('should handle extreme custom sizes', () => {
      renderComponent({ customSize: 200 });

      const spinner = screen.getByTestId(baseTestId);

      expect(spinner).toHaveAttribute('width', '200');
      expect(spinner).toHaveAttribute('height', '200');
    });
  });
});
