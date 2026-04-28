import { ReactElement } from 'react';
import { FormControlProps } from '../../../form-control';
import { SelectProps } from '../../../select/next';
import { ControllerProps } from 'react-hook-form';
export type SelectControlProps = Pick<FormControlProps, 'label' | 'caption' | 'disabled' | 'noExternalMargins' | 'infoTooltip'> & Omit<SelectProps, 'inputRef' | 'onChange'> & Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
    /** Used only for side effects. For form handling the onChange event will trigger automatically */
    onChange?: SelectProps['onChange'];
};
/**
 * Component that implement a form control select wrapped on controller provided by react hook form
 */
export declare const SelectControl: ({ "data-testid": dataTestId, name, label, disabled, multi, options, searchable, caption, control, formControlOverrides, onChange: parentOnChange, noExternalMargins, infoTooltip, required, ...rest }: SelectControlProps) => ReactElement;
