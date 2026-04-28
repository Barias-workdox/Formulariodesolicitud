import { ReactElement } from 'react';
import { FormControlProps } from '../../../form-control';
import { UserSelectProps } from '../../../user-select';
import { ControllerProps } from 'react-hook-form';
export type UserSelectControlProps = Pick<FormControlProps, 'label' | 'caption' | 'disabled' | 'noExternalMargins' | 'infoTooltip'> & Omit<UserSelectProps, 'inputRef' | 'onChange'> & Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
};
/**
 * Component that implement a form control user select wrapped on controller provided by react hook form
 */
export declare const UserSelectControl: ({ name, label, disabled, options, caption, control, formControlOverrides, noExternalMargins, infoTooltip, required, ...rest }: UserSelectControlProps) => ReactElement;
