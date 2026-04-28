import { FormControlProps } from '../../../form-control';
import { RadioGroupProps } from '../../../radio/radio-group.interfaces';
import { ControllerProps } from 'react-hook-form';
export type RadioGroupControlProps = Omit<FormControlProps, 'children'> & RadioGroupProps & Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
};
/**
 * Component that requires a controller from the form context and implements Radio Group form control
 * from DS
 */
export declare const RadioGroupControl: ({ "data-testid": dataTestId, name, label, disabled, caption, control, defaultValue, infoTooltip, formControlOverrides, noExternalMargins, required, ...rest }: RadioGroupControlProps) => JSX.Element;
