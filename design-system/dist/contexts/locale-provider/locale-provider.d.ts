import { ReactElement, ReactNode } from 'react';
import { DateLocale, Locale } from '../../components/utils/i18n';
export type LocaleContextProps = {
    locale: Locale;
    dateLocale: DateLocale;
    updateLocale(updatedLocale: Locale): void;
};
/**
 * Hook to get the user language from the LocaleContext
 */
export declare const useLocale: () => LocaleContextProps;
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
export declare const LocaleProvider: ({ children, locale: localeProp, }: {
    children: ReactNode;
    locale?: Locale;
}) => ReactElement;
