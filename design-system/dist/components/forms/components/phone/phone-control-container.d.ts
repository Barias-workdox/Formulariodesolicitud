import { PhoneControlProps } from './phone-control';
export type PhoneControlContainerProps = Omit<PhoneControlProps, 'control'>;
/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export declare const PhoneControlContainer: (props: PhoneControlContainerProps) => JSX.Element;
