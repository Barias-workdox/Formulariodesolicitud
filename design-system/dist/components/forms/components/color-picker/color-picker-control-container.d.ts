import { ColorPickerControlProps } from './color-picker-control';
export type ColorPickerControlContainerProps = Omit<ColorPickerControlProps, 'control'>;
/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export declare const ColorPickerControlContainer: (props: ColorPickerControlContainerProps) => JSX.Element;
