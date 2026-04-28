import { ReactElement } from 'react';
import { FormControlProps } from '../../../form-control';
import { EntitiesMultiSelectProps } from '../../../entities-multiselect/entities-multiselect.types';
import { ControllerProps } from 'react-hook-form';
export type EntitiesMultiselectControlProps = Pick<FormControlProps, 'label' | 'caption' | 'disabled' | 'noExternalMargins' | 'infoTooltip'> & Omit<EntitiesMultiSelectProps, 'containerRef'> & Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
};
/**
 * Component that implement a form control user multi select wrapped on controller provided by react hook form
 */
export declare const EntitiesMultiSelectControl: ({ name, label, disabled, options, values, infoTooltip, placeholder, leading, isLoading, searchPlaceholder, peopleTotalElements, companyTotalElements, onChange: parentOnChange, onSearch, onLoadMore, noExternalMargins, caption, control, formControlOverrides, ...rest }: EntitiesMultiselectControlProps) => ReactElement;
