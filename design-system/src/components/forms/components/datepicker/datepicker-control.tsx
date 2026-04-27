import type { ReactElement } from 'react';

import { Controller } from 'react-hook-form';

import { Datepicker } from '@components/datepicker/next';
import { FormControl } from '@components/form-control';
import { useDateUtilsWithLocale } from '@components/utils/hooks/use-date-util-with-locale';
import { useLocale } from '@contexts/locale-provider';

import type { DatepickerProps } from '@components/datepicker/next';
import type { FormControlProps } from '@components/form-control';
import type { ControllerProps } from 'react-hook-form';

export type DatePickerControlProps = Omit<FormControlProps, 'children'> &
  Omit<DatepickerProps, 'inputRef'> &
  Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
  };

/** Minimum date to accept in the datePicker by default. Can be overrode by properties */
const DEFAULT_MIN_DATE = new Date(new Date().getFullYear() - 100, 0, 1);

/**
 * Component that implement a form control datePicker wrapped on controller provided by react hook form
 *
 * Will save an array of 1 date object if `range` is false and 2 dates if `range` is true in the form value
 */
export const DatePickerControl = ({
  'data-testid': dataTestId,
  name,
  label,
  disabled,
  caption,
  defaultValue,
  control,
  formControlOverrides,
  placeholder,
  range,
  minDate = DEFAULT_MIN_DATE,
  /** Remove this by default because it breaks when `range` is true. Use under your own risk */
  enableInputBlur = false,
  noExternalMargins,
  infoTooltip,
  required,
  ...rest
}: DatePickerControlProps): ReactElement => {
  const { dateLocale } = useLocale();
  const { getDateFormat, getDateMask } = useDateUtilsWithLocale();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { ref, onChange, ...field }, fieldState: { error } }): ReactElement => {
        return (
          <FormControl
            label={label}
            disabled={disabled}
            caption={caption}
            error={error?.message}
            htmlFor={name}
            labelWithHorizontalPadding
            overrides={formControlOverrides}
            noExternalMargins={noExternalMargins}
            infoTooltip={infoTooltip}
            required={required}
          >
            <Datepicker
              {...field}
              inputRef={ref}
              data-testid={dataTestId}
              placeholder={placeholder ?? getDateFormat().toUpperCase()}
              locale={dateLocale}
              // Will not work for range true
              mask={!range ? getDateMask() : undefined}
              // Will not work for range true
              formatString={!range ? getDateFormat() : undefined}
              minDate={minDate}
              onChange={({ date }): void => onChange(date)}
              range={range}
              enableInputBlur={enableInputBlur}
              {...rest}
            />
          </FormControl>
        );
      }}
    />
  );
};
