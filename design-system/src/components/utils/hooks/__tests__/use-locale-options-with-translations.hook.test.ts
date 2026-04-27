import { renderHook, renderUseTranslation } from '@test/test-utils';

import { useLocaleOptionsWithTranslations } from '../use-locale-options-with-translations.hook';

describe('useLocaleOptionsWithTranslations', () => {
  const { t } = renderUseTranslation();

  it('should return locales correctly', () => {
    const { result } = renderHook(() => useLocaleOptionsWithTranslations());

    expect(result.current.options).toEqual([
      { id: 'en', value: 'en', flag: '🇬🇧', label: t('locales.en') },
      { id: 'es', value: 'es', flag: '🇪🇸', label: t('locales.es') },
      { id: 'pt', value: 'pt', flag: '🇧🇷', label: t('locales.pt') },
    ]);
  });
});
