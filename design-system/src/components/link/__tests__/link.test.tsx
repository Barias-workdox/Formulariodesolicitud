import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { Link } from '../link';

import type { LinkProps } from '../link.interfaces';
import type { RenderType } from '@test/test-utils';

const mockOnClick = testHelpers.fn();

const defaultProps: LinkProps = {
  dataTestId: 'test-link',
  children: 'Test Link',
  href: 'https://example.com',
  onClick: mockOnClick,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<LinkProps>): RenderType =>
  render(
    <Link
      {...defaultProps}
      {...props}
    />,
  );

describe('Link', () => {
  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render the component with default props', () => {
      const { container } = renderComponent();

      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render with children content', () => {
      renderComponent({ children: 'Custom Link Text' });

      expect(screen.getByText('Custom Link Text')).toBeInTheDocument();
    });

    it('should render with custom dataTestId', () => {
      renderComponent({ dataTestId: 'custom-test-id' });

      expect(screen.getByTestId('custom-test-id--link')).toBeInTheDocument();
    });

    it('should generate dataTestId from href when not provided', () => {
      renderComponent({
        dataTestId: undefined,
        href: 'https://webdoxclm.com',
      });

      expect(screen.getByTestId('link__webdoxclm-com--link')).toBeInTheDocument();
    });
  });

  describe('Props variations', () => {
    it('should render with different kind variants', () => {
      const { container: defaultContainer } = renderComponent({ kind: 'default' });
      const { container: contrastContainer } = renderComponent({ kind: 'contrast' });

      expect(defaultContainer.firstChild).toMatchSnapshot();
      expect(contrastContainer.firstChild).toMatchSnapshot();
    });

    it('should render with different size variants', () => {
      const { container: mediumContainer } = renderComponent({ size: 'medium' });
      const { container: smallContainer } = renderComponent({ size: 'small' });

      expect(mediumContainer.firstChild).toMatchSnapshot();
      expect(smallContainer.firstChild).toMatchSnapshot();
    });

    it('should render with underlined prop', () => {
      const { container: underlinedContainer } = renderComponent({ underlined: true });
      const { container: notUnderlinedContainer } = renderComponent({ underlined: false });

      expect(underlinedContainer.firstChild).toMatchSnapshot();
      expect(notUnderlinedContainer.firstChild).toMatchSnapshot();
    });

    it('should render with disabled state', () => {
      const { container } = renderComponent({ disabled: true });

      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render with different target values', () => {
      const { container: blankContainer } = renderComponent({ target: '_blank' });
      const { container: selfContainer } = renderComponent({ target: '_self' });
      const { container: parentContainer } = renderComponent({ target: '_parent' });
      const { container: topContainer } = renderComponent({ target: '_top' });

      expect(blankContainer.firstChild).toMatchSnapshot();
      expect(selfContainer.firstChild).toMatchSnapshot();
      expect(parentContainer.firstChild).toMatchSnapshot();
      expect(topContainer.firstChild).toMatchSnapshot();
    });
  });

  describe('Accessibility', () => {
    it('should have correct accessibility attributes when enabled', () => {
      renderComponent();

      const link = screen.getByTestId('test-link--link');

      expect(link).toHaveAttribute('tabIndex', '0');
      expect(link).toHaveAttribute('aria-disabled', 'false');
    });

    it('should have correct accessibility attributes when disabled', () => {
      renderComponent({ disabled: true });

      const link = screen.getByTestId('test-link--link');

      expect(link).toHaveAttribute('tabIndex', '-1');
      expect(link).toHaveAttribute('aria-disabled', 'true');
    });

    it('should not have href when disabled', () => {
      renderComponent({ disabled: true });

      const link = screen.getByTestId('test-link--link');

      expect(link).not.toHaveAttribute('href');
    });
  });

  describe('Security attributes', () => {
    it('should have security attributes when enabled with default target', () => {
      renderComponent();

      const link = screen.getByTestId('test-link--link');

      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(link).toHaveAttribute('target', '_blank');
    });

    it('should use custom target when provided', () => {
      renderComponent({ target: '_self' });

      const link = screen.getByTestId('test-link--link');

      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(link).toHaveAttribute('target', '_self');
    });

    it('should use custom target _parent when provided', () => {
      renderComponent({ target: '_parent' });

      const link = screen.getByTestId('test-link--link');

      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(link).toHaveAttribute('target', '_parent');
    });

    it('should use custom target _top when provided', () => {
      renderComponent({ target: '_top' });

      const link = screen.getByTestId('test-link--link');

      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(link).toHaveAttribute('target', '_top');
    });

    it('should not have security attributes when disabled', () => {
      renderComponent({ disabled: true });

      const link = screen.getByTestId('test-link--link');

      expect(link).not.toHaveAttribute('rel');
      expect(link).not.toHaveAttribute('target');
    });
  });

  describe('Event handling', () => {
    it('should call onClick when clicked and not disabled', async () => {
      const user = userEvent.setup();

      renderComponent();

      const link = screen.getByTestId('test-link--link');

      await user.click(link);

      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when disabled', async () => {
      const user = userEvent.setup();

      renderComponent({ disabled: true });

      const link = screen.getByTestId('test-link--link');

      await user.click(link);

      expect(mockOnClick).not.toHaveBeenCalled();
    });

    it('should not have onClick handler when disabled', () => {
      renderComponent({ disabled: true });

      const link = screen.getByTestId('test-link--link');

      expect(link).not.toHaveAttribute('onClick');
    });
  });

  describe('URL handling', () => {
    it('should handle external URLs', () => {
      renderComponent({ href: 'https://external-site.com' });

      const link = screen.getByTestId('test-link--link');

      expect(link).toHaveAttribute('href', 'https://external-site.com');
    });

    it('should handle internal URLs', () => {
      renderComponent({ href: '/internal-page' });

      const link = screen.getByTestId('test-link--link');

      expect(link).toHaveAttribute('href', '/internal-page');
    });

    it('should handle relative URLs', () => {
      renderComponent({ href: '../relative-path' });

      const link = screen.getByTestId('test-link--link');

      expect(link).toHaveAttribute('href', '../relative-path');
    });
  });

  describe('Combined props scenarios', () => {
    it('should render with all props combined', () => {
      const { container } = renderComponent({
        kind: 'contrast',
        size: 'small',
        underlined: false,
        disabled: false,
        target: '_self',
        dataTestId: 'combined-test',
        children: 'Combined Props Link',
        href: 'https://combined.example.com',
      });

      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render disabled with contrast kind and small size', () => {
      const { container } = renderComponent({
        kind: 'contrast',
        size: 'small',
        disabled: true,
        children: 'Disabled Contrast Small Link',
        href: 'https://disabled.example.com',
      });

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Edge cases', () => {
    it('should handle empty children', () => {
      renderComponent({ children: '' });

      const link = screen.getByTestId('test-link--link');

      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent('');
    });

    it('should handle undefined href', () => {
      renderComponent({ href: undefined });

      const link = screen.getByTestId('test-link--link');

      expect(link).not.toHaveAttribute('href');
    });

    it('should handle empty href', () => {
      renderComponent({ href: '' });

      const link = screen.getByTestId('test-link--link');

      expect(link).toHaveAttribute('href', '');
    });
  });
});
