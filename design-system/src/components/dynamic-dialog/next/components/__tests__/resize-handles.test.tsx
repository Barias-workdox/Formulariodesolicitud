import { useRef } from 'react';

import { vi } from 'vitest';

import { render, screen } from '@test/test-utils';

import { ResizeHandles } from '../resize-handles';

// Mock del hook useResizableElement
vi.mock('@hooks/use-resizable-element/use-resizable-element.hook', () => ({
  useResizableElement: () => ({
    handleResize: vi.fn(),
  }),
}));

describe('ResizeHandles - tests', () => {
  const TestComponent = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return <ResizeHandles containerRef={containerRef} />;
  };

  it('renders all resize handles when not disabled', () => {
    render(<TestComponent />);

    // Edge handles
    expect(screen.getByTestId('left-handle')).toBeInTheDocument();
    expect(screen.getByTestId('right-handle')).toBeInTheDocument();
    expect(screen.getByTestId('top-handle')).toBeInTheDocument();
    expect(screen.getByTestId('bottom-handle')).toBeInTheDocument();

    // Corner handles
    expect(screen.getByTestId('top-left-corner-handle')).toBeInTheDocument();
    expect(screen.getByTestId('top-right-corner-handle')).toBeInTheDocument();
    expect(screen.getByTestId('bottom-left-corner-handle')).toBeInTheDocument();
    expect(screen.getByTestId('bottom-right-corner-handle')).toBeInTheDocument();
  });

  it('does not render when disabled', () => {
    const TestComponentDisabled = () => {
      const containerRef = useRef<HTMLDivElement>(null);

      return (
        <ResizeHandles
          containerRef={containerRef}
          disabled={true}
        />
      );
    };

    render(<TestComponentDisabled />);

    expect(screen.queryByTestId('left-handle')).not.toBeInTheDocument();
    expect(screen.queryByTestId('right-handle')).not.toBeInTheDocument();
    expect(screen.queryByTestId('top-handle')).not.toBeInTheDocument();
    expect(screen.queryByTestId('bottom-handle')).not.toBeInTheDocument();
  });

  it('renders with default disabled value', () => {
    const TestComponentDefault = () => {
      const containerRef = useRef<HTMLDivElement>(null);

      return <ResizeHandles containerRef={containerRef} />;
    };

    render(<TestComponentDefault />);

    expect(screen.getByTestId('left-handle')).toBeInTheDocument();
    expect(screen.getByTestId('right-handle')).toBeInTheDocument();
  });

  it('has correct data-testid attributes', () => {
    render(<TestComponent />);

    const handles = [
      'left-handle',
      'right-handle',
      'top-handle',
      'bottom-handle',
      'top-left-corner-handle',
      'top-right-corner-handle',
      'bottom-left-corner-handle',
      'bottom-right-corner-handle',
    ];

    handles.forEach((testId) => {
      expect(screen.getByTestId(testId)).toBeInTheDocument();
    });
  });
});
