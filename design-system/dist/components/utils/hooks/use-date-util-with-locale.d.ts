import { FormatAsTextOptions, dateWithoutTimezoneOffset, format, formatDate, formatDateToIsoString, formatDateToIsoStringWithoutTimezoneOffset, formatDatetime, getDateFormat, getDateMask, getDatetimeFormat, parseTextAsDatetime } from '../strings/date.utils';
interface useDateUtilsWithLocaleType {
    formatDateToIsoString: typeof formatDateToIsoString;
    dateWithoutTimezoneOffset: typeof dateWithoutTimezoneOffset;
    formatDateToIsoStringWithoutTimezoneOffset: typeof formatDateToIsoStringWithoutTimezoneOffset;
    getDateFormat(): ReturnType<typeof getDateFormat>;
    getDatetimeFormat(): ReturnType<typeof getDatetimeFormat>;
    getDateMask(): ReturnType<typeof getDateMask>;
    formatDate(value: string): ReturnType<typeof formatDate>;
    formatDatetime(value: string, showTime?: boolean): ReturnType<typeof formatDatetime>;
    format(value: string, formatKind: string): ReturnType<typeof format>;
    formatDatetimeAsText(value: string | Date | number | null | undefined, showTimeOrOptions?: boolean | FormatAsTextOptions): string;
    parseTextAsDatetime(value: string, showTime?: boolean): ReturnType<typeof parseTextAsDatetime>;
    formatDateAsText(value: string | Date | number | null | undefined, showTimeOrOptions?: boolean | FormatAsTextOptions): string;
}
/**
 * A hook that will use the currently selected locale on each date time
 * existing utility.
 */
export declare const useDateUtilsWithLocale: () => useDateUtilsWithLocaleType;
export {};
