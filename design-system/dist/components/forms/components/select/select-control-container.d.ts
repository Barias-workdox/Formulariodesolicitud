import { SelectControlProps } from './select-control';
export type SelectControlContainerProps = Omit<SelectControlProps, 'control'>;
/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export declare const SelectControlContainer: (props: SelectControlContainerProps) => JSX.Element;
