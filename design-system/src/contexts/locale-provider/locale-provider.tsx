import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactElement, ReactNode } from 'react';

import i18next from 'i18next';

import { allDateLocaleMap } from '@components/utils/strings/date.utils';

import type { DateLocale, Locale } from '@components/utils/i18n';

export type LocaleContextProps = {
  locale: Locale;
  dateLocale: DateLocale;
  updateLocale(updatedLocale: Locale): void;
};

const allLocales: Locale[] = ['en', 'es', 'pt'];
const defaultLocale: Locale = 'es';
const defaultDateLocale = allDateLocaleMap.es;

const initialValues: LocaleContextProps = {
  locale: defaultLocale,
  dateLocale: defaultDateLocale,
  updateLocale: (): void => {
    return;
  },
};

const LocaleContext = createContext<LocaleContextProps>(initialValues);

/**
 * Hook to get the user language from the LocaleContext
 */
export const useLocale = (): LocaleContextProps => {
  return useContext(LocaleContext);
};

/**
 * The Locale Provider let obtain and update the user's language in the
 * entire app.
 * It is managed with the `useLocale` hook.
 *
 * The locale param is /es/ by default.
 *
 * The locale param is temporary. Will be replaced in future
 * versions of the DS when the locale context will be implemented.
 * In the current version there are a problem in the locale context
 * to share its current value with other component from the DS.
 */
export const LocaleProvider = ({
  children,
  locale: localeProp = defaultLocale,
}: {
  children: ReactNode;
  locale?: Locale;
}): ReactElement => {
  const [locale, setLocale] = useState<Locale>(localeProp ?? defaultLocale);

  const dateLocale = useMemo(() => allDateLocaleMap[locale], [locale]);

  /**
   * Updates the locale value if it is not null and is part of the supported Locales
   */
  function updateLocale(updatedLocale: Locale): void {
    if (updatedLocale && allLocales.includes(updatedLocale)) {
      setLocale(updatedLocale);
      i18next.changeLanguage(updatedLocale);
    }
  }

  /**
   * Updates the locale value when the prop changes
   */
  useEffect(() => {
    updateLocale(localeProp);
  }, [localeProp]);

  return (
    <LocaleContext.Provider value={{ locale, dateLocale, updateLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
