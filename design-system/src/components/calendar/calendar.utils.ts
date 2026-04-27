import { isSameDay } from '@components/utils/strings/date.utils';

import type { DateValue } from './calendar.interfaces';

/**
 * Checks whether two Date values (Date | Date[] | null) are different, ignoring
 * time and comparing only day, month, and year.
 *
 * @param valueA - First date value which could be `Date`, `Date[]`, or `null`.
 * @param valueB - Second date value which could be `Date`, `Date[]`, or `null`.
 * @returns `true` if the two values differ, otherwise `false`.
 */
export const isDifferentDateIgnoringTime = (valueA: DateValue, valueB: DateValue): boolean => {
  // Both null
  if (!valueA && !valueB) return false;
  // One is null, the other isn't
  if (!valueA || !valueB) return true;

  // Both are arrays
  if (Array.isArray(valueA) && Array.isArray(valueB)) {
    // Different lengths
    if (valueA.length !== valueB.length) return true;
    // Compare each date
    for (let i = 0; i < valueA.length; i += 1) {
      const dateA = valueA[i];
      const dateB = valueB[i];
      // If either is null or not Date, skip or consider them different
      if (!(dateA instanceof Date) || !(dateB instanceof Date)) {
        if (dateA !== dateB) return true;
      } else if (!isSameDay(dateA, dateB)) {
        return true;
      }
    }

    return false;
  }

  // One is array, the other is not => automatically different
  if (Array.isArray(valueA) || Array.isArray(valueB)) {
    return true;
  }

  // Both are Date
  if (valueA instanceof Date && valueB instanceof Date) {
    return !isSameDay(valueA, valueB);
  }

  // Fallback: they differ if they are not strictly equal
  return valueA !== valueB;
};

/**
 * Converts the provided `DateValue` into a date array for range selections,
 * converting any string values to `Date` objects.
 *
 * - If the provided value is `null`, returns an empty array (`[]`).
 * - If the provided value is a single `Date` (or string that can be parsed as a `Date`),
 *   it returns `[thatDate, null]`.
 * - If the provided value is already an array, each item is converted from string
 *   to `Date` (if necessary) and the array is returned as is.
 *
 * @param date - A `DateValue` which can be `null`, a single `Date` or date-string,
 *   or an array of `Date | string`.
 *
 * @returns An array of `Date | null`, typically with up to two elements for range selections,
 *   or `[]` if no valid date is provided.
 */
export const getRangeValue = (date: string | string[] | (string | Date)[] | DateValue): Date[] => {
  if (!date) return [];

  const range = Array.isArray(date) ? date : [date, null];

  return range.map((value) => (typeof value === 'string' ? new Date(value) : value));
};
