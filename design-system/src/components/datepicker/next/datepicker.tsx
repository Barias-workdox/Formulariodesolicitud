import type { ForwardedRef, Ref } from 'react';
import { forwardRef, useCallback, useEffect, useMemo, useRef } from 'react';

import { Datepicker as BaseDatepicker } from 'baseui/datepicker';
import { isAfter } from 'date-fns';
import { isNil } from 'lodash';

import { DEFAULT_KIND, DEFAULT_SIZE } from '@components/input/next';
import { useTranslation } from '@components/utils';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { useDateUtilsWithLocale } from '@components/utils/hooks/use-date-util-with-locale';
import { useSyncedRef } from '@hooks/use-synced-ref.hook';
import { noop } from '@utils/noop';

import { DATE_RANGE_SEPARATOR, DEFAULT_MAX_DATE } from './datepicker.constants';
import { getDatepickerOverrides } from './datepicker.overrides';

import type { EnhancerType, InputKind, Size } from '@components/input/next';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';
import type {
  DatepickerProps as BaseDatePickerProps,
  Datepicker as BaseDatePicker,
  DatepickerOverrides,
} from 'baseui/datepicker';
import type { StyleObject } from 'styletron-react';

export type DatepickerProps = WithTestId &
  WithZIndex &
  Omit<BaseDatePickerProps, 'size' | 'inputRef'> & {
    /** Passed to the underlying input name attribute */
    name?: string;
    /** Used to get a ref to the underlying input element */
    inputRef?: Ref<HTMLInputElement>;
    /** Used to remove custom implementation of input blur that breaks with `range` enabled, true by default */
    enableInputBlur?: boolean;
    isLoading?: boolean;
    kind?: InputKind;
    leading?: EnhancerType;
    readOnly?: boolean;
    showCopyContentButton?: boolean;
    size?: Size;
    /** Indicates the width of the input. By default is 100% */
    width?: StyleObject['width'];
  };

/**
 * Datepicker component that allows users to select dates.
 * It supports single and range date selection, custom styling, and various input enhancements.
 */
export const Datepicker = forwardRef(function DatepickerInner(
  {
    'data-testid': dataTestId = 'datepicker',
    enableInputBlur = true,
    isLoading,
    kind = DEFAULT_KIND,
    leading,
    maxDate = DEFAULT_MAX_DATE,
    name,
    inputRef: externalInputRef,
    onChange = noop,
    overrides = {},
    placeholder,
    range,
    readOnly,
    showCopyContentButton,
    size = DEFAULT_SIZE,
    value = [],
    width,
    zIndex,
    ...rest
  }: DatepickerProps,
  ref: ForwardedRef<BaseDatePicker>,
): JSX.Element {
  const { formatDatetimeAsText, parseTextAsDatetime } = useDateUtilsWithLocale();
  const { t } = useTranslation();

  const placeholderText = placeholder || t('datePicker.placeholder');

  /** Reference of the datepicker value to get its value within the onInputBlur function */
  const valueRef = useRef<Date | (Date | null | undefined)[] | null | undefined>();
  /** Reference of the input to get its value within the onInputBlur function */
  const inputRef = useSyncedRef<HTMLInputElement>({
    externalRef: externalInputRef,
  });

  const baseOverrides = getDatepickerOverrides({
    dataTestId,
    inputRef,
    name,
    isLoading,
    kind,
    leading,
    readOnly,
    ref,
    showCopyContentButton,
    size,
    width,
    zIndex,
  });

  const mergedOverrides: DatepickerOverrides = useMemo(
    () => mergeOverridesDeep(baseOverrides, overrides),
    [baseOverrides, overrides],
  );

  /**
   * When the input loses the focus, we evaluated if the value complies with the date format specified by the formatString prop.
   * If it does not comply with the format, it will then restart with an undefined value.
   */
  const onInputBlur = useCallback(
    (e: FocusEvent): void => {
      const input = e.target as HTMLInputElement;
      const inputValue = input.value.trim();

      if (!inputValue) return;

      const rawDates = inputValue.split(DATE_RANGE_SEPARATOR).map((s) => s.trim());
      const parsedDates = rawDates.map((date) => parseTextAsDatetime(date.trim()));
      const allValid = parsedDates.every((date) => date !== null);

      if (!allValid) {
        onChange({ date: undefined });

        return;
      }

      if (range) {
        const [startDate, endDate] = parsedDates;

        const isInvalidRange = isAfter(startDate!, endDate!);

        onChange({ date: isInvalidRange ? undefined : parsedDates });
      } else {
        onChange({ date: parsedDates });
      }
    },
    [onChange, parseTextAsDatetime, range],
  );

  /**
   * To validate the correct format of dates, we add a native event listener
   * since if you add it as a property override of the Input Component it will lose
   * its internal state updates.
   * We do not want dates written in the input that do not comply with the correct format.
   *
   * @example
   * An example of this would be that the formatString is mm-dd-yyyy and the written date is 01-31-20 when it should be 01-21-2020
   */
  useEffect(() => {
    const inputElement = inputRef.current;
    if (enableInputBlur && inputElement) {
      inputElement.addEventListener('blur', onInputBlur);

      return (): void => {
        inputElement.removeEventListener('blur', onInputBlur);
      };
    }
  }, [enableInputBlur, onInputBlur, inputRef]);

  /**
   * In order to use the value of the date from the properties as a reference within the onInputBlur function
   * we must update its current value to valueRef
   */
  function handleOnChange(updatedValue: {
    date: Date | (Date | null | undefined)[] | null | undefined;
  }): void {
    valueRef.current = updatedValue.date;
    onChange(updatedValue as Parameters<typeof onChange>[0]);
  }

  /**
   * In order to use the value of the date from the properties as a reference within the onInputBlur function
   * we must update its current value to valueRef
   */
  const formatDisplayValue = (
    date: Date | (Date | null | undefined)[] | null | undefined,
  ): string => {
    if (isNil(date)) return '';

    if (Array.isArray(date)) {
      return date
        .filter((d) => !isNil(d))
        .map((d) => formatDatetimeAsText(d.toString(), false))
        .join(DATE_RANGE_SEPARATOR);
    }

    return formatDatetimeAsText(date.toString(), false);
  };

  return (
    <BaseDatepicker
      maxDate={maxDate}
      onChange={handleOnChange}
      overrides={mergedOverrides}
      formatDisplayValue={formatDisplayValue}
      placeholder={placeholderText}
      range={range}
      value={value}
      {...rest}
    />
  );
});

Datepicker.displayName = 'Datepicker';
