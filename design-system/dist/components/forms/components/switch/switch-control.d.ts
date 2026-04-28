import { FormControlProps } from '../../../form-control';
import { SwitchProps } from '../../../switch';
import { ControllerProps } from 'react-hook-form';
export type SwitchControlProps = Omit<FormControlProps, 'children'> & SwitchProps & Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
};
/**
 * Component that requires a controller from the form context and implements Radio Group form control
 * from DS
 */
export declare const SwitchControl: ({ "data-testid": dataTestId, name, label, disabled, caption, control, defaultValue, infoTooltip, formControlOverrides, noExternalMargins, ...rest }: SwitchControlProps) => JSX.Element;
