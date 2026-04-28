import { SwitchControlProps } from './switch-control';
export type SwitchControlContainerProps = Omit<SwitchControlProps, 'control'>;
/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export declare const SwitchControlContainer: (props: SwitchControlContainerProps) => JSX.Element;
