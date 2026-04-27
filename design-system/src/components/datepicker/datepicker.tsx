import { forwardRef, useCallback, useEffect, useMemo, useRef } from 'react';

import { Datepicker as BaseDatepicker } from 'baseui/datepicker';
import { isValid, parse } from 'date-fns';

import { mergeOverridesDeep } from '@components/utils/baseui/helpers';

import { getDatepickerOverrides } from './datepicker.overrides';

import type { InputKind } from '../input/input';
import type {
  DatepickerProps as BaseDatePickerProps,
  DatepickerOverrides,
} from 'baseui/datepicker';

export type DatepickerProps = BaseDatePickerProps & {
  'data-testid'?: string;
  kind?: InputKind;
  /** Used to remove custom implementation of input blur that breaks with `range` enabled, true by default */
  enableInputBlur?: boolean;
  /**
   * A Prop required to work with zIndex of `DocumentViewerModal` legacy component
   *
   * @deprecated Only required for legacy support with `DocumentViewerModal`
   */
  zIndex?: number;
};

/**
 * DS Datepicker component
 * Status: WIP
 * Link: https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?node-id=471%3A5580
 *
 * Missing things from design system:
 *  - Styling fields that are added with prop "quickSelect"
 */
export const Datepicker = forwardRef<BaseDatepicker, DatepickerProps>(function DatepickerInner(
  {
    'data-testid': dataTestId = 'datepicker',
    kind = 'gray',
    maxDate = new Date('2071-01-01'),
    enableInputBlur = true,
    zIndex,
    overrides,
    onChange,
    ...rest
  },
  ref,
) {
  /** Reference of the datepicker value to get its value within the onInputBlur function */
  const valueRef = useRef<Date | Date[]>();
  /** Reference of the input to get its value within the onInputBlur function */
  const inputRef = useRef<HTMLInputElement>(null);
  const { formatString = '' } = rest;

  const baseOverrides = getDatepickerOverrides({ ref, inputRef, dataTestId, zIndex, $kind: kind });

  const mergedOverrides: DatepickerOverrides = useMemo(
    () => mergeOverridesDeep(baseOverrides, overrides),
    [baseOverrides, overrides],
  );

  /**
   * When the input loses the focus, we evaluated if the value complies with the date format specified by the formatString prop.
   * If it does not comply with the format, it will then restart with an undefined value.
   *
   * Only applies when `range` is false.
   */
  const onInputBlur = useCallback(
    (e: FocusEvent): void => {
      const { value: inputValue } = e.target as HTMLInputElement;
      const value = valueRef.current;

      if (inputValue) {
        const parsedDate = parse(
          inputValue.replace(/\D/g, '-'),
          formatString.replace(/\W/g, '-'),
          new Date(),
        );

        // If the written date value is an empty string we will set the date value as undefined
        // Also, if the component value is a valid Date but the input string is not valid we will change its value as undefined
        if (inputValue === '' || (value != null && !isValid(parsedDate))) {
          onChange({ date: undefined });
        }
      }
    },
    [formatString, onChange],
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
  }, [enableInputBlur, onInputBlur]);

  /**
   * In order to use the value of the date from the properties as a reference within the onInputBlur function
   * we must update its current value to valueRef
   */
  function handleOnChange(updatedValue: { date: Date | Date[] }): void {
    valueRef.current = updatedValue.date;
    onChange(updatedValue);
  }

  return (
    <BaseDatepicker
      maxDate={maxDate}
      onChange={handleOnChange}
      overrides={mergedOverrides}
      {...rest}
    />
  );
});

Datepicker.displayName = 'Datepicker';
