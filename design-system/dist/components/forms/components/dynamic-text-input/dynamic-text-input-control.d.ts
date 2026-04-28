import { ReactElement } from 'react';
import { DynamicTextInputProps } from '../../../dynamic-text-input';
import { FormControlProps } from '../../../form-control';
import { ControllerProps } from 'react-hook-form';
export type DynamicTextInputControlProps = Omit<FormControlProps, 'children'> & Omit<DynamicTextInputProps, 'value' | 'onChange' | 'onBlur'> & Omit<ControllerProps, 'render'> & {
    formControlProps?: FormControlProps;
};
/**
 * Component that implements an DynamicTextInput wrapped on Controller provided by react hook form
 */
export declare const DynamicTextInputControl: ({ "data-testid": dataTestId, name, control, label, disabled, caption, defaultValue, formControlProps, variant, fontWeight, endEnhancer, placeholder, }: DynamicTextInputControlProps) => ReactElement;
