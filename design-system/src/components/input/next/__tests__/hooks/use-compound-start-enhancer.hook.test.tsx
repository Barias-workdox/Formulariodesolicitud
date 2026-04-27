import { isValidElement } from 'react';

import { renderHook } from '@test/test-utils';

import { sharedPropsMock } from '../../__mocks__/shared-props.mock';
import { useCompoundStartEnhancer } from '../../hooks/use-compound-start-enhancer.hook';

describe('useCompoundStartEnhancer', () => {
  it('should return the correct values', () => {
    const { result } = renderHook(() => useCompoundStartEnhancer({}));

    expect(result.current).toEqual({
      showStartEnhancer: false,
      getStartEnhancerElement: expect.any(Function),
    });
    expect(isValidElement(result.current.getStartEnhancerElement(sharedPropsMock))).toBe(true);
  });

  it('should return showStartEnhancer as true when leading is defined', () => {
    const { result } = renderHook(() => useCompoundStartEnhancer({ leading: <div>Test</div> }));

    expect(result.current).toEqual({
      showStartEnhancer: true,
      getStartEnhancerElement: expect.any(Function),
    });
  });

  it('should return showStartEnhancer as true when prefixText is defined', () => {
    const { result } = renderHook(() => useCompoundStartEnhancer({ prefixText: 'Test' }));

    expect(result.current).toEqual({
      showStartEnhancer: true,
      getStartEnhancerElement: expect.any(Function),
    });
  });

  it('should return showStartEnhancer as true when startEnhancer is defined', () => {
    const { result } = renderHook(() =>
      useCompoundStartEnhancer({ startEnhancer: <div>Test</div> }),
    );

    expect(result.current).toEqual({
      showStartEnhancer: true,
      getStartEnhancerElement: expect.any(Function),
    });
  });
});
