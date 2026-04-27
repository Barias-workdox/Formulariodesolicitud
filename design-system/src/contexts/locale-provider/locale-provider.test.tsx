import { act, renderHook } from '@testing-library/react';

import { ThemedComponent } from '@test/test-utils';

import { LocaleProvider, useLocale } from './locale-provider';

/** Render hook helper with the ThemedComponent wrapper, this wrapper is required to create the LocaleContext */
const renderUseLocale = () => renderHook(useLocale, { wrapper: ThemedComponent });

it('sets the locale value from prop', async () => {
  const { result } = renderHook(useLocale, {
    wrapper: ({ children }) => <LocaleProvider locale="pt">{children}</LocaleProvider>,
  });

  expect(result.current.locale).toBe('pt');
});

describe('useLocale tests', () => {
  it('returns "es" as the default locale value', async () => {
    const { result } = renderUseLocale();

    expect(result.current.locale).toBe('es');
  });

  it('returns "en" with updateLocale("en")', async () => {
    const { result } = renderUseLocale();

    act(() => {
      result.current.updateLocale('en');
    });

    expect(result.current.locale).toBe('en');
  });
});
