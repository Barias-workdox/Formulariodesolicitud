import { CheckboxControlProps } from './checkbox-control';
export type CheckboxControlContainerProps = Omit<CheckboxControlProps, 'control'>;
/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export declare const CheckboxControlContainer: (props: CheckboxControlContainerProps) => JSX.Element;
