import { renderHook } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

import { useDynamicSizing } from '../use-dynamic-sizing.hook';

describe('useDynamicSizing hook - tests', () => {
  beforeEach(() => {
    // Mock window dimensions
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 1200,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      value: 800,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should use full viewport dimensions when fullViewport is true', () => {
    const { result } = renderHook(() =>
      useDynamicSizing({
        fullViewport: true,
        isMobile: false,
      }),
    );

    expect(result.current.width).toBe(1200);
    expect(result.current.height).toBe(800);
  });

  it('should use mobile dimensions when isMobile is true', () => {
    const { result } = renderHook(() =>
      useDynamicSizing({
        fullViewport: false,
        isMobile: true,
        initialHeight: 600,
      }),
    );

    expect(result.current.width).toBe(1200);
    expect(result.current.height).toBe(600); // 90% of 800 = 720, but limited by initialHeight
  });

  it('should use desktop dimensions with defaults', () => {
    const { result } = renderHook(() =>
      useDynamicSizing({
        fullViewport: false,
        isMobile: false,
      }),
    );

    // Default values: width=500, height=700, minWidth=300, minHeight=200
    // viewport: 1200x800, so adjusted: width=500, height=700
    expect(result.current.width).toBe(500);
    expect(result.current.height).toBe(700);
  });

  it('should respect minimum dimensions when viewport is small', () => {
    // Mock smaller viewport to trigger minimum dimensions
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 400,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      value: 300,
    });

    const { result } = renderHook(() =>
      useDynamicSizing({
        fullViewport: false,
        isMobile: false,
        minWidth: 500,
        minHeight: 400,
      }),
    );

    // With small viewport (400x300) and minWidth=500, minHeight=400
    // Math.max(500, Math.min(400-32, 500)) = Math.max(500, 368) = 500
    // Math.max(400, Math.min(300-32, 700)) = Math.max(400, 268) = 400
    expect(result.current.width).toBe(500);
    expect(result.current.height).toBe(400);
  });

  it('should use custom initial dimensions', () => {
    const { result } = renderHook(() =>
      useDynamicSizing({
        fullViewport: false,
        isMobile: false,
        initialWidth: 800,
        initialHeight: 600,
      }),
    );

    // Custom initial: width=800, height=600
    // viewport: 1200x800, so adjusted: width=800, height=600
    expect(result.current.width).toBe(800);
    expect(result.current.height).toBe(600);
  });
});
