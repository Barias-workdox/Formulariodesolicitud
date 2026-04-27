import { useLocale } from '@contexts/locale-provider';

import {
  type FormatAsTextOptions,
  dateWithoutTimezoneOffset,
  format,
  formatDate,
  formatDateAsText,
  formatDateToIsoString,
  formatDateToIsoStringWithoutTimezoneOffset,
  formatDatetime,
  formatDatetimeAsText,
  getDateFormat,
  getDateMask,
  getDatetimeFormat,
  parseTextAsDatetime,
} from '../strings/date.utils';

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
  formatDatetimeAsText(
    value: string | Date | number | null | undefined,
    showTimeOrOptions?: boolean | FormatAsTextOptions,
  ): string;
  parseTextAsDatetime(value: string, showTime?: boolean): ReturnType<typeof parseTextAsDatetime>;
  formatDateAsText(
    value: string | Date | number | null | undefined,
    showTimeOrOptions?: boolean | FormatAsTextOptions,
  ): string;
}

/**
 * A hook that will use the currently selected locale on each date time
 * existing utility.
 */
export const useDateUtilsWithLocale = (): useDateUtilsWithLocaleType => {
  const { locale } = useLocale();

  return {
    getDateFormat: () => getDateFormat(locale),
    getDatetimeFormat: () => getDatetimeFormat(locale),
    getDateMask: () => getDateMask(locale),
    formatDate: (value: string) => formatDate(value, locale),
    formatDatetime: (value: string, showTime = true) => formatDatetime(value, locale, showTime),
    format: (value: string, formatKind: string) => format(value, formatKind, locale),
    formatDatetimeAsText: (
      value: string | Date | number | null | undefined,
      showTimeOrOptions?: boolean | FormatAsTextOptions,
    ): string => formatDatetimeAsText(value, locale, showTimeOrOptions),
    parseTextAsDatetime: (value: string, showTime?: boolean) =>
      parseTextAsDatetime(value, locale, showTime),
    formatDateAsText: (
      value: string | Date | number | null | undefined,
      showTimeOrOptions?: boolean | FormatAsTextOptions,
    ): string => formatDateAsText(value, locale, showTimeOrOptions),
    formatDateToIsoString,
    dateWithoutTimezoneOffset,
    formatDateToIsoStringWithoutTimezoneOffset,
  };
};
