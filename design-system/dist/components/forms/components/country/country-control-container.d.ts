import { CountryControlProps } from './country-control';
export type CountryControlContainerProps = Omit<CountryControlProps, 'control'>;
/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export declare const CountryControlContainer: (props: CountryControlContainerProps) => JSX.Element;
