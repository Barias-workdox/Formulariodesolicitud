import { LocaleOption } from '../i18n';
export interface UseLocaleOptionsWithTranslationsReturn {
    options: LocaleOption[];
}
/**
 * `useLocaleOptionsWithTranslations` is a custom hook that returns a list of locale options
 * with their labels translated according to the current language.
 */
export declare const useLocaleOptionsWithTranslations: () => UseLocaleOptionsWithTranslationsReturn;
