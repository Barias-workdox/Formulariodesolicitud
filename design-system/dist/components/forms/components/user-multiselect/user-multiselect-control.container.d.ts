import { UserMultiselectControlProps } from './user-multiselect-control';
export type UserMultiselectControlContainerProps = Omit<UserMultiselectControlProps, 'control'>;
/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export declare const UserMultiselectControlContainer: (props: UserMultiselectControlContainerProps) => JSX.Element;
