import { renderHook } from '@testing-library/react';

import { defaultContext, useMessageBoxContext } from '../../hooks';
import { MessageBoxProvider } from '../../providers';

describe('useMessageBoxContext', () => {
  it('should return the context value correctly', () => {
    const { result } = renderHook(useMessageBoxContext, { wrapper: MessageBoxProvider });

    expect(result.current).toBeDefined();
    expect(result.current).toEqual({
      disabled: false,
      editorContentNode: expect.anything(),
      handleSubmit: expect.any(Function),
      isEmpty: true,
      isFocused: false,
      isHovered: false,
      setIsFocused: expect.any(Function),
      setIsHovered: expect.any(Function),
      textValue: '',
      HTMLValue: expect.any(String),
    });
  });

  it('should return the default context value when the context is not provided', () => {
    const { result } = renderHook(useMessageBoxContext);

    expect(result.current).toEqual(defaultContext);
  });
});
