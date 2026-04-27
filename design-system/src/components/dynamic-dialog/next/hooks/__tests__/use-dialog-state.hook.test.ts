import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { useDialogState } from '../use-dialog-state.hook';

describe('useDialogState hook - tests', () => {
  it('should use controlled full viewport when provided', () => {
    const { result } = renderHook(() =>
      useDialogState({
        fullViewport: true,
        onClose: vi.fn(),
        onFullViewportChange: vi.fn(),
      }),
    );

    expect(result.current.fullViewport).toBe(true);
  });

  it('should use internal full viewport when controlled is undefined', () => {
    const { result } = renderHook(() =>
      useDialogState({
        fullViewport: undefined,
        onClose: vi.fn(),
        onFullViewportChange: vi.fn(),
      }),
    );

    expect(result.current.fullViewport).toBe(false);
  });

  it('should call onClose when close is called', () => {
    const onClose = vi.fn();
    const { result } = renderHook(() =>
      useDialogState({
        fullViewport: false,
        onClose,
        onFullViewportChange: vi.fn(),
      }),
    );

    act(() => {
      result.current.close();
    });

    expect(onClose).toHaveBeenCalled();
  });

  it('should update internal full viewport when controlled is undefined', () => {
    const onFullViewportChange = vi.fn();
    const { result } = renderHook(() =>
      useDialogState({
        fullViewport: undefined,
        onClose: vi.fn(),
        onFullViewportChange,
      }),
    );

    act(() => {
      result.current.updateFullViewport(true);
    });

    expect(result.current.fullViewport).toBe(true);
    expect(onFullViewportChange).toHaveBeenCalledWith(true);
  });

  it('should not update internal full viewport when controlled', () => {
    const onFullViewportChange = vi.fn();
    const { result } = renderHook(() =>
      useDialogState({
        fullViewport: false,
        onClose: vi.fn(),
        onFullViewportChange,
      }),
    );

    act(() => {
      result.current.updateFullViewport(true);
    });

    expect(result.current.fullViewport).toBe(false);
    expect(onFullViewportChange).toHaveBeenCalledWith(true);
  });
});
