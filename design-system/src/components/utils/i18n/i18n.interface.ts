import type { Locale as DateLocale } from 'date-fns';
import type { TFunction } from 'i18next';

export type TranslationType = TFunction<'translation', undefined>;

/** All native locales that can be implemented in apps i18n */
export type NativeLocaleType = 'es' | 'pt' | 'en';

/** Locale types with the base one required by configuration in some apps with externa i18n service */
export type Locale = NativeLocaleType | 'base';

export interface LocaleOption {
  id: NativeLocaleType;
  value: NativeLocaleType;
  flag: string;
  label: string;
}

export { DateLocale };
