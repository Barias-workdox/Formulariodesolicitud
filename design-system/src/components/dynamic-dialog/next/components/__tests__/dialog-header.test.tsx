import { vi } from 'vitest';

import { render, screen } from '@test/test-utils';

import { DynamicDialogProvider } from '../../context/dynamic-dialog.context';
import { DynamicDialogHeader } from '../dialog-header';

// Mock de useCss
vi.mock('@components/utils/hooks/use-css', () => ({
  useCss: () => ({
    theme: {
      colors: {
        neutralSubdued: '#666',
      },
    },
  }),
}));

// Mock de useTranslation
vi.mock('@components/utils', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe('DynamicDialogHeader - tests', () => {
  const mockContextValue = {
    fullViewport: false,
    draggable: true,
    toggleFullViewport: vi.fn(),
    close: vi.fn(),
    closable: true,
    isMobile: false,
    handleDragStart: vi.fn(),
    resizable: true,
  };

  const defaultProps = {
    title: 'Test Dialog',
    description: 'Test Description',
  };

  const renderWithContext = (props = {}) => {
    return render(
      <DynamicDialogProvider value={mockContextValue}>
        <DynamicDialogHeader
          {...defaultProps}
          {...props}
        />
      </DynamicDialogProvider>,
    );
  };

  it('renders correctly with title and description', () => {
    renderWithContext();

    expect(screen.getByText('Test Dialog')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    renderWithContext({ className: 'custom-class' });

    const header = screen.getByTestId('dynamic-dialog-header');

    expect(header).toHaveClass('custom-class');
  });

  it('does not render drag handle when in full viewport', () => {
    const fullViewportContext = { ...mockContextValue, fullViewport: true };

    render(
      <DynamicDialogProvider value={fullViewportContext}>
        <DynamicDialogHeader {...defaultProps} />
      </DynamicDialogProvider>,
    );

    expect(screen.queryByTestId('drag-handle')).not.toBeInTheDocument();
  });

  it('does not render drag handle when on mobile', () => {
    const mobileContext = { ...mockContextValue, isMobile: true };

    render(
      <DynamicDialogProvider value={mobileContext}>
        <DynamicDialogHeader {...defaultProps} />
      </DynamicDialogProvider>,
    );

    expect(screen.queryByTestId('drag-handle')).not.toBeInTheDocument();
  });
});
