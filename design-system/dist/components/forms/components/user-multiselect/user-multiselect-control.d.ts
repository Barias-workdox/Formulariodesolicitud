import { ReactElement } from 'react';
import { FormControlProps } from '../../../form-control';
import { UserMultiselectProps } from '../../../user-multiselect';
import { ControllerProps } from 'react-hook-form';
export type UserMultiselectControlProps = Pick<FormControlProps, 'label' | 'caption' | 'disabled' | 'noExternalMargins' | 'infoTooltip'> & Omit<UserMultiselectProps, 'containerRef' | 'onChange'> & Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
};
/**
 * Component that implement a form control user multi select wrapped on controller provided by react hook form
 */
export declare const UserMultiselectControl: ({ name, label, disabled, users, caption, control, formControlOverrides, noExternalMargins, checkedUsers, infoTooltip, ...rest }: UserMultiselectControlProps) => ReactElement;
