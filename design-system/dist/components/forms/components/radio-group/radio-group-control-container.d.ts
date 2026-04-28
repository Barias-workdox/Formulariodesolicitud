import { RadioGroupControlProps } from './radio-group-control';
export type RadioGroupControlContainerProps = Omit<RadioGroupControlProps, 'control'>;
/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export declare const RadioGroupControlContainer: (props: RadioGroupControlContainerProps) => JSX.Element;
