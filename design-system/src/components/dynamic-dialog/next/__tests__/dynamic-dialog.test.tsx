import { vi } from 'vitest';

import { render, screen } from '@test/test-utils';

import { DynamicDialog } from '../dynamic-dialog';

// Mock de useDraggableElement
vi.mock('@hooks/use-draggable-element.hook', () => ({
  useDraggableElement: () => ({
    handlePointerDown: vi.fn(),
  }),
}));

// Mock de Layer de baseui
vi.mock('baseui/layer', () => ({
  Layer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('DynamicDialog - tests', () => {
  const defaultProps = {
    isOpen: true,
    children: <div>Test Dialog Content</div>,
  };

  it('renders correctly when open', () => {
    render(<DynamicDialog {...defaultProps} />);

    expect(screen.getByText('Test Dialog Content')).toBeInTheDocument();
    expect(screen.getByTestId('dynamic-dialog')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(
      <DynamicDialog
        {...defaultProps}
        isOpen={false}
      />,
    );

    expect(screen.queryByText('Test Dialog Content')).not.toBeInTheDocument();
    expect(screen.queryByTestId('dynamic-dialog')).not.toBeInTheDocument();
  });

  it('renders with custom data-testid', () => {
    render(
      <DynamicDialog
        {...defaultProps}
        dataTestId="custom-dialog"
      />,
    );

    expect(screen.getByTestId('custom-dialog')).toBeInTheDocument();
  });

  it('renders with custom title and description', () => {
    const children = (
      <>
        <div>Custom Title</div>
        <div>Custom Description</div>
      </>
    );

    render(<DynamicDialog {...defaultProps}>{children}</DynamicDialog>);

    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom Description')).toBeInTheDocument();
  });

  it('applies custom dimensions', () => {
    render(
      <DynamicDialog
        {...defaultProps}
        initialWidth={800}
        initialHeight={600}
        minWidth={400}
        minHeight={300}
      />,
    );

    const dialog = screen.getByTestId('dynamic-dialog');

    expect(dialog).toBeInTheDocument();
  });

  it('renders with custom placement', () => {
    render(
      <DynamicDialog
        {...defaultProps}
        placement="topLeft"
      />,
    );

    const dialog = screen.getByTestId('dynamic-dialog');

    expect(dialog).toBeInTheDocument();
  });

  it('renders with controlled full viewport', () => {
    render(
      <DynamicDialog
        {...defaultProps}
        fullViewport={true}
      />,
    );

    const dialog = screen.getByTestId('dynamic-dialog');

    expect(dialog).toBeInTheDocument();
  });

  it('renders with custom z-index', () => {
    render(
      <DynamicDialog
        {...defaultProps}
        zIndex={2000}
      />,
    );

    const dialog = screen.getByTestId('dynamic-dialog');

    expect(dialog).toBeInTheDocument();
  });

  it('renders with draggable disabled', () => {
    render(
      <DynamicDialog
        {...defaultProps}
        draggable={false}
      />,
    );

    const dialog = screen.getByTestId('dynamic-dialog');

    expect(dialog).toBeInTheDocument();
  });

  it('renders with resizable disabled', () => {
    render(
      <DynamicDialog
        {...defaultProps}
        resizable={false}
      />,
    );

    const dialog = screen.getByTestId('dynamic-dialog');

    expect(dialog).toBeInTheDocument();
  });

  it('renders with closable disabled', () => {
    render(
      <DynamicDialog
        {...defaultProps}
        closable={false}
      />,
    );

    const dialog = screen.getByTestId('dynamic-dialog');

    expect(dialog).toBeInTheDocument();
  });

  it('renders with max dimensions', () => {
    render(
      <DynamicDialog
        {...defaultProps}
        maxWidth={1000}
        maxHeight={800}
      />,
    );

    const dialog = screen.getByTestId('dynamic-dialog');

    expect(dialog).toBeInTheDocument();
  });
});
