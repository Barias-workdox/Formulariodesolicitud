import { EntitiesMultiselectControlProps } from './entities-multiselect-control';
export type EntitiesMultiselectControlContainerProps = Omit<EntitiesMultiselectControlProps, 'control'>;
/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export declare const EntitiesMultiselectControlContainer: (props: EntitiesMultiselectControlContainerProps) => JSX.Element;
