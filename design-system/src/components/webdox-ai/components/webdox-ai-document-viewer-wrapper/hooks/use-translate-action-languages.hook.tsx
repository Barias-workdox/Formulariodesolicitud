import { useLocaleOptionsWithTranslations } from '@components/utils/hooks/use-locale-options-with-translations.hook';
import { useLocale } from '@contexts/locale-provider';

import type { LocaleOption } from '@components/utils';

export interface UseTranslateActionLanguagesReturn {
  languages: LocaleOption[];
}

/**
 * Custom hook that provides a list of languages with the current locale moved to the start.
 */
export const useTranslateActionLanguages = (): UseTranslateActionLanguagesReturn => {
  const { options } = useLocaleOptionsWithTranslations();
  const { locale } = useLocale();

  const sortedLanguages = options.sort((a, b) => {
    if (a.label < b.label) return -1;
    if (a.label > b.label) return 1;

    return 0;
  });

  const indexCurrentLocale = sortedLanguages.findIndex((lang) => lang.id === locale);

  if (indexCurrentLocale !== -1) {
    const [localeElement] = sortedLanguages.splice(indexCurrentLocale, 1);

    sortedLanguages.unshift(localeElement);
  }

  return {
    languages: sortedLanguages,
  };
};
