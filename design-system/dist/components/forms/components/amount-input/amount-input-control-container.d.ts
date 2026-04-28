import { AmountInputControlProps } from './amount-input-control';
export type AmountInputControlContainerProps = Omit<AmountInputControlProps, 'control'>;
/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export declare const AmountInputControlContainer: (props: AmountInputControlContainerProps) => JSX.Element;
