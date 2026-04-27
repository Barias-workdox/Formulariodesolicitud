import { afterEach, describe, expect, it, render, screen, testHelpers } from '@test/test-utils';

import { DropPlaceholder } from '../drop-placeholder';

import type { DroppableProvided } from '@hello-pangea/dnd';

describe('DropPlaceholder', () => {
  const containerRef = { current: document.createElement('div') };
  const listRef = { current: document.createElement('div') };
  const sourceIndex = 2;
  const destinationIndex = 4;
  const dropProvided: DroppableProvided = {
    placeholder: <div />,
    innerRef(): void {
      return;
    },
    droppableProps: { 'data-rbd-droppable-context-id': '', 'data-rbd-droppable-id': '' },
  };

  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('renders the placeholder element', () => {
    render(
      <DropPlaceholder
        containerRef={containerRef}
        listRef={listRef}
        sourceIndex={sourceIndex}
        destinationIndex={destinationIndex}
        dropProvided={dropProvided}
      />,
    );

    const placeholderElement = screen.getByTestId('data-table__drop--placeholder');

    expect(placeholderElement).toBeInTheDocument();
  });

  it('does not render the drop placeholder when sourceIndex or destinationIndex is undefined', () => {
    render(
      <DropPlaceholder
        containerRef={containerRef}
        listRef={listRef}
        sourceIndex={undefined}
        destinationIndex={destinationIndex}
        dropProvided={dropProvided}
      />,
    );

    const placeholderElement = screen.queryByTestId('data-table__drop--placeholder');

    expect(placeholderElement).toBeNull();
  });

  it('cleans up event listeners on unmount', () => {
    const removeEventListener = testHelpers.fn();

    // Mock window.removeEventListener and containerRef.current.removeEventListener
    window.removeEventListener = removeEventListener;
    containerRef.current.removeEventListener = removeEventListener;

    const { unmount } = render(
      <DropPlaceholder
        containerRef={containerRef}
        listRef={listRef}
        sourceIndex={sourceIndex}
        destinationIndex={destinationIndex}
        dropProvided={dropProvided}
      />,
    );

    unmount();

    expect(removeEventListener).toHaveBeenCalled(); // Check that event listeners are removed
  });
});
