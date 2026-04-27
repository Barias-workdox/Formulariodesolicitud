import { renderHook } from '@testing-library/react';

import { useTextEditorToolbar } from '../../hooks';
import { MessageBoxProvider } from '../../providers';

describe('useTextEditorToolbar', () => {
  it('should return the correct values', () => {
    const { result } = renderHook(useTextEditorToolbar, { wrapper: MessageBoxProvider });

    expect(result.current).toBeDefined();
    expect(result.current).toEqual({
      canBold: false,
      canItalic: false,
      canUnderline: false,
      disabled: false,
      handleBold: expect.any(Function),
      handleItalic: expect.any(Function),
      handleUnderline: expect.any(Function),
      isBold: false,
      isItalic: false,
      isUnderline: false,
    });
  });

  it('should return the correct values when richTextEnabled is true', () => {
    const { result } = renderHook(useTextEditorToolbar, {
      wrapper: ({ children }) => (
        <MessageBoxProvider richTextEnabled>{children}</MessageBoxProvider>
      ),
    });

    expect(result.current).toBeDefined();

    expect(result.current).toEqual({
      canBold: true,
      canItalic: true,
      canUnderline: true,
      disabled: false,
      handleBold: expect.any(Function),
      handleItalic: expect.any(Function),
      handleUnderline: expect.any(Function),
      isBold: false,
      isItalic: false,
      isUnderline: false,
    });
  });
});
