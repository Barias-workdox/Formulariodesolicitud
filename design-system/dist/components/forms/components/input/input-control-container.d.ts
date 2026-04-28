import { InputControlProps } from './input-control';
export type InputControlContainerProps = Omit<InputControlProps, 'control'>;
/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export declare const InputControlContainer: (props: InputControlContainerProps) => JSX.Element;
