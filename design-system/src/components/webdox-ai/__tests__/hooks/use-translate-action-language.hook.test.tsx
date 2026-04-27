import { ThemedComponent, renderHook, renderUseTranslation } from '@test/test-utils';

import { useTranslateActionLanguages } from '../../components/webdox-ai-document-viewer-wrapper/hooks/use-translate-action-languages.hook';

describe('useTranslateActionLanguages', () => {
  const { t } = renderUseTranslation();

  it('should return languages correctly with current locale at the start', () => {
    const { result } = renderHook(() => useTranslateActionLanguages(), {
      wrapper: ({ children }) => <ThemedComponent locale="pt">{children}</ThemedComponent>,
    });

    expect(result.current.languages).toEqual([
      { id: 'pt', value: 'pt', flag: '🇧🇷', label: t('locales.pt') },
      { id: 'es', value: 'es', flag: '🇪🇸', label: t('locales.es') },
      { id: 'en', value: 'en', flag: '🇬🇧', label: t('locales.en') },
    ]);
  });
});
