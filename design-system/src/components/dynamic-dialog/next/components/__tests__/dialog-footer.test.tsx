import { render, screen } from '@test/test-utils';

import { DynamicDialogFooter } from '../dialog-footer';

describe('DynamicDialogFooter - tests', () => {
  const defaultProps = {
    children: <button>Test Button</button>,
  };

  it('renders children correctly', () => {
    render(<DynamicDialogFooter {...defaultProps} />);

    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <DynamicDialogFooter
        {...defaultProps}
        className="custom-footer-class"
      />,
    );

    const footer = screen.getByTestId('dynamic-dialog-footer');

    expect(footer).toHaveClass('custom-footer-class');
  });

  it('renders with default data-testid', () => {
    render(<DynamicDialogFooter {...defaultProps} />);

    expect(screen.getByTestId('dynamic-dialog-footer')).toBeInTheDocument();
  });

  it('renders with custom data-testid', () => {
    render(
      <DynamicDialogFooter
        {...defaultProps}
        dataTestId="custom-footer"
      />,
    );

    expect(screen.getByTestId('custom-footer')).toBeInTheDocument();
  });

  it('does not render when visible is false', () => {
    render(
      <DynamicDialogFooter
        {...defaultProps}
        visible={false}
      />,
    );

    expect(screen.queryByText('Test Button')).not.toBeInTheDocument();
  });

  it('renders when visible is true', () => {
    render(
      <DynamicDialogFooter
        {...defaultProps}
        visible={true}
      />,
    );

    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });
});
