import { useCallback } from 'react';

import { isSameDay, isToday, isYesterday, subDays, subMonths } from 'date-fns';

import { useTranslation } from '@components/utils';
import { useDateUtilsWithLocale } from '@components/utils/hooks/use-date-util-with-locale';
import { dateWithoutTimezoneOffset } from '@components/utils/strings/date.utils';

type UseDateFilterUtilsParams = {
  getValueLabel(rawValue: string | string[] | undefined): string | undefined;
};

/**
 * Custom hook providing utility functions for date filters.
 */
export const useDateFilterUtils = (): UseDateFilterUtilsParams => {
  const { formatDate } = useDateUtilsWithLocale();
  const { t } = useTranslation();

  /**
   * Generates a formatted label for the datepicker filter based on the provided date or date range.
   *
   * - If the value is empty, it returns `undefined`.
   * - If a single date is provided:
   *   - Returns "Today" if the date is today.
   *   - Returns "Yesterday" if the date is yesterday.
   *   - Otherwise, returns the formatted date string.
   * - If a date range is provided:
   *   - Returns "Today" if both dates are the same and match today.
   *   - Returns "Last 7 days" if the range starts 7 days ago and ends today.
   *   - Returns "Last month" if the range starts 1 month ago and ends today.
   *   - Otherwise, returns a formatted string with both dates.
   */
  const getValueLabel = useCallback(
    (rawValue: string | string[] | undefined): string | undefined => {
      if (!rawValue || (Array.isArray(rawValue) && rawValue.length === 0)) {
        return;
      }

      if (Array.isArray(rawValue)) {
        const [from, to] = rawValue.map(dateWithoutTimezoneOffset);

        if (isSameDay(from, to)) {
          return t('calendar.today');
        }

        if (isToday(to)) {
          const sevenDaysBefore = subDays(new Date(), 7);

          if (isSameDay(from, sevenDaysBefore)) {
            return t('calendar.last7Days');
          }

          const oneMonthBefore = subMonths(new Date(), 1);

          if (isSameDay(from, oneMonthBefore)) {
            return t('calendar.lastMonth');
          }
        }

        return `${formatDate(from.toISOString())} / ${formatDate(to.toISOString())}`;
      }

      const singleDate = dateWithoutTimezoneOffset(rawValue);

      if (isToday(singleDate)) {
        return t('calendar.today');
      }

      if (isYesterday(singleDate)) {
        return t('calendar.yesterday');
      }

      return formatDate(singleDate.toISOString());
    },
    [t, formatDate],
  );

  return { getValueLabel };
};
