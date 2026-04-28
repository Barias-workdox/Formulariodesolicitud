import { ReactElement } from 'react';
import { FormControlProps } from '../../../form-control';
import { InputProps } from '../../../input/next';
import { ControllerProps } from 'react-hook-form';
export type InputControlProps = Omit<FormControlProps, 'children'> & Omit<InputProps, 'inputRef'> & Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
};
/**
 * Component that implement a form control input wrapped on controller provided by react hook form
 */
export declare const InputControl: ({ "data-testid": dataTestId, name, label, disabled, caption, defaultValue, control, formControlOverrides, noExternalMargins, infoTooltip, required, ...rest }: InputControlProps) => ReactElement;
