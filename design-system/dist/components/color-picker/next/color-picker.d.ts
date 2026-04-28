import { InputProps } from '../../input/next';
export interface ColorPickerProps extends Omit<InputProps, 'type'> {
    value?: string;
}
/**
 * A component that allows users to input a color value with hex format.
 */
export declare const ColorPicker: import('react').ForwardRefExoticComponent<ColorPickerProps & import('react').RefAttributes<HTMLInputElement>>;
