import { ReactElement } from 'react';
import { FormControlProps } from '../../../form-control';
import { SelectWithPaginationProps } from '../../../select-with-pagination/next';
import { ControllerProps } from 'react-hook-form';
export type SelectWithPaginationControlProps = Pick<FormControlProps, 'label' | 'caption' | 'disabled' | 'noExternalMargins' | 'infoTooltip'> & Omit<SelectWithPaginationProps, 'inputRef' | 'onChange'> & Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
};
/**
 * Component that implement a form control select wrapped on controller provided by react hook form
 */
export declare const SelectWithPaginationControl: ({ name, label, disabled, multi, options, searchable, caption, control, formControlOverrides, noExternalMargins, infoTooltip, zIndex, required, ...rest }: SelectWithPaginationControlProps) => ReactElement;
