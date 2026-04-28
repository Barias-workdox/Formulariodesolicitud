import { ReactElement } from 'react';
import { DatepickerProps } from '../../../datepicker/next';
import { FormControlProps } from '../../../form-control';
import { ControllerProps } from 'react-hook-form';
export type DatePickerControlProps = Omit<FormControlProps, 'children'> & Omit<DatepickerProps, 'inputRef'> & Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
};
/**
 * Component that implement a form control datePicker wrapped on controller provided by react hook form
 *
 * Will save an array of 1 date object if `range` is false and 2 dates if `range` is true in the form value
 */
export declare const DatePickerControl: ({ "data-testid": dataTestId, name, label, disabled, caption, defaultValue, control, formControlOverrides, placeholder, range, minDate, enableInputBlur, noExternalMargins, infoTooltip, required, ...rest }: DatePickerControlProps) => ReactElement;
