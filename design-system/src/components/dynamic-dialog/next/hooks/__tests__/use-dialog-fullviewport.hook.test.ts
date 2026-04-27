import { act, renderHook } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';

import { useDialogFullViewport } from '../use-dialog-fullviewport.hook';

describe('useDialogFullViewport hook - tests', () => {
  let mockElement: HTMLDivElement;

  beforeEach(() => {
    vi.clearAllMocks();

    // Create a mock element
    mockElement = document.createElement('div');

    // Mock console.warn
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  it('should initialize with correct default values', () => {
    const { result } = renderHook(() =>
      useDialogFullViewport({
        fullViewport: false,
      }),
    );

    expect(result.current.containerRef.current).toBeNull();
  });

  it('should apply full viewport styles when fullViewport is true', () => {
    const { result, rerender } = renderHook(
      ({ fullViewport }) =>
        useDialogFullViewport({
          fullViewport,
        }),
      {
        initialProps: { fullViewport: false },
      },
    );

    // Assign element to ref
    act(() => {
      Object.defineProperty(result.current.containerRef, 'current', {
        writable: true,
        value: mockElement,
      });
    });

    // Change to fullViewport: true to trigger the styles
    rerender({ fullViewport: true });

    // Check that full viewport styles are applied
    expect(mockElement.style.position).toBe('fixed');
    expect(mockElement.style.top).toBe('0px');
    expect(mockElement.style.left).toBe('0px');
    expect(mockElement.style.width).toBe('100vw');
    expect(mockElement.style.height).toBe('100vh');
    expect(mockElement.style.zIndex).toBe('9999');
    expect(mockElement.style.margin).toBe('0px');
    expect(mockElement.style.transform).toBe('none');
  });

  it('should remove full viewport styles when fullViewport is false', () => {
    const { result, rerender } = renderHook(
      ({ fullViewport }) =>
        useDialogFullViewport({
          fullViewport,
        }),
      {
        initialProps: { fullViewport: false },
      },
    );

    // Assign element to ref
    act(() => {
      Object.defineProperty(result.current.containerRef, 'current', {
        writable: true,
        value: mockElement,
      });
    });

    // First apply styles by setting fullViewport to true
    rerender({ fullViewport: true });

    // Should have full viewport styles
    expect(mockElement.style.position).toBe('fixed');
    expect(mockElement.style.width).toBe('100vw');

    // Now remove styles by setting fullViewport to false
    rerender({ fullViewport: false });

    // Check that styles are removed
    expect(mockElement.style.position).toBe('');
    expect(mockElement.style.top).toBe('');
    expect(mockElement.style.left).toBe('');
    expect(mockElement.style.width).toBe('');
    expect(mockElement.style.height).toBe('');
    expect(mockElement.style.zIndex).toBe('');
    expect(mockElement.style.margin).toBe('');
    expect(mockElement.style.transform).toBe('');
  });

  it('should apply styles when fullViewport prop changes from false to true', () => {
    const { result, rerender } = renderHook(
      ({ fullViewport }) =>
        useDialogFullViewport({
          fullViewport,
        }),
      {
        initialProps: { fullViewport: false },
      },
    );

    // Assign element to ref
    act(() => {
      Object.defineProperty(result.current.containerRef, 'current', {
        writable: true,
        value: mockElement,
      });
    });

    // Force re-render to apply initial state (false)
    rerender({ fullViewport: false });

    // Initially should not have full viewport styles
    expect(mockElement.style.position).toBe('');

    // Change prop to true
    rerender({ fullViewport: true });

    // Should now have full viewport styles
    expect(mockElement.style.position).toBe('fixed');
    expect(mockElement.style.width).toBe('100vw');
    expect(mockElement.style.height).toBe('100vh');
  });

  it('should handle missing container ref gracefully', () => {
    const { rerender } = renderHook(
      ({ fullViewport }) =>
        useDialogFullViewport({
          fullViewport,
        }),
      {
        initialProps: { fullViewport: false },
      },
    );

    // Change to true without setting ref - should not throw
    expect(() => {
      rerender({ fullViewport: true });
    }).not.toThrow();
  });

  it('should handle multiple state changes correctly', () => {
    const { result, rerender } = renderHook(
      ({ fullViewport }) =>
        useDialogFullViewport({
          fullViewport,
        }),
      {
        initialProps: { fullViewport: false },
      },
    );

    // Assign element to ref
    act(() => {
      Object.defineProperty(result.current.containerRef, 'current', {
        writable: true,
        value: mockElement,
      });
    });

    // Initially false
    expect(mockElement.style.position).toBe('');

    // Change to true
    rerender({ fullViewport: true });
    expect(mockElement.style.position).toBe('fixed');

    // Change back to false
    rerender({ fullViewport: false });
    expect(mockElement.style.position).toBe('');

    // Change to true again
    rerender({ fullViewport: true });
    expect(mockElement.style.position).toBe('fixed');
  });
});
