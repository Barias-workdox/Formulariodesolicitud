import { isValidElement } from 'react';

import { renderHook } from '@test/test-utils';

import { sharedPropsMock } from '../../__mocks__/shared-props.mock';
import { useCompoundEndEnhancer } from '../../hooks/use-compound-end-enhancer.hook';

describe('useCompoundEndEnhancer', () => {
  it('should return the correct values', () => {
    const { result } = renderHook(() => useCompoundEndEnhancer({}));

    expect(result.current).toEqual({
      showEndEnhancer: false,
      getEndEnhancerElement: expect.any(Function),
    });
    expect(isValidElement(result.current.getEndEnhancerElement(sharedPropsMock))).toBe(true);
  });

  it('should return showEndEnhancer as true when clearable is true', () => {
    const { result } = renderHook(() => useCompoundEndEnhancer({ clearable: true, value: 'Test' }));

    expect(result.current).toEqual({
      showEndEnhancer: true,
      getEndEnhancerElement: expect.any(Function),
    });
  });

  it('should return showEndEnhancer as true when showCopyContentButton is true', () => {
    const { result } = renderHook(() =>
      useCompoundEndEnhancer({ showCopyContentButton: true, value: 'Test' }),
    );

    expect(result.current).toEqual({
      showEndEnhancer: true,
      getEndEnhancerElement: expect.any(Function),
    });
  });

  it('should return showEndEnhancer as true when isLoading is true', () => {
    const { result } = renderHook(() => useCompoundEndEnhancer({ isLoading: true }));

    expect(result.current).toEqual({
      showEndEnhancer: true,
      getEndEnhancerElement: expect.any(Function),
    });
  });

  it('should return showEndEnhancer as true when endEnhancer is defined', () => {
    const { result } = renderHook(() => useCompoundEndEnhancer({ endEnhancer: <div>Test</div> }));

    expect(result.current).toEqual({
      showEndEnhancer: true,
      getEndEnhancerElement: expect.any(Function),
    });
  });

  it('should return showEndEnhancer as true when error is true', () => {
    const { result } = renderHook(() => useCompoundEndEnhancer({ error: true }));

    expect(result.current).toEqual({
      showEndEnhancer: true,
      getEndEnhancerElement: expect.any(Function),
    });
  });

  it('should return showEndEnhancer as true when positive is true', () => {
    const { result } = renderHook(() => useCompoundEndEnhancer({ positive: true }));

    expect(result.current).toEqual({
      showEndEnhancer: true,
      getEndEnhancerElement: expect.any(Function),
    });
  });
});
