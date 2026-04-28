import { ButtonProps } from '../button.interfaces';
type ButtonSpinnerProps = Required<Pick<ButtonProps, 'disabled' | 'kind' | 'appearance'>>;
/**
 * Spinner component for the button.
 */
export declare const ButtonSpinner: ({ disabled, kind, appearance }: ButtonSpinnerProps) => JSX.Element;
export {};
