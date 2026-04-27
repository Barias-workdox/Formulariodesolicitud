import type { ReactNode } from 'react';

import { renderHook } from '@testing-library/react';

import { mockI18nextInit } from '@test/test-utils';

import { LocaleProvider } from '../../../contexts/locale-provider';

import { useImageWithLocale } from './use-image-with-locale';

import type { Locale } from '../i18n';
import type { RenderHookResult } from '@testing-library/react';

mockI18nextInit();
/** Helper to render the useImageWithLocale hook */
const renderUseImageWithLocale = (
  locale: Locale = 'es',
  src = 'webdox_image.svg',
): RenderHookResult<null, string> =>
  renderHook(() => useImageWithLocale(src), {
    wrapper: ({ children }: { children: ReactNode }) => (
      <LocaleProvider locale={locale}>{children}</LocaleProvider>
    ),
  });

it('returns the image path as expected when the locale is undefined', async () => {
  const { result } = renderUseImageWithLocale();

  expect(result.current).toBe('webdox_image_es.svg');
});

it('returns the image path as expected when the locale is /es/', async () => {
  const { result } = renderUseImageWithLocale('es');

  expect(result.current).toBe('webdox_image_es.svg');
});

it('returns the image path as expected when the locale is /pt/', async () => {
  const { result } = renderUseImageWithLocale('pt');

  expect(result.current).toBe('webdox_image_pt.svg');
});

it('returns the image path as expected when the locale is /en/', async () => {
  const { result } = renderUseImageWithLocale('en');

  expect(result.current).toBe('webdox_image_en.svg');
});

it('returns the image path as expected when the locale is /es/ and the image name has a lot of dots', async () => {
  const { result } = renderUseImageWithLocale('es', 'webdox_image.document.preview.svg');

  expect(result.current).toBe('webdox_image.document.preview_es.svg');
});
