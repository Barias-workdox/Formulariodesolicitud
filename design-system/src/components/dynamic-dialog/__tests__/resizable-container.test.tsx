import { RESIZE_DIRECTIONS } from '@constants/resizable-element.constants';
import { fireEvent, render, screen } from '@test/test-utils';

import { ResizableContainer } from '../components/resizable-container';
import { fullViewportStyles } from '../dynamic-dialog.styles';

import type { ResizableContainerProps } from '../components/resizable-container';
import type { RenderType } from '@test/test-utils';

const handlePointerDownMock = vi.fn();
const handleResizeMock = vi.fn();
const baseTestId = 'resizable-container';

vi.mock('@hooks/use-draggable-element.hook', () => ({
  useDraggableElement: vi.fn(() => ({ handlePointerDown: handlePointerDownMock })),
}));

vi.mock('@hooks/use-resizable-element/use-resizable-element.hook', () => ({
  useResizableElement: vi.fn(() => ({ handleResize: handleResizeMock })),
}));

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props: Partial<ResizableContainerProps> = {}): RenderType =>
  render(
    <ResizableContainer
      {...props}
      data-testid={baseTestId}
    >
      <div>Resizable Container Children</div>
    </ResizableContainer>,
  );

beforeEach(() => {
  vi.clearAllMocks();
});

describe('ResizableContainer - tests', () => {
  it('should render children correctly', () => {
    renderComponent();

    expect(screen.getByText('Resizable Container Children')).toBeInTheDocument();
  });

  it('should render children correctly when `fullViewport` is `true`', () => {
    renderComponent({ fullViewport: true });

    const container = screen.getByTestId(baseTestId);

    expect(container).toHaveStyle(fullViewportStyles as Record<string, string>);
  });

  it('should call handlePointerDown when drag handler is clicked', () => {
    renderComponent();

    const dragHandler = screen.getByTestId('drag-handler');

    fireEvent.pointerDown(dragHandler);

    expect(handlePointerDownMock).toHaveBeenCalled();
  });

  it('should call handleResize when resize handles are clicked', () => {
    renderComponent();

    const leftHandle = screen.getByTestId('left-handle');

    fireEvent.pointerDown(leftHandle);

    const rightHandle = screen.getByTestId('right-handle');

    fireEvent.pointerDown(rightHandle);

    const topHandle = screen.getByTestId('top-handle');

    fireEvent.pointerDown(topHandle);

    const bottomHandle = screen.getByTestId('bottom-handle');

    fireEvent.pointerDown(bottomHandle);

    expect(handleResizeMock).toHaveBeenCalledTimes(4);
    expect(handleResizeMock).toHaveBeenCalledWith(
      expect.anything(),
      expect.arrayContaining([RESIZE_DIRECTIONS.LEFT]),
    );
    expect(handleResizeMock).toHaveBeenCalledWith(
      expect.anything(),
      expect.arrayContaining([RESIZE_DIRECTIONS.RIGHT]),
    );
    expect(handleResizeMock).toHaveBeenCalledWith(
      expect.anything(),
      expect.arrayContaining([RESIZE_DIRECTIONS.TOP]),
    );
    expect(handleResizeMock).toHaveBeenCalledWith(
      expect.anything(),
      expect.arrayContaining([RESIZE_DIRECTIONS.BOTTOM]),
    );
  });

  it('should call handleResize with the correct direction for corner handles', () => {
    renderComponent();

    const topLeftCornerHandle = screen.getByTestId('top-left-corner-handle');

    fireEvent.pointerDown(topLeftCornerHandle);

    const topRightCornerHandle = screen.getByTestId('top-right-corner-handle');

    fireEvent.pointerDown(topRightCornerHandle);

    const bottomRightCornerHandle = screen.getByTestId('bottom-right-corner-handle');

    fireEvent.pointerDown(bottomRightCornerHandle);

    const bottomLeftCornerHandle = screen.getByTestId('bottom-left-corner-handle');

    fireEvent.pointerDown(bottomLeftCornerHandle);

    expect(handleResizeMock).toHaveBeenCalledTimes(4);
    expect(handleResizeMock).toHaveBeenCalledWith(
      expect.anything(),
      expect.arrayContaining([RESIZE_DIRECTIONS.TOP, RESIZE_DIRECTIONS.LEFT]),
    );
    expect(handleResizeMock).toHaveBeenCalledWith(
      expect.anything(),
      expect.arrayContaining([RESIZE_DIRECTIONS.TOP, RESIZE_DIRECTIONS.RIGHT]),
    );
    expect(handleResizeMock).toHaveBeenCalledWith(
      expect.anything(),
      expect.arrayContaining([RESIZE_DIRECTIONS.BOTTOM, RESIZE_DIRECTIONS.RIGHT]),
    );
    expect(handleResizeMock).toHaveBeenCalledWith(
      expect.anything(),
      expect.arrayContaining([RESIZE_DIRECTIONS.BOTTOM, RESIZE_DIRECTIONS.LEFT]),
    );
  });
});
