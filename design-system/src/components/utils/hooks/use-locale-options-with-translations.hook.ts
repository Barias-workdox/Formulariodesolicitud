import { useMemo } from 'react';

import { type LocaleOption, allLocaleOptions, useTranslation } from '../i18n';

export interface UseLocaleOptionsWithTranslationsReturn {
  options: LocaleOption[];
}

/**
 * `useLocaleOptionsWithTranslations` is a custom hook that returns a list of locale options
 * with their labels translated according to the current language.
 */
export const useLocaleOptionsWithTranslations = (): UseLocaleOptionsWithTranslationsReturn => {
  const { t } = useTranslation();

  const options: LocaleOption[] = useMemo(
    () =>
      allLocaleOptions.map((option) => {
        const { id } = option;

        return { ...option, label: t(`locales.${id}`) };
      }),
    [t],
  );

  return { options };
};
