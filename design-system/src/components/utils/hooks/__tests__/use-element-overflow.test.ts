import { act, renderHook, testHelpers } from '@test/test-utils';

import { ELEMENT_OVERFLOW_DEBOUNCE_DELAY, useElementOverflow } from '../use-element-overflow';

describe('useElementOverflow', () => {
  beforeEach(() => {
    testHelpers.useFakeTimers();
  });

  afterEach(() => {
    testHelpers.useRealTimers();
    testHelpers.clearAllMocks();
  });

  it('should return false when content does not overflow', () => {
    const ref = { current: document.createElement('div') };

    Object.defineProperty(ref.current, 'scrollHeight', { value: 50 });
    testHelpers
      .spyOn(window, 'getComputedStyle')
      .mockReturnValue({ lineHeight: '20px' } as CSSStyleDeclaration);

    const { result } = renderHook(() => useElementOverflow({ ref, maxLines: 3 }));

    expect(result.current.isOverflowing).toBe(false);
  });

  it('should return true when content overflows', () => {
    const ref = { current: document.createElement('div') };

    Object.defineProperty(ref.current, 'scrollHeight', { value: 100 });
    Object.defineProperty(ref.current, 'clientHeight', { value: 50 });
    testHelpers
      .spyOn(window, 'getComputedStyle')
      .mockReturnValue({ lineHeight: '20px' } as CSSStyleDeclaration);

    const { result } = renderHook(() => useElementOverflow({ ref, maxLines: 2 }));

    act(() => {
      // Advance timers by the debounce delay (200ms)
      testHelpers.advanceTimersByTime(ELEMENT_OVERFLOW_DEBOUNCE_DELAY);
    });

    expect(result.current.isOverflowing).toBe(true);
  });

  it('should handle ResizeObserver not supported', () => {
    const ref = { current: document.createElement('div') };

    Object.defineProperty(ref.current, 'scrollHeight', { value: 100 });
    testHelpers
      .spyOn(window, 'getComputedStyle')
      .mockReturnValue({ lineHeight: '20px' } as CSSStyleDeclaration);

    const originalResizeObserver = global.ResizeObserver;

    global.ResizeObserver = undefined;

    const { result } = renderHook(() => useElementOverflow({ ref, maxLines: 3 }));

    expect(result.current.isOverflowing).toBe(true);

    global.ResizeObserver = originalResizeObserver;
  });
});
