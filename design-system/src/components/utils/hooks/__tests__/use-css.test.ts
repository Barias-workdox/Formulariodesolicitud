import { vi } from 'vitest';

import { renderHook } from '@test/test-utils';

import { themedUseStyletron } from '../../../../themes/utilities';
import { createThemedUseCss, useCss, useStyleOverrides } from '../use-css';

import type { ButtonOverrides } from 'baseui/button';
import type { Mock } from 'vitest';

vi.mock('../../../../themes/utilities', async () => {
  const originalModule = await vi.importActual('../../../../themes/utilities');

  return {
    ...originalModule,
    themedUseStyletron: vi.fn(),
  };
});

const mockCss = vi.fn((style) => style);
const mockTheme = { colors: { primary: 'blue' } };
const themedUseStyletronMocked = themedUseStyletron as Mock;

describe('useCss', () => {
  beforeEach(() => {
    themedUseStyletronMocked.mockReturnValue([mockCss, mockTheme]);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should return css classes for static styles', () => {
    const styles = {
      button: { color: 'red' },
      text: { fontSize: '14px' },
    };

    const { result } = renderHook(() => useCss(styles));

    expect(result.current.button).toEqual(styles.button);
    expect(result.current.text).toEqual(styles.text);
    expect(result.current.theme).toEqual(mockTheme);
  });

  it('should return css classes for undefined styles', () => {
    const { result } = renderHook(() => useCss());

    expect(result.current.theme).toEqual(mockTheme);
  });

  it('should return css classes for function styles', () => {
    const styles = {
      button: (theme) => ({ color: theme.colors.primary }),
    };

    const { result } = renderHook(() => useCss(styles));

    expect(result.current.button).toEqual({ color: mockTheme.colors.primary });
    expect(result.current.theme).toEqual(mockTheme);
  });

  it('should handle StyleOverrideFunction styles', () => {
    const styles = {
      button: ({ $theme }) => ({ color: $theme.colors.primary }),
    };

    const { result } = renderHook(() => useCss(styles, {}, true));

    expect(result.current.button).toEqual({ color: mockTheme.colors.primary });
    expect(result.current.theme).toEqual(mockTheme);
  });

  it('should pass extraParams to function styles', () => {
    const styles = {
      button: (_, extraParams) => ({ color: extraParams.color }),
    };
    const extraParams = { color: 'green' };

    const { result } = renderHook(() => useCss(styles, extraParams));

    expect(result.current.button).toEqual({ color: extraParams.color });
    expect(result.current.theme).toEqual(mockTheme);
  });
});

describe('useStyleOverrides', () => {
  it('should use useCss with isStylesOverrides as true', () => {
    const buttonOverrides: ButtonOverrides = {
      BaseButton: {
        style: ({ $theme }) => ({ color: $theme.colors.primary }),
      },
    };

    const { result } = renderHook(() =>
      useStyleOverrides({ $styles: { baseStyles: buttonOverrides.BaseButton.style } }),
    );

    expect(result.current.baseStyles).toEqual({ color: mockTheme.colors.primary });
    expect(result.current.theme).toEqual(mockTheme);
  });
});

describe('createThemedUseCss', () => {
  it('should create a hook that uses useCss with the provided theme type', () => {
    const useCustomCss = createThemedUseCss<{ customProperty: string }>();
    const styles = {
      button: { color: 'red' },
    };

    const mockCustomTheme = { colors: { primary: 'blue' }, customProperty: 'value' };

    themedUseStyletronMocked.mockReturnValue([mockCss, mockCustomTheme]);

    const { result } = renderHook(() => useCustomCss(styles));

    expect(result.current.button).toEqual(styles.button);
    expect(result.current.theme).toEqual(mockCustomTheme);
  });
});
