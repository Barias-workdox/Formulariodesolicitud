import { useRef } from 'react';

import { vi } from 'vitest';

import { useDraggableElement } from '@hooks/use-draggable-element.hook';
import { fireEvent, render, screen } from '@test/test-utils';

const TestComponent = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  const { handlePointerDown } = useDraggableElement({
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
        onPointerDown={handlePointerDown}
      >
        Handler
      </button>
    </div>
  );
};

describe('useDraggableElement - tests', () => {
  it('should start dragging and attach event listeners on handlePointerDown', () => {
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
