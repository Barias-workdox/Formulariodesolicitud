import { RESIZE_DIRECTIONS } from '@constants/resizable-element.constants';
import { calculateNewDimensions } from '@hooks/use-resizable-element/utils/calculate-new-dimensions.util';

import type { ResizeData } from '@interfaces/resizable-element.interfaces';

describe('calculateNewDimensions - tests', () => {
  const mockElement = document.createElement('div');

  mockElement.style.minWidth = '100px';
  mockElement.style.maxWidth = '500px';
  mockElement.style.minHeight = '100px';
  mockElement.style.maxHeight = '500px';

  const defaultResizeData: ResizeData = {
    initialX: 0,
    initialY: 0,
    initialWidth: 200,
    initialHeight: 150,
    initialLeft: 50,
    initialTop: 100,
    direction: [RESIZE_DIRECTIONS.RIGHT],
  };

  it('should correctly calculate new dimensions and position for resizing right', () => {
    const result = calculateNewDimensions({
      element: mockElement,
      data: defaultResizeData,
      deltaX: 100,
      deltaY: 0,
    });

    expect(result.width).toBe(300);
    expect(result.height).toBe(150);
    expect(result.left).toBe(50);
    expect(result.top).toBe(100);
  });

  it('should correctly calculate new dimensions and position for resizing left', () => {
    const result = calculateNewDimensions({
      element: mockElement,
      data: { ...defaultResizeData, direction: [RESIZE_DIRECTIONS.LEFT] },
      deltaX: 50,
      deltaY: 0,
    });

    expect(result.width).toBe(150);
    expect(result.height).toBe(150);
    expect(result.left).toBe(100);
    expect(result.top).toBe(100);
  });

  it('should correctly calculate new dimensions and position for resizing bottom', () => {
    const result = calculateNewDimensions({
      element: mockElement,
      data: { ...defaultResizeData, direction: [RESIZE_DIRECTIONS.BOTTOM] },
      deltaX: 0,
      deltaY: 100,
    });

    expect(result.width).toBe(200); // No change in width for bottom resizing
    expect(result.height).toBe(250); // Increased height by deltaY
    expect(result.left).toBe(50); // No change in left for vertical resizing
    expect(result.top).toBe(100); // No change in top for bottom resizing
  });

  it('should correctly calculate new dimensions and position for resizing top', () => {
    const result = calculateNewDimensions({
      element: mockElement,
      data: { ...defaultResizeData, direction: [RESIZE_DIRECTIONS.TOP] },
      deltaX: 0,
      deltaY: 50,
    });

    expect(result.width).toBe(200);
    expect(result.height).toBe(100);
    expect(result.left).toBe(50);
    expect(result.top).toBe(150);
  });
});
