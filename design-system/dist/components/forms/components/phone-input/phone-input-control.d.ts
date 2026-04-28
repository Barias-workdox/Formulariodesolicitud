import { FormControlProps } from '../../../form-control';
import { PhoneInputProps } from '../../../phone-input/next';
import { ControllerProps } from 'react-hook-form';
export type PhoneInputValue = Pick<PhoneInputProps, 'country' | 'text'>;
export type PhoneInputControlProps = Omit<FormControlProps, 'children'> & Omit<ControllerProps, 'render'> & Omit<PhoneInputProps, 'text' | 'onTextChange' | 'country' | 'onCountryChange'> & {
    formControlOverrides?: FormControlProps['overrides'];
};
/**
 * Component that implement a form control phone input wrapped on controller provided by react hook form
 * Handles both country and text values in a single form field
 */
export declare const PhoneInputControl: ({ "data-testid": dataTestId, name, label, disabled, caption, control, formControlOverrides, noExternalMargins, infoTooltip, required, ...rest }: PhoneInputControlProps) => JSX.Element;
