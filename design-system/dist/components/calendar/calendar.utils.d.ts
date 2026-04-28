import { DateValue } from './calendar.interfaces';
/**
 * Checks whether two Date values (Date | Date[] | null) are different, ignoring
 * time and comparing only day, month, and year.
 *
 * @param valueA - First date value which could be `Date`, `Date[]`, or `null`.
 * @param valueB - Second date value which could be `Date`, `Date[]`, or `null`.
 * @returns `true` if the two values differ, otherwise `false`.
 */
export declare const isDifferentDateIgnoringTime: (valueA: DateValue, valueB: DateValue) => boolean;
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
export declare const getRangeValue: (date: string | string[] | (string | Date)[] | DateValue) => Date[];
