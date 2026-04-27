import { useRef } from 'react';

import { vi } from 'vitest';

import { useResizableElement } from '@hooks/use-resizable-element/use-resizable-element.hook';
import { fireEvent, render, screen } from '@test/test-utils';

const TestComponent = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  const { handleResize } = useResizableElement({
    elementRef: rootRef,
    margin: 16,
  });

  return (
    <div
      ref={rootRef}
      data-testid="draggable-element"
    >
      <button
        data-testid="handler-element"
        onPointerDown={(event) => handleResize(event, ['top'])}
      >
        Handler
      </button>
    </div>
  );
};

describe('useResizableElement - tests', () => {
  it('should start dragging and attach event listeners on handleResize', () => {
    const addEventListenerSpy = vi.spyOn(document, 'addEventListener');

    render(<TestComponent />);

    const handlerElement = screen.getByTestId('handler-element');

    fireEvent.pointerDown(handlerElement, {
      clientX: 100,
      clientY: 100,
    });

    expect(addEventListenerSpy).toHaveBeenCalledWith('pointermove', expect.any(Function));
    expect(addEventListenerSpy).toHaveBeenCalledWith('pointerup', expect.any(Function));
  });
});
