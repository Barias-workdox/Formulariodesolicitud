import { act, renderHook } from '@testing-library/react';

import { useMessageTableHeaderHover } from '../../hooks/use-message-table-header-hover.hook';

describe('useMessageTableHeaderHover - tests', () => {
  test('should return initial hover states as false', () => {
    const { result } = renderHook(() => useMessageTableHeaderHover());

    expect(result.current.isHovered).toBe(false);
  });

  test('should update isHovered when setIsHeaderHovered is called', () => {
    const { result } = renderHook(() => useMessageTableHeaderHover());

    act(() => {
      result.current.setIsHeaderHovered(true);
    });

    expect(result.current.isHovered).toBe(true);

    act(() => {
      result.current.setIsHeaderHovered(false);
    });

    expect(result.current.isHovered).toBe(false);
  });

  test('should update isHovered when setIsTableMenuHovered is called', () => {
    const { result } = renderHook(() => useMessageTableHeaderHover());

    act(() => {
      result.current.setIsTableMenuHovered(true);
    });

    expect(result.current.isHovered).toBe(true);

    act(() => {
      result.current.setIsTableMenuHovered(false);
    });

    expect(result.current.isHovered).toBe(false);
  });

  test('should update isHovered when both setIsHeaderHovered and setIsTableMenuHovered are called', () => {
    const { result } = renderHook(() => useMessageTableHeaderHover());

    act(() => {
      result.current.setIsHeaderHovered(true);
    });

    expect(result.current.isHovered).toBe(true);

    act(() => {
      result.current.setIsTableMenuHovered(true);
    });

    expect(result.current.isHovered).toBe(true);

    act(() => {
      result.current.setIsHeaderHovered(false);
    });

    expect(result.current.isHovered).toBe(true);

    act(() => {
      result.current.setIsTableMenuHovered(false);
    });

    expect(result.current.isHovered).toBe(false);
  });
});
