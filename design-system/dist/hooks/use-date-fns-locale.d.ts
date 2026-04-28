import { DateLocale } from '../components/utils';
type UseDateFnsLocaleProps = {
    dateFnsLocale: DateLocale;
};
/**
 * Hook that provides the `date-fns` locale object based on the current application locale.
 */
export declare const useDateFnsLocale: () => UseDateFnsLocaleProps;
export {};
