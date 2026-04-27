import { getRangeValue, isDifferentDateIgnoringTime } from '../calendar.utils';

describe('isDifferentDateIgnoringTime', () => {
  it('should return false if both values are null', () => {
    expect(isDifferentDateIgnoringTime(null, null)).toBe(false);
  });

  it('should return true if one value is null and the other is not', () => {
    expect(isDifferentDateIgnoringTime(new Date(), null)).toBe(true);
    expect(isDifferentDateIgnoringTime(null, new Date())).toBe(true);
  });

  it('should return false if both single-date values represent the same day', () => {
    const dateA = new Date('2023-06-01T10:00:00Z');
    const dateB = new Date('2023-06-01T23:59:59Z');

    expect(isDifferentDateIgnoringTime(dateA, dateB)).toBe(false);
  });

  it('should return true if both single-date values represent different days', () => {
    const dateA = new Date('2023-06-01T10:00:00Z');
    const dateB = new Date('2023-06-02T09:00:00Z');

    expect(isDifferentDateIgnoringTime(dateA, dateB)).toBe(true);
  });

  it('should return true if one value is an array and the other is a single date', () => {
    const dateA = new Date('2023-06-01');
    const dateB = [new Date('2023-06-01'), new Date('2023-06-02')];

    expect(isDifferentDateIgnoringTime(dateA, dateB)).toBe(true);
  });

  it('should return false if both arrays have the same length and same days (ignoring time)', () => {
    const datesA = [new Date('2023-06-01T00:00:00Z'), new Date('2023-06-02T12:34:56Z')];
    const datesB = [new Date('2023-06-01T23:59:59Z'), new Date('2023-06-02T00:00:00Z')];

    expect(isDifferentDateIgnoringTime(datesA, datesB)).toBe(false);
  });

  it('should return true if arrays have different lengths', () => {
    const datesA = [new Date('2023-06-01'), new Date('2023-06-02')];
    const datesB = [new Date('2023-06-01')];

    expect(isDifferentDateIgnoringTime(datesA, datesB)).toBe(true);
  });

  it('should return true if at least one element in arrays differs by day', () => {
    const datesA = [new Date('2023-06-01'), new Date('2023-06-02')];
    const datesB = [new Date('2023-06-01'), new Date('2023-06-03')];

    expect(isDifferentDateIgnoringTime(datesA, datesB)).toBe(true);
  });
});

describe('getRangeValue', () => {
  it('should return an empty array if input is null or undefined', () => {
    expect(getRangeValue(null)).toEqual([]);
    expect(getRangeValue(undefined)).toEqual([]);
  });

  it('should return a two-element array if a single Date is provided', () => {
    const date = new Date('2023-06-01');

    expect(getRangeValue(date)).toEqual([date, null]);
  });

  it('should return a two-element array if a single date-string is provided', () => {
    const dateStr = '2023-06-01T00:00:00Z';
    const result = getRangeValue(dateStr);

    expect(result).toHaveLength(2);
    expect(result[0]).toBeInstanceOf(Date);
    expect(result[1]).toBeNull();
  });

  it('should return the same array if already an array of Date objects', () => {
    const dates = [new Date('2023-06-01'), new Date('2023-06-02')];

    expect(getRangeValue(dates)).toEqual(dates);
  });

  it('should convert each string in an array to a Date object', () => {
    const dateArray = ['2023-06-01T00:00:00Z', '2023-06-02T15:45:00Z'];
    const result = getRangeValue(dateArray);

    expect(result[0]).toBeInstanceOf(Date);
    expect(result[1]).toBeInstanceOf(Date);
  });

  it('should handle arrays with mixed Date and string types', () => {
    const mixedArray = [new Date('2023-06-01'), '2023-06-02'];
    const result = getRangeValue(mixedArray);

    expect(result[0]).toBeInstanceOf(Date);
    expect(result[1]).toBeInstanceOf(Date);
  });
});
