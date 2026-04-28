import { LocaleOption } from '../../../../utils';
export interface UseTranslateActionLanguagesReturn {
    languages: LocaleOption[];
}
/**
 * Custom hook that provides a list of languages with the current locale moved to the start.
 */
export declare const useTranslateActionLanguages: () => UseTranslateActionLanguagesReturn;
