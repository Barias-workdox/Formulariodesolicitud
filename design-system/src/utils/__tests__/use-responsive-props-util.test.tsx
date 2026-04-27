import { renderHook } from '@testing-library/react';

import { mockUseMedia } from '@test/__mocks__/use-media.mock';
import { mediaQueries } from '@tokens/breakpoints';
import { useResponsiveProps } from '@utils/use-responsive-props.util';

describe('useResponsiveProps - test', () => {
  const values = {
    extralarge: 'Extra Large Value',
    large: 'Large Value',
    medium: 'Medium Value',
    small: 'Small Value',
    extrasmall: 'Extra Small Value',
  };

  it('should return the extralarge value when the screen is extralarge', () => {
    mockUseMedia({
      [mediaQueries.extralarge]: true,
    });

    const { result } = renderHook(() => useResponsiveProps(values));

    expect(result.current).toBe('Extra Large Value');
  });

  it('should return the large value when the screen is large', () => {
    mockUseMedia({
      [mediaQueries.large]: true,
    });

    const { result } = renderHook(() => useResponsiveProps(values));

    expect(result.current).toBe('Large Value');
  });

  it('should return the medium value when the screen is medium', () => {
    mockUseMedia({
      [mediaQueries.medium]: true,
    });

    const { result } = renderHook(() => useResponsiveProps(values));

    expect(result.current).toBe('Medium Value');
  });

  it('should return the small value when the screen is small', () => {
    mockUseMedia({
      [mediaQueries.small]: true,
    });

    const { result } = renderHook(() => useResponsiveProps(values));

    expect(result.current).toBe('Small Value');
  });

  it('should return extrasmall value as fallback when no media query matches', () => {
    mockUseMedia({});

    const { result } = renderHook(() => useResponsiveProps(values));

    expect(result.current).toBe('Extra Small Value');
  });
});
