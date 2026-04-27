import { renderHook } from '@testing-library/react';

import { dateMock, isoDateMock } from '@test/__mocks__/date.mock';
import { TEST_DEFAULT_LOCALE } from '@test/test-utils';

import { useDateUtilsWithLocale } from '../hooks/use-date-util-with-locale';
import {
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
} from '../strings/date.utils';

/** Reusable hook call */
const mockUseDateUtilsWithLocale = () => renderHook(() => useDateUtilsWithLocale());

describe('use-date-util-with-locale -- tests', () => {
  it('should validate getDateFormat correctly', () => {
    const { result } = mockUseDateUtilsWithLocale();

    expect(result.current.getDateFormat()).toEqual(getDateFormat(TEST_DEFAULT_LOCALE));
  });

  it('should validate getDatetimeFormat correctly', () => {
    const { result } = mockUseDateUtilsWithLocale();

    expect(result.current.getDatetimeFormat()).toEqual(getDatetimeFormat(TEST_DEFAULT_LOCALE));
  });

  it('should validate getDateMask correctly', () => {
    const { result } = mockUseDateUtilsWithLocale();

    expect(result.current.getDateMask()).toEqual(getDateMask(TEST_DEFAULT_LOCALE));
  });

  it('should validate formatDate correctly', () => {
    const { result } = mockUseDateUtilsWithLocale();

    expect(result.current.formatDate(isoDateMock)).toEqual(
      formatDate(isoDateMock, TEST_DEFAULT_LOCALE),
    );
  });

  it('should validate formatDatetime correctly', () => {
    const { result } = mockUseDateUtilsWithLocale();

    expect(result.current.formatDatetime(isoDateMock)).toEqual(
      formatDatetime(isoDateMock, TEST_DEFAULT_LOCALE),
    );
  });

  it('should validate format correctly', () => {
    const { result } = mockUseDateUtilsWithLocale();

    expect(result.current.format(isoDateMock, 'dd-MM-yyyy')).toEqual(
      format(isoDateMock, 'dd-MM-yyyy', TEST_DEFAULT_LOCALE),
    );
  });

  it('should validate formatDatetimeAsText correctly', () => {
    const { result } = mockUseDateUtilsWithLocale();

    expect(result.current.formatDatetimeAsText(isoDateMock)).toEqual(
      formatDatetimeAsText(isoDateMock, TEST_DEFAULT_LOCALE),
    );
  });

  it('should validate formatDateAsText correctly', () => {
    const { result } = mockUseDateUtilsWithLocale();

    expect(result.current.formatDateAsText(isoDateMock)).toEqual(
      formatDateAsText(isoDateMock, TEST_DEFAULT_LOCALE),
    );

    expect(result.current.formatDateAsText(isoDateMock, true)).toEqual(
      formatDateAsText(isoDateMock, TEST_DEFAULT_LOCALE, true),
    );
  });

  it('should validate formatDateToIsoString correctly', () => {
    const { result } = mockUseDateUtilsWithLocale();

    expect(result.current.formatDateToIsoString(dateMock)).toEqual(formatDateToIsoString(dateMock));
  });

  it('should validate dateWithoutTimezoneOffset correctly', () => {
    const { result } = mockUseDateUtilsWithLocale();

    expect(result.current.dateWithoutTimezoneOffset(isoDateMock)).toEqual(
      dateWithoutTimezoneOffset(isoDateMock),
    );
  });

  it('should validate formatDateToIsoStringWithoutTimezoneOffset correctly', () => {
    const { result } = mockUseDateUtilsWithLocale();

    expect(result.current.formatDateToIsoStringWithoutTimezoneOffset(dateMock)).toEqual(
      formatDateToIsoStringWithoutTimezoneOffset(dateMock),
    );
  });
});
