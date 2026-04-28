import { TextareaControlProps } from './textarea-control';
export type TextareaControlContainerProps = Omit<TextareaControlProps, 'control'>;
/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export declare const TextareaControlContainer: (props: TextareaControlContainerProps) => JSX.Element;
