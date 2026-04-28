import { UserSelectControlProps } from './user-select-control';
export type UserSelectControlContainerProps = Omit<UserSelectControlProps, 'control'>;
/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export declare const UserSelectControlContainer: (props: UserSelectControlContainerProps) => JSX.Element;
