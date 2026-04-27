import { vi } from 'vitest';

import { applyDimensions } from '@utils/styles.utils';

global.requestAnimationFrame = vi.fn().mockImplementation((callback) => callback());

describe('applyDimensions - tests', () => {
  it('should apply the new dimensions and position to the element', () => {
    const element = document.createElement('div');

    element.style.width = '100px';
    element.style.height = '100px';
    element.style.left = '0px';
    element.style.top = '0px';

    const dimensions = {
      width: 200,
      height: 150,
      left: 50,
      top: 100,
    };

    applyDimensions(element, dimensions);

    expect(element.style.width).toBe('200px');
    expect(element.style.height).toBe('150px');
    expect(element.style.left).toBe('50px');
    expect(element.style.top).toBe('100px');
  });
});
