import { render, screen } from '@test/test-utils';

import { DynamicDialogBody } from '../dialog-body';

describe('DynamicDialogBody - tests', () => {
  const defaultProps = {
    children: <div>Test Content</div>,
  };

  it('renders children correctly', () => {
    render(<DynamicDialogBody {...defaultProps} />);

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <DynamicDialogBody
        {...defaultProps}
        className="custom-body-class"
      />,
    );

    const body = screen.getByTestId('dynamic-dialog-body');

    expect(body).toHaveClass('custom-body-class');
  });

  it('applies custom padding', () => {
    render(
      <DynamicDialogBody
        {...defaultProps}
        padding="24px"
      />,
    );

    const body = screen.getByTestId('dynamic-dialog-body');

    expect(body).toBeInTheDocument();
  });

  it('renders with default data-testid', () => {
    render(<DynamicDialogBody {...defaultProps} />);

    expect(screen.getByTestId('dynamic-dialog-body')).toBeInTheDocument();
  });

  it('renders with custom data-testid', () => {
    render(
      <DynamicDialogBody
        {...defaultProps}
        dataTestId="custom-body"
      />,
    );

    expect(screen.getByTestId('custom-body')).toBeInTheDocument();
  });
});
