import { default as timezoneMock } from 'timezone-mock';

import {
  allDateLocaleMap,
  dateWithoutTimezoneOffset,
  format,
  formatDate,
  formatDateAsText,
  formatDateToIsoString,
  formatDateToIsoStringWithoutTimezoneOffset,
  formatDatetime,
  formatDatetimeAsText,
  getDateFormat,
  getDateFormatToken,
  getDateMask,
  getDatetimeFormat,
  getDatetimeFormatToken,
  getFormatOptions,
  getIsoDateOnly,
  getUnixTimestamp,
  isSameDay,
  isValidDate,
  isWithinBounds,
  parseTextAsDatetime,
} from './date.utils';

import type { DateFormatLocale } from './date.utils';

describe('date.utils', () => {
  const baseValidIsoString = '2023-04-20'; // UTC time
  const validIsoString = `${baseValidIsoString}T12:30:00Z`; // UTC time
  const invalidIsoString = 'invalid-date-string';
  const testDate = new Date(Date.UTC(2023, 3, 20, 12, 30, 0)); // 2023-04-20T12:30:00.000Z in UTC

  // ---------------------------------------------------------------------------------------------
  // allDateLocaleMap
  // ---------------------------------------------------------------------------------------------
  describe('allDateLocaleMap', () => {
    it('should contain expected locales: base, es, en, pt', () => {
      expect(Object.keys(allDateLocaleMap)).toEqual(['base', 'es', 'en', 'pt']);
    });
  });

  // ---------------------------------------------------------------------------------------------
  // getDateFormat (explicit patterns, deprecated; for placeholders/labels)
  // ---------------------------------------------------------------------------------------------
  describe('getDateFormat', () => {
    it('should return explicit pattern MM-dd-yyyy for en', () => {
      expect(getDateFormat('en')).toBe('MM-dd-yyyy');
    });
    it('should return explicit pattern dd-MM-yyyy for es', () => {
      expect(getDateFormat('es')).toBe('dd-MM-yyyy');
    });
    it('should return explicit pattern dd-MM-yyyy for pt', () => {
      expect(getDateFormat('pt')).toBe('dd-MM-yyyy');
    });
    it('should return explicit pattern dd-MM-yyyy for br (API stores Portuguese as br)', () => {
      expect(getDateFormat('br')).toBe('dd-MM-yyyy');
    });
    it('should return explicit pattern dd-MM-yyyy for base', () => {
      expect(getDateFormat('base')).toBe('dd-MM-yyyy');
    });
  });

  // ---------------------------------------------------------------------------------------------
  // getDateFormatToken (date-fns token P, for formatDate internal use)
  // ---------------------------------------------------------------------------------------------
  describe('getDateFormatToken', () => {
    it('should return "P" for all locales', () => {
      expect(getDateFormatToken('en')).toBe('P');
      expect(getDateFormatToken('es')).toBe('P');
      expect(getDateFormatToken('pt')).toBe('P');
      expect(getDateFormatToken('br')).toBe('P');
    });
  });

  // ---------------------------------------------------------------------------------------------
  // getDatetimeFormat (explicit patterns, deprecated; for placeholders/labels)
  // ---------------------------------------------------------------------------------------------
  describe('getDatetimeFormat', () => {
    it('should return explicit pattern MM-dd-yyyy - HH:mm for en', () => {
      expect(getDatetimeFormat('en')).toBe('MM-dd-yyyy - HH:mm');
    });
    it('should return explicit pattern dd-MM-yyyy - HH:mm for es', () => {
      expect(getDatetimeFormat('es')).toBe('dd-MM-yyyy - HH:mm');
    });
    it('should return explicit pattern dd-MM-yyyy - HH:mm for pt', () => {
      expect(getDatetimeFormat('pt')).toBe('dd-MM-yyyy - HH:mm');
    });
    it('should return explicit pattern dd-MM-yyyy - HH:mm for br (API stores Portuguese as br)', () => {
      expect(getDatetimeFormat('br')).toBe('dd-MM-yyyy - HH:mm');
    });
  });

  // ---------------------------------------------------------------------------------------------
  // getDatetimeFormatToken (date-fns token P, HH:mm; for formatDatetime internal use)
  // ---------------------------------------------------------------------------------------------
  describe('getDatetimeFormatToken', () => {
    it('should return "P, HH:mm" for all locales', () => {
      expect(getDatetimeFormatToken('en')).toBe('P, HH:mm');
      expect(getDatetimeFormatToken('es')).toBe('P, HH:mm');
      expect(getDatetimeFormatToken('pt')).toBe('P, HH:mm');
      expect(getDatetimeFormatToken('br')).toBe('P, HH:mm');
    });
  });

  // ---------------------------------------------------------------------------------------------
  // getDateMask
  // ---------------------------------------------------------------------------------------------
  describe('getDateMask', () => {
    it('should return "99-99-9999" for en, es, pt and br (DateFormatLocale)', () => {
      expect(getDateMask('en')).toBe('99-99-9999');
      expect(getDateMask('es')).toBe('99-99-9999');
      expect(getDateMask('pt')).toBe('99-99-9999');
      expect(getDateMask('br')).toBe('99-99-9999');
    });
  });

  // ---------------------------------------------------------------------------------------------
  // getFormatOptions
  // ---------------------------------------------------------------------------------------------
  describe('getFormatOptions', () => {
    it('should return correct object when given boolean', () => {
      expect(getFormatOptions(true)).toEqual({ showTime: true });
      expect(getFormatOptions(false)).toEqual({ showTime: false });
    });
    it('should return the same object when given an object', () => {
      const options = { showTime: true, defaultValue: 'N/A' };

      expect(getFormatOptions(options)).toBe(options);
    });
    it('should return empty object when given undefined', () => {
      expect(getFormatOptions()).toEqual({});
    });
    it('should throw an error when given invalid type', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(() => getFormatOptions('invalid' as any)).toThrow('Invalid options');
    });
  });

  // ---------------------------------------------------------------------------------------------
  // isValidDate
  // ---------------------------------------------------------------------------------------------
  describe('isValidDate', () => {
    it('should return true for valid ISO string', () => {
      expect(isValidDate(validIsoString)).toBe(true);
    });
    it('should return false for invalid string', () => {
      expect(isValidDate(invalidIsoString)).toBe(false);
    });
    it('should return true for a date-like string that can be parsed', () => {
      expect(isValidDate('2025-12-31')).toBe(true);
    });
  });

  // ---------------------------------------------------------------------------------------------
  // formatDate
  // ---------------------------------------------------------------------------------------------
  describe('formatDate', () => {
    it('should format a valid ISO date correctly in "es" locale (date-fns token P)', () => {
      expect(formatDate(validIsoString, 'es')).toBe('20/04/2023');
    });
    it('should return empty string for invalid date', () => {
      expect(formatDate(invalidIsoString, 'es')).toBe('');
    });
  });

  // ---------------------------------------------------------------------------------------------
  // formatDatetime
  // ---------------------------------------------------------------------------------------------
  describe('formatDatetime', () => {
    it('should format a valid ISO datetime correctly in "es" locale (date-fns P, HH:mm)', () => {
      expect(formatDatetime(validIsoString, 'es')).toBe('20/04/2023, 12:30');
    });
    it('should return only date when showTime is false', () => {
      expect(formatDatetime(validIsoString, 'es', false)).toBe('20/04/2023');
    });
    it('should return empty string for invalid date', () => {
      expect(formatDatetime(invalidIsoString, 'es')).toBe('');
    });
  });

  // ---------------------------------------------------------------------------------------------
  // format (custom)
  // ---------------------------------------------------------------------------------------------
  describe('format (custom)', () => {
    it('should format using a custom format and locale', () => {
      // For instance, 'do MMM yyyy, HH:mm'
      const customFormat = 'do MMM yyyy, HH:mm';
      // For 2023-04-20T12:30:00Z in Spanish: "20º abr. 2023, 12:30"
      // date-fns might produce "20ª abr 2023..." depending on version
      const result = format(validIsoString, customFormat, 'es');

      expect(result.includes('abr')).toBe(true);
      expect(result.includes('2023')).toBe(true);
      expect(result.includes('12:30')).toBe(true);
    });

    it('should return empty string for invalid date', () => {
      expect(format(invalidIsoString, 'yyyy-MM-dd', 'es')).toBe('');
    });

    it('should return empty string for unsupported locale instead of throwing', () => {
      const unsupportedLocale = 'xx' as DateFormatLocale;

      expect(format(validIsoString, 'yyyy-MM-dd', unsupportedLocale)).toBe('');
    });
  });

  // ---------------------------------------------------------------------------------------------
  // formatDatetimeAsText
  // ---------------------------------------------------------------------------------------------
  describe('formatDatetimeAsText', () => {
    it('should return a human-readable date-time in given locale (date-fns PP, HH:mm)', () => {
      const result = formatDatetimeAsText(validIsoString, 'es');

      expect(result).not.toBe('');
      expect(result).toBe('20 abr 2023, 12:30');
    });

    it('should return a human-readable date-time in given locale when showTime is false', () => {
      const result = formatDatetimeAsText(validIsoString, 'es', false);

      expect(result).not.toBe('');
      expect(result).toBe('20 abr 2023');
      expect(result).toMatch(/2023/);
    });

    it('should return a human-readable date-time in given locale when showTime is false in options', () => {
      const result = formatDatetimeAsText(validIsoString, 'es', { showTime: false });

      expect(result).not.toBe('');
      expect(result).toBe('20 abr 2023');
      expect(result).toMatch(/2023/);
    });

    it('should return a human-readable date-time when date is a Date object', () => {
      const dateObj = new Date(validIsoString);
      const result = formatDatetimeAsText(dateObj, 'es');

      expect(result).not.toBe('');
      expect(result).toBe('20 abr 2023, 12:30');
    });

    it('should return a human-readable date-time when date is a timestamp', () => {
      const timestamp = new Date(validIsoString).getTime();
      const result = formatDatetimeAsText(timestamp, 'es');

      expect(result).not.toBe('');
      expect(result).toBe('20 abr 2023, 12:30');
    });

    it('should return an empty string for invalid date and no default text', () => {
      expect(formatDatetimeAsText(invalidIsoString, 'es')).toBe('');
    });

    it('should return the default text for invalid date', () => {
      const defaultValue = '-';

      expect(formatDatetimeAsText(invalidIsoString, 'es', { defaultValue })).toBe(defaultValue);
    });

    it('should return the default text for invalid date when the date is null', () => {
      const defaultValue = 'No date provided';

      expect(formatDatetimeAsText(null, 'es', { defaultValue })).toBe(defaultValue);
    });
  });

  // ---------------------------------------------------------------------------------------------
  // formatDateAsText
  // ---------------------------------------------------------------------------------------------
  describe('formatDateAsText', () => {
    it('should return the correct string when showTime is false (date-fns token PP)', () => {
      expect(formatDateAsText(validIsoString, 'es')).toEqual('20 abr 2023');
    });

    it('should return the correct string when date is a Date object', () => {
      const dateObj = new Date(validIsoString);
      const result = formatDateAsText(dateObj, 'es');

      expect(result).toEqual('20 abr 2023');
    });

    it('should return the correct string when date is a timestamp', () => {
      const timestamp = new Date(validIsoString).getTime();
      const result = formatDateAsText(timestamp, 'es');

      expect(result).toEqual('20 abr 2023');
    });

    it('should return the correct string when showTime is true (24h, PP + HH:mm)', () => {
      expect(formatDateAsText(validIsoString, 'es', true)).toEqual('20 abr 2023, 12:30');
    });

    it('should return the correct string when showTime is true in options', () => {
      expect(formatDateAsText(validIsoString, 'es', { showTime: true })).toEqual(
        '20 abr 2023, 12:30',
      );
    });

    it('should return an empty string when date is invalid', () => {
      expect(formatDateAsText('', 'es')).toEqual('');
    });

    it('should return the default text for invalid date', () => {
      const defaultValue = 'N/A';

      expect(formatDateAsText(invalidIsoString, 'es', { defaultValue })).toBe(defaultValue);
    });

    it('should return the default text for invalid date when the date is null', () => {
      const defaultValue = 'No date provided';

      expect(formatDateAsText(null, 'es', { defaultValue })).toBe(defaultValue);
    });
  });

  // ---------------------------------------------------------------------------------------------
  // formatDateToIsoString
  // ---------------------------------------------------------------------------------------------
  describe('formatDateToIsoString', () => {
    it('should return date in YYYY-MM-DD format', () => {
      // Using testDate = 2023-04-20T12:30:00.000Z, the substring(0,10) is "2023-04-20"
      expect(formatDateToIsoString(testDate)).toBe('2023-04-20');
    });

    it('should return empty string if date is falsy (deprecated overload)', () => {
      expect(formatDateToIsoString(null as unknown as Date)).toBe('');
    });
  });

  // ---------------------------------------------------------------------------------------------
  // dateWithoutTimezoneOffset
  // ---------------------------------------------------------------------------------------------
  describe('dateWithoutTimezoneOffset', () => {
    it('should return a new Date object with offset removed', () => {
      const offsetDate = dateWithoutTimezoneOffset(validIsoString);

      expect(offsetDate).toBeInstanceOf(Date);
      // If your timezone is not UTC, offsetDate's hour might differ from the original
      // The important part is it's not null.
      expect(offsetDate?.toISOString().includes('2023-04-20')).toBe(true);
    });

    it('should return null for invalid ISO string (deprecated preserves previous runtime behavior)', () => {
      expect(dateWithoutTimezoneOffset(invalidIsoString)).toBeNull();
    });
  });

  // ---------------------------------------------------------------------------------------------
  // formatDateToIsoStringWithoutTimezoneOffset
  // ---------------------------------------------------------------------------------------------
  describe('formatDateToIsoStringWithoutTimezoneOffset', () => {
    it('should convert a Date to YYYY-MM-DD without the local timezone offset', () => {
      // This will effectively shift the date if needed so it's purely the "calendar date"
      const result = formatDateToIsoStringWithoutTimezoneOffset(testDate);

      expect(result).toBe('2023-04-20');
    });

    it('should return empty string if date is falsy (deprecated overload)', () => {
      expect(formatDateToIsoStringWithoutTimezoneOffset(null as unknown as Date)).toBe('');
    });
  });

  // ---------------------------------------------------------------------------------------------
  // getUnixTimestamp
  // ---------------------------------------------------------------------------------------------
  describe('getUnixTimestamp', () => {
    it('should return a correct Unix timestamp for a valid date string', () => {
      // 2023-04-20T12:30:00Z -> 1681993800 (this depends on the actual date/time)
      const timestamp = getUnixTimestamp(validIsoString);

      expect(timestamp).toBe(1681993800);
    });
    it('should return NaN for invalid date string', () => {
      expect(getUnixTimestamp(invalidIsoString)).toBeNaN();
    });
  });

  // ---------------------------------------------------------------------------------------------
  // isSameDay
  // ---------------------------------------------------------------------------------------------
  describe('isSameDay', () => {
    it('should return true if both dates are the same day', () => {
      const anotherDateSameDay = new Date(Date.UTC(2023, 3, 20, 0, 0, 0));

      expect(isSameDay(testDate, anotherDateSameDay)).toBe(true);
    });

    it('should return false if dates are different', () => {
      const differentDate = new Date(Date.UTC(2023, 3, 21, 12, 30, 0));

      expect(isSameDay(testDate, differentDate)).toBe(false);
    });
  });

  // ---------------------------------------------------------------------------------------------
  // getIsoDateOnly
  // ---------------------------------------------------------------------------------------------
  describe('getIsoDateOnly', () => {
    afterEach(() => {
      // Unregister after each test so the next test can set a fresh time zone
      timezoneMock.unregister();
    });

    it('should reflect an earlier local date in US/Pacific (Pacific Time)', () => {
      // Force local time zone to PST (UTC-8)
      timezoneMock.register('US/Pacific');

      // Same absolute moment in UTC: 2023-01-05T02:00:00Z
      const date = new Date('2023-01-05T02:00:00Z');

      // => Local time would be 2023-01-04T18:00:00 in PST
      // So getIsoDateOnly should yield "2023-01-04"
      expect(getIsoDateOnly(date)).toBe('2023-01-04');
    });

    it('should remain the same day in UTC', () => {
      timezoneMock.register('UTC');
      const date = new Date('2023-01-05T02:00:00Z');

      // In UTC, local time = absolute time => 2023-01-05T02:00:00
      expect(getIsoDateOnly(date)).toBe('2023-01-05');
    });

    it('should reflect a later local date in Asia/Tokyo (JST)', () => {
      timezoneMock.register('Etc/GMT-9');
      const date = new Date('2023-01-05T16:00:00Z');

      // JST is UTC+9 => Local time = 2023-01-06T01:00:00
      expect(getIsoDateOnly(date)).toBe('2023-01-06');
    });
  });

  // ---------------------------------------------------------------------------------------------
  // isWithinBounds
  // ---------------------------------------------------------------------------------------------
  describe('isWithinBounds', () => {
    const min = new Date('2023-04-01');
    const max = new Date('2023-04-30');

    it('should return true if single date is within bounds', () => {
      expect(isWithinBounds(new Date('2023-04-20'), min, max)).toBe(true);
    });
    it('should return false if single date is before minDate', () => {
      expect(isWithinBounds(new Date('2023-03-31'), min, max)).toBe(false);
    });
    it('should return false if single date is after maxDate', () => {
      expect(isWithinBounds(new Date('2023-05-01'), min, max)).toBe(false);
    });

    it('should return true if date range is within bounds', () => {
      expect(isWithinBounds([new Date('2023-04-10'), new Date('2023-04-20')], min, max)).toBe(true);
    });
    it('should return false if the start of range is before minDate', () => {
      expect(isWithinBounds([new Date('2023-03-31'), new Date('2023-04-20')], min, max)).toBe(
        false,
      );
    });
    it('should return false if the end of range is after maxDate', () => {
      expect(isWithinBounds([new Date('2023-04-20'), new Date('2023-05-02')], min, max)).toBe(
        false,
      );
    });

    describe('Only minDate (no maxDate)', () => {
      const minOnly = new Date('2023-04-10');

      it('should return true for single date on or after minDate', () => {
        expect(isWithinBounds(new Date('2023-04-10'), minOnly)).toBe(true);
        expect(isWithinBounds(new Date('2023-04-15'), minOnly)).toBe(true);
      });

      it('should return false for single date before minDate', () => {
        expect(isWithinBounds(new Date('2023-04-09'), minOnly)).toBe(false);
      });

      it('should return true for date range fully on or after minDate', () => {
        expect(isWithinBounds([new Date('2023-04-10'), new Date('2023-04-12')], minOnly)).toBe(
          true,
        );
      });

      it('should return false for date range that starts before minDate', () => {
        expect(isWithinBounds([new Date('2023-04-09'), new Date('2023-04-12')], minOnly)).toBe(
          false,
        );
      });
    });

    describe('Only maxDate (no minDate)', () => {
      const maxOnly = new Date('2023-04-20');

      it('should return true for single date on or before maxDate', () => {
        expect(isWithinBounds(new Date('2023-04-20'), undefined, maxOnly)).toBe(true);
        expect(isWithinBounds(new Date('2023-04-15'), undefined, maxOnly)).toBe(true);
      });

      it('should return false for single date after maxDate', () => {
        expect(isWithinBounds(new Date('2023-04-21'), undefined, maxOnly)).toBe(false);
      });

      it('should return true for date range fully on or before maxDate', () => {
        expect(
          isWithinBounds([new Date('2023-04-10'), new Date('2023-04-20')], undefined, maxOnly),
        ).toBe(true);
      });

      it('should return false for date range that ends after maxDate', () => {
        expect(
          isWithinBounds([new Date('2023-04-10'), new Date('2023-04-21')], undefined, maxOnly),
        ).toBe(false);
      });
    });

    describe('No bounds (minDate and maxDate are undefined)', () => {
      it('should always return true for any single date', () => {
        expect(isWithinBounds(new Date('2023-01-01'))).toBe(true);
        expect(isWithinBounds(new Date('2040-12-31'))).toBe(true);
      });

      it('should always return true for any date range', () => {
        expect(isWithinBounds([new Date('2023-01-01'), new Date('2023-01-02')])).toBe(true);
        expect(isWithinBounds([new Date('1999-12-31'), new Date('2030-01-01')])).toBe(true);
      });
    });
  });

  // ---------------------------------------------------------------------------------------------
  // parseTextAsDatetime
  // ---------------------------------------------------------------------------------------------
  describe('parseTextAsDatetime', () => {
    it('should return a date object for valid input', () => {
      // formatDatetimeAsText uses date-fns "PP, HH:mm" (abbreviated month + 24h time).
      const datetimeAsText = formatDatetimeAsText(validIsoString, 'es');
      const result = parseTextAsDatetime(datetimeAsText, 'es', true);

      expect(result).not.toBeNull();
      expect(result).toBeInstanceOf(Date);
      expect(result).toEqual(new Date(validIsoString));
    });

    it('should return a date object for valid input when showTime is false', () => {
      // Date-only branch uses date-fns token "PP".
      const datetimeAsText = formatDatetimeAsText(baseValidIsoString, 'es', false);
      const result = parseTextAsDatetime(datetimeAsText, 'es', false);

      expect(result).not.toBeNull();
      expect(result).toBeInstanceOf(Date);

      const resultFormatted = formatDatetimeAsText(result!.toISOString(), 'es', false);

      expect(resultFormatted).toBe(datetimeAsText);
    });

    it('should return a null value for invalid date', () => {
      const result = parseTextAsDatetime('wrong date', 'es', true);

      expect(result).toBeNull();
    });
  });
});
