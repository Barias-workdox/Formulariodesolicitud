import { renderHook } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { useDialogPositioning } from '../use-dialog-positioning.hook';

describe('useDialogPositioning hook - tests', () => {
  it('should return empty styles for fullViewport', () => {
    const { result } = renderHook(() =>
      useDialogPositioning({
        placement: 'bottomRight',
        width: 600,
        height: 400,
        fullViewport: true,
        isMobile: false,
      }),
    );

    expect(result.current).toEqual({});
  });

  it('should return empty styles for mobile', () => {
    const { result } = renderHook(() =>
      useDialogPositioning({
        placement: 'bottomRight',
        width: 600,
        height: 400,
        fullViewport: false,
        isMobile: true,
      }),
    );

    expect(result.current).toEqual({});
  });

  it('should position topLeft correctly', () => {
    const { result } = renderHook(() =>
      useDialogPositioning({
        placement: 'topLeft',
        width: 600,
        height: 300,
        fullViewport: false,
        isMobile: false,
      }),
    );

    expect(result.current).toEqual({
      top: 16,
      left: 16,
      right: 'calc(100vw - 600px - 16px)',
      bottom: 'calc(100vh - 300px - 16px)',
    });
  });

  it('should position topRight correctly', () => {
    const { result } = renderHook(() =>
      useDialogPositioning({
        placement: 'topRight',
        width: 600,
        height: 300,
        fullViewport: false,
        isMobile: false,
      }),
    );

    expect(result.current).toEqual({
      top: 16,
      right: 16,
      left: 'calc(100vw - 600px - 16px)',
      bottom: 'calc(100vh - 300px - 16px)',
    });
  });

  it('should position bottomLeft correctly', () => {
    const { result } = renderHook(() =>
      useDialogPositioning({
        placement: 'bottomLeft',
        width: 600,
        height: 300,
        fullViewport: false,
        isMobile: false,
      }),
    );

    expect(result.current).toEqual({
      bottom: 16,
      left: 16,
      top: 'calc(100vh - 300px - 16px)',
      right: 'calc(100vw - 600px - 16px)',
    });
  });

  it('should position bottomRight correctly', () => {
    const { result } = renderHook(() =>
      useDialogPositioning({
        placement: 'bottomRight',
        width: 600,
        height: 300,
        fullViewport: false,
        isMobile: false,
      }),
    );

    expect(result.current).toEqual({
      bottom: 16,
      right: 16,
      top: 'calc(100vh - 300px - 16px)',
      left: 'calc(100vw - 600px - 16px)',
    });
  });

  it('should recalculate when height changes', () => {
    const { result, rerender } = renderHook(
      ({ height }) =>
        useDialogPositioning({
          placement: 'bottomLeft',
          width: 600,
          height,
          fullViewport: false,
          isMobile: false,
        }),
      { initialProps: { height: 300 } },
    );

    expect(result.current.top).toBe('calc(100vh - 300px - 16px)');

    rerender({ height: 500 });

    expect(result.current.top).toBe('calc(100vh - 500px - 16px)');
  });
});
