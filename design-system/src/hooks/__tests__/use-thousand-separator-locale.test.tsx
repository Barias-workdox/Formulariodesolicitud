import { LocaleProvider } from '@contexts/locale-provider';
import { useThousandSeparatorLocale } from '@hooks/use-thousand-separator-locale';
import { mockI18nextInit, renderHook } from '@test/test-utils';

const value = 1000;

mockI18nextInit();

describe('useThousandSeparatorLocale', () => {
  it('should use the "." (dot) separator for "es" locale', () => {
    const {
      result: { current },
    } = renderHook(() => useThousandSeparatorLocale(value), {
      wrapper: ({ children }) => <LocaleProvider locale="es">{children}</LocaleProvider>,
    });

    expect(current).toBe('1.000');
  });

  it('should use the "," (comma) separator for "en" locale', () => {
    const {
      result: { current },
    } = renderHook(() => useThousandSeparatorLocale(value), {
      wrapper: ({ children }) => <LocaleProvider locale="en">{children}</LocaleProvider>,
    });

    expect(current).toBe('1,000');
  });

  it('should use the "." (dot) separator for "pt" locale', () => {
    const {
      result: { current },
    } = renderHook(() => useThousandSeparatorLocale(value), {
      wrapper: ({ children }) => <LocaleProvider locale="pt">{children}</LocaleProvider>,
    });

    expect(current).toBe('1.000');
  });
});
