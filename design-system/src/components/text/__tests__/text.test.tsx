import { render } from '@test/test-utils';

import { Text } from '../text';

import type { TextProps } from '../text';
import type { TextVariant } from '../text.interface';

describe('Text', () => {
  const validVariants: TextVariant[] = [
    'h1',
    'h2',
    'body',
    'bodySmall',
    'microCopy',
    'upperDetails',
  ];

  const defaultProps: Omit<TextProps, 'variant'> = {
    'data-testid': 'text-component',
    children: 'Sample text content',
  };

  const renderComponent = (props?: Partial<TextProps>) =>
    render(
      <Text
        variant="body"
        {...defaultProps}
        {...props}
      />,
    );

  describe('Valid variants', () => {
    validVariants.forEach((variant) => {
      it(`should render correctly with variant "${variant}"`, () => {
        const { container } = renderComponent({ variant });

        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });

  describe('Props variations', () => {
    it('should render with custom font weight', () => {
      const { container } = renderComponent({
        variant: 'body',
        fontWeight: '700',
      });

      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render with custom text alignment', () => {
      const { container } = renderComponent({
        variant: 'h1',
        textAlign: 'center',
      });

      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render with custom color', () => {
      const { container } = renderComponent({
        variant: 'h2',
        color: '#FF0000',
      });

      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render with design system color', () => {
      const { container } = renderComponent({
        variant: 'body',
        color: 'primary',
      });

      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render with custom styles', () => {
      const { container } = renderComponent({
        variant: 'bodySmall',
        $style: {
          textDecoration: 'underline',
          letterSpacing: '0.1em',
        },
      });

      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render with onClick handler', () => {
      const mockOnClick = vi.fn();
      const { container } = renderComponent({
        variant: 'microCopy',
        onClick: mockOnClick,
      });

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Accessibility and interactions', () => {
    it('should render with htmlFor attribute', () => {
      const { container } = renderComponent({
        variant: 'upperDetails',
        htmlFor: 'input-id',
      });

      expect(container.firstChild).toMatchSnapshot();
    });

    it('should call onClick when clicked', async () => {
      const mockOnClick = vi.fn();
      const { getByTestId } = renderComponent({
        variant: 'body',
        onClick: mockOnClick,
      });

      const textElement = getByTestId('text-component');

      textElement.click();

      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Complex scenarios', () => {
    it('should render with all props combined', () => {
      const mockOnClick = vi.fn();
      const { container } = renderComponent({
        variant: 'h1',
        fontWeight: 'bold',
        textAlign: 'right',
        color: 'secondary',
        htmlFor: 'complex-input',
        onClick: mockOnClick,
        $style: {
          marginTop: '1rem',
          fontSize: '1.5rem',
        },
      });

      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render with different content types', () => {
      const { container } = render(
        <Text
          variant="body"
          data-testid="text-with-jsx"
        >
          Text with <strong>bold</strong> and <em>italic</em> content
        </Text>,
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Fallback behavior', () => {
    it('should fall back to body variant when accessing deprecated variant internally', () => {
      const { container } = renderComponent({
        variant: 'body',
      });

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
