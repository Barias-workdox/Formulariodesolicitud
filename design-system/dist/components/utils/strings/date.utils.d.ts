import { DateLocale, Locale } from '../i18n';
/** Locale for date format helpers; includes 'br' (API stores Portuguese as br) until full br/API refactor. */
export type DateFormatLocale = Locale | 'br';
/** Options for formatting date as text. */
export type FormatAsTextOptions = {
    showTime?: boolean;
    defaultValue?: string;
};
/**
 * A mapping of supported app locales (e.g., 'es', 'en', 'pt')
 * to their respective `date-fns` locale objects.
 *
 * @remarks
 * Use this map when you need to provide a `date-fns` locale object in functions that
 * require a locale option, ensuring proper language-specific formatting and parsing.
 */
export declare const allDateLocaleMap: Record<Locale, DateLocale>;
/**
 * Processes the `options` parameter for formatting date as text.
 *
 * @param options - A boolean indicating whether to show time, or an object with formatting options.
 * @returns An object containing the processed formatting options.
 * @throws Will throw an error if the options param is neither a boolean nor an object.
 */
export declare const getFormatOptions: (options?: boolean | FormatAsTextOptions) => FormatAsTextOptions;
/**
 * Returns the default date format (without time) for a given locale as an explicit pattern.
 *
 * @deprecated Use `getDateFormatToken` when passing the result to date-fns format/parse, or when you need
 * locale-aware token 'P'. This function returns explicit patterns (e.g. 'dd-MM-yyyy', 'MM-dd-yyyy') for
 * backwards compatibility when showing the format to users (e.g. placeholders, labels, hints).
 *
 * @param lang - The locale/language code (includes 'br' for API compatibility).
 * @returns An explicit date-fns format string (e.g. 'dd-MM-yyyy' for es/pt/br, 'MM-dd-yyyy' for en).
 */
export declare function getDateFormat(lang: DateFormatLocale): string;
/**
 * Returns the default date + time format for a given locale as an explicit pattern.
 *
 * @deprecated Use `getDatetimeFormatToken` when passing the result to date-fns format/parse, or when you need
 * locale-aware token 'P, HH:mm'. This function returns explicit patterns (e.g. 'dd-MM-yyyy - HH:mm') for
 * backwards compatibility when showing the format to users (e.g. placeholders, labels, hints).
 *
 * @param lang - The locale/language code (includes 'br' for API compatibility).
 * @returns An explicit date-fns format string (e.g. 'dd-MM-yyyy - HH:mm' for es/pt/br, 'MM-dd-yyyy - HH:mm' for en).
 */
export declare function getDatetimeFormat(lang: DateFormatLocale): string;
/**
 * Returns the date-fns locale-aware format token for date (without time).
 *
 * @remarks
 * Use with date-fns format/formatDate so the locale
 * controls the actual output (e.g. 20/04/2023 for es, 04/20/2023 for en).
 * @param _lang - The locale/language code (reserved for API consistency); token is always 'P'.
 * @returns The date-fns format token 'P'.
 */
export declare function getDateFormatToken(_lang: DateFormatLocale): string;
/**
 * Returns the date-fns locale-aware format token for date and time (24h).
 *
 * @remarks
 * Returns 'P, HH:mm'. Use with date-fns format/formatDatetime so the locale controls the date part.
 *
 * @param _lang - The locale/language code (reserved for API consistency); token is always 'P, HH:mm'.
 * @returns The date-fns format token 'P, HH:mm'.
 */
export declare function getDatetimeFormatToken(_lang: DateFormatLocale): string;
/**
 * Returns the default date input mask for a given locale.
 *
 * @remarks
 * All locales currently use the same mask. Kept for API consistency and future locale-specific masks.
 * Accepts DateFormatLocale (includes 'br') for consistency with getDateFormat, getDatetimeFormat, formatDate, etc.
 *
 * @param _lang - The locale/language code (includes 'br' for API compatibility); reserved for future locale-specific masks.
 * @returns The date input mask string.
 */
export declare function getDateMask(_lang: DateFormatLocale): string;
/**
 * Checks if a given string can be parsed as a valid date by the JavaScript `Date` constructor.
 *
 * @remarks
 * - This function simply checks if `new Date(dateString)` is valid (i.e., not `NaN`).
 * - Be aware that `new Date('YYYY-MM-DD')` may be interpreted as UTC or local time depending on the
 *   browser or environment.
 *
 * @param dateString - A string that is potentially a valid date.
 * @returns `true` if the date is valid, otherwise `false`.
 */
export declare function isValidDate(dateString: string): boolean;
/**
 * Formats an ISO-like date string into a locale-specific date string without time.
 *
 * @remarks
 * - If `isoDate` is not a valid date string, returns an empty string.
 * - Uses date-fns token P (locale-aware); supports 'br' for API compatibility.
 * - Watch out for potential timezone shifts if the input string lacks a timezone (e.g., `'2020-10-05'`).
 *
 * @param isoDate - A string representing a date, potentially in ISO format.
 * @param lang - The locale/language code for formatting (includes 'br').
 * @returns A string with the date formatted in the appropriate locale, or an empty string if invalid.
 */
export declare function formatDate(isoDate: string, lang: DateFormatLocale): string;
/**
 * Formats an ISO-like date string into a locale-specific date and time string.
 *
 * @remarks
 * - If `isoDate` is not a valid date string, returns an empty string.
 * - Uses date-fns token P + HH:mm (locale-aware, 24h); supports 'br' for API compatibility.
 * - When `showTime` is false, returns only the date part (same as `formatDate`).
 *
 * @param isoDate - A string representing a date-time, potentially in ISO format.
 * @param lang - The locale/language code for formatting (includes 'br').
 * @param showTime - Whether to include time. Defaults to `true`.
 * @returns A string with the date-time formatted in the appropriate locale, or an empty string if invalid.
 */
export declare function formatDatetime(isoDate: string, lang: DateFormatLocale, showTime?: boolean): string;
/**
 * Formats an ISO-like date string using a custom format and locale.
 *
 * @remarks
 * - If `isoDate` is not valid, returns an empty string.
 * - If `lang` is not supported (no matching date-fns locale), returns an empty string instead of throwing.
 * - Uses `date-fns` under the hood, providing the specified `format` and `locale`.
 * - Any timezone ambiguity in the input (e.g., `'YYYY-MM-DD'` without explicit timezone) might lead to shifts depending on the environment.
 *
 * @param isoDate - A string representing a date-time in ISO or similar format.
 * @param format - The custom `date-fns` format string.
 * @param lang - The locale/language code for formatting (includes 'br').
 * @returns A string with the date formatted according to the specified format, or an empty string if invalid.
 */
export declare function format(isoDate: string, format: string, lang: DateFormatLocale): string;
/**
 * Parses a date string using a custom format and locale.
 *
 * @remarks
 * - Uses `date-fns` under the hood to parse the input string according to the specified `format` and `locale`.
 * - If the input does not match the format, it may return an invalid `Date` object.
 * - Timezone ambiguities (e.g., lack of timezone info) may affect the resulting date depending on the environment.
 *
 * @param dateText - The date string to parse, expected to match the provided format.
 * @param format - The custom `date-fns` format string used to interpret the dateText.
 * @param lang - The locale/language code used to parse locale-specific tokens (includes 'br').
 * @returns A `Date` object parsed from the input string (may be invalid if the input does not match the format).
 */
export declare function parse(dateText: string, format: string, lang: DateFormatLocale): Date;
/**
 * Formats a date (string, number or Date) into a readable date-time text.
 *
 * @remarks
 * Uses date-fns token PP (and PP, HH:mm when time is shown); output is locale-dependent (e.g. "27 ene 2026, 12:30" for es).
 * Time is always 24h. If `date` is not valid, returns an empty string or the given default value.
 *
 * @param date - A string, number or Date object representing a date-time.
 * @param lang - The locale/language code for formatting (includes 'br').
 * @param showTimeOrOptions - Either a boolean indicating whether to show time, or an object with options:
 *   - `showTime` - Whether to include time in the formatted output. Defaults to `true`.
 *   - `defaultValue` - The default string to return if the date is null or invalid.
 * @returns A string with a human-readable date-time (24h), or an empty string if invalid.
 */
export declare function formatDatetimeAsText(date: string | Date | number | null | undefined, lang: DateFormatLocale, showTimeOrOptions?: boolean | FormatAsTextOptions): string;
/**
 * Parses a readable date-time string into a `Date` object using the locale-aware date-as-text format.
 *
 * @remarks
 * Uses the same format as `formatDatetimeAsText` / `formatDateAsText` (date-fns PP / PP, HH:mm). If the parsed result is invalid, returns `null`.
 *
 * @param datetimeText - A human-readable date string produced by formatDatetimeAsText or formatDateAsText.
 * @param lang - The locale/language code used for parsing (includes 'br').
 * @param showTime - Whether the input string includes time. Defaults to `true`.
 * @returns A `Date` object if the string is valid and correctly parsed, or `null` otherwise.
 */
export declare function parseTextAsDatetime(datetimeText: string, lang: DateFormatLocale, showTime?: boolean): Date | null;
/**
 * Formats a date (string, number or Date) into a text-based date format, optionally including time.
 *
 * @remarks
 * Same format as formatDatetimeAsText (date-fns PP / PP, HH:mm); output is locale-dependent. Default is date only (`showTime` defaults to `false`).
 * If `date` is not valid, returns an empty string or the given default value.
 *
 * @param date - A string, number or Date object representing a date-time.
 * @param lang - The locale/language code for formatting (includes 'br').
 * @param showTimeOrOptions - Either a boolean indicating whether to show time, or an object with options:
 *  - `showTime`: Whether to include time in the output (default: `false`).
 *  - `defaultValue`: The default string to return if the date is null or invalid.
 * @returns A string with a date text (optionally with time in 24h), or an empty string if invalid.
 */
export declare function formatDateAsText(date: string | Date | number | null | undefined, lang: DateFormatLocale, showTimeOrOptions?: boolean | FormatAsTextOptions): string;
/**
 * Converts a JavaScript `Date` object to a string in `YYYY-MM-DD` format (no time).
 *
 * @remarks
 * - This is commonly used for backend APIs that expect date-only values without time components.
 * - The result is effectively the date's UTC information truncated to the date portion (due to `toISOString().substring(0, 10)`).
 * - If the `Date` object was created as `new Date('YYYY-MM-DD')`, it might be offset to UTC already (depending on your environment).
 *
 * @param date - The `Date` object to convert.
 * @returns A string in `YYYY-MM-DD` format, or `null` if the date is falsy.
 */
export declare function formatDateToIsoStringOrNull(date: Date): string | null;
/**
 * Converts a JavaScript `Date` object to a string in `YYYY-MM-DD` format (no time).
 *
 * @deprecated Use `formatDateToIsoStringOrNull` for correct `string | null` return type. This overload returns empty string when the date is falsy to avoid breaking consumers without null checks.
 * @remarks
 * - This is commonly used for backend APIs that expect date-only values without time components.
 *
 * @param date - The `Date` object to convert.
 * @returns A string in `YYYY-MM-DD` format, or `''` if the date is falsy.
 */
export declare function formatDateToIsoString(date: Date): string;
/**
 * Returns a new `Date` object adjusted to remove any local timezone offset from the given ISO-like date string.
 *
 * @remarks
 * - This can help when you need the "pure" date portion without local timezone shifts.
 * - If `isoDate` is `'2020-10-05'` (no timezone info), some environments might parse it as midnight in local time,
 *   effectively shifting the date if you do further formatting. This function adds back the timezone offset in milliseconds
 *   to normalize it.
 * - If the input is invalid, returns `null`.
 *
 * @param isoDate - A string in ISO or similar format (e.g., `'YYYY-MM-DD'`, `'YYYY-MM-DDTHH:mm:ssZ'`).
 * @returns A new `Date` object representing the same date, but shifted to "remove" local timezone offset, or `null` if invalid.
 */
export declare function dateWithoutTimezoneOffsetOrNull(isoDate: string): Date | null;
/**
 * Returns a new `Date` object adjusted to remove any local timezone offset from the given ISO-like date string.
 *
 * @deprecated Use `dateWithoutTimezoneOffsetOrNull` for the same behavior with an explicit name. This overload preserves the previous runtime behavior: returns `null` for invalid input instead of throwing, so existing consumers do not crash during gradual migration.
 *
 * @param isoDate - A string in ISO or similar format (e.g., `'YYYY-MM-DD'`, `'YYYY-MM-DDTHH:mm:ssZ'`).
 * @returns A new `Date` object representing the same date, but shifted to "remove" local timezone offset, or `null` if invalid.
 */
export declare function dateWithoutTimezoneOffset(isoDate: string): Date | null;
/**
 * Converts a `Date` object to an ISO date string (`YYYY-MM-DD`), removing any local timezone offset.
 *
 * @remarks
 * - Internally calls `dateWithoutTimezoneOffsetOrNull` and `formatDateToIsoStringOrNull`.
 * - Useful when you need an exact "calendar date" (e.g., storing a user-selected date) without time or offset considerations.
 *
 * @param date - The `Date` object to convert.
 * @returns A string in `YYYY-MM-DD` format, without local timezone offset, or `null` if the date is falsy.
 */
export declare function formatDateToIsoStringWithoutTimezoneOffsetOrNull(date: Date): string | null;
/**
 * Converts a `Date` object to an ISO date string (`YYYY-MM-DD`), removing any local timezone offset.
 *
 * @deprecated Use `formatDateToIsoStringWithoutTimezoneOffsetOrNull` for correct `string | null` return type. This overload returns empty string when the result would be null to avoid breaking consumers without null checks.
 *
 * @param date - The `Date` object to convert.
 * @returns A string in `YYYY-MM-DD` format, without local timezone offset, or `''` if the date is falsy.
 */
export declare function formatDateToIsoStringWithoutTimezoneOffset(date: Date): string;
/**
 * Gets the Unix timestamp (in seconds) from an ISO-like date string.
 *
 * @remarks
 * - If `isoDate` is invalid, this may produce an incorrect result (e.g., `NaN`).
 * - Conversions assume the date is interpreted in your environment's local or UTC time, depending on how `new Date(...)` parses it.
 *
 * @param isoDate - The ISO-like date string (e.g., `'2020-10-05T14:48:00.000Z'`).
 * @returns The Unix timestamp (number of seconds since the Unix epoch), or `NaN` if invalid.
 */
export declare function getUnixTimestamp(isoDate: string): number;
/**
 * Checks if two `Date` objects fall on the same calendar day (year, month, and date) in local time.
 *
 * @param dateA - The first `Date` object to compare.
 * @param dateB - The second `Date` object to compare.
 * @returns `true` if both dates have the same year, month, and day; otherwise, `false`.
 *
 * @example
 * ```ts
 * const today = new Date();
 * const anotherDay = new Date('2025-01-26T12:00:00');
 * const sameDay = isSameDay(today, anotherDay);
 * ```
 */
export declare const isSameDay: (dateA: Date, dateB: Date) => boolean;
/**
 * Extracts only the date portion (in `YYYY-MM-DD` format) from a given `Date` object, ignoring the time component.
 *
 * @remarks
 * - This method uses the local time from the `Date` object to determine the day, month, and year,
 *   which may differ from UTC-based extraction if the `Date` object was not constructed with an explicit timezone.
 *
 * @param source - The `Date` object from which to extract the date portion.
 * @returns A string in `YYYY-MM-DD` format.
 */
export declare const getIsoDateOnly: (source: Date) => string;
/**
 * Generic helper function to check if a date or date range is within min and max bounds.
 *
 * @param input - A single Date or a tuple representing a date range [from, to].
 * @param minDate - The minimum allowable date (inclusive).
 * @param maxDate - The maximum allowable date (inclusive).
 * @returns A boolean indicating whether the input is within bounds.
 */
export declare const isWithinBounds: (input: Date | [Date, Date], minDate?: Date, maxDate?: Date) => boolean;
