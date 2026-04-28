import { ColorPickerProps } from '../../../color-picker/next/color-picker';
import { FormControlProps } from '../../../form-control';
import { ControllerProps } from 'react-hook-form';
export type ColorPickerControlProps = Omit<FormControlProps, 'children'> & ColorPickerProps & Omit<ControllerProps, 'render'>;
/**
 * Component that requires a controller from the form context and implements Radio Group form control
 * from DS
 */
export declare const ColorPickerControl: ({ "data-testid": dataTestId, name, label, disabled, caption, control, defaultValue, infoTooltip, noExternalMargins, required, ...rest }: ColorPickerControlProps) => JSX.Element;
