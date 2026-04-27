import type { LocaleOption } from './i18n.interface';

/**
 * All locales used by Webdox apps with all properties required.
 * Each app can disable some of them to progressively implement the
 * new language, but should not use a locale that it is not declared here
 */
export const allLocaleOptions: LocaleOption[] = [
  { id: 'en', value: 'en', flag: '🇬🇧', label: 'English' },
  { id: 'es', value: 'es', flag: '🇪🇸', label: 'Español' },
  { id: 'pt', value: 'pt', flag: '🇧🇷', label: 'Português' },
];

export const PROJECT_NAMESPACE = 'designSystem';

export const COUNTRIES_NAMESPACE = 'designSystemCountries';

export const CURRENCIES_NAMESPACE = 'designSystemCurrencies';

export const DATA_TYPE_NAMESPACE = 'designSystemDataTypes';

export const CONTRACT_TYPE_NAMESPACE = 'designSystemContractTypes';

export const defaultLng = 'es';
