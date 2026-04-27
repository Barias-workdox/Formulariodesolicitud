import { renderHook } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { useDialogResize } from '../use-dialog-resize.hook';

describe('useDialogResize hook - tests', () => {
  it('should show resize handles when all conditions are met', () => {
    const { result } = renderHook(() => useDialogResize(true, false, false));

    expect(result.current.shouldShowResizeHandles).toBe(true);
  });

  it('should hide resize handles when not resizable', () => {
    const { result } = renderHook(() => useDialogResize(false, false, false));

    expect(result.current.shouldShowResizeHandles).toBe(false);
  });

  it('should hide resize handles when in full viewport', () => {
    const { result } = renderHook(() => useDialogResize(true, true, false));

    expect(result.current.shouldShowResizeHandles).toBe(false);
  });

  it('should hide resize handles when on mobile', () => {
    const { result } = renderHook(() => useDialogResize(true, false, true));

    expect(result.current.shouldShowResizeHandles).toBe(false);
  });

  it('should hide resize handles when multiple conditions are false', () => {
    const { result } = renderHook(() => useDialogResize(false, true, true));

    expect(result.current.shouldShowResizeHandles).toBe(false);
  });
});
