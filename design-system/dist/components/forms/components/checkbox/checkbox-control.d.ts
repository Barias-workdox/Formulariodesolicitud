import { CheckboxProps } from '../../../checkbox';
import { FormControlProps } from '../../../form-control';
import { ControllerProps } from 'react-hook-form';
export type CheckboxControlProps = Omit<FormControlProps, 'children'> & CheckboxProps & Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
};
/**
 * Component that requires a controller from the form context and
 * implements Checkbox form control from DS
 */
export declare const CheckboxControl: ({ "data-testid": dataTestId, name, label, disabled, caption, control, defaultValue, infoTooltip, formControlOverrides, noExternalMargins, required, ...rest }: CheckboxControlProps) => JSX.Element;
