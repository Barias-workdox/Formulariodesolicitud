import { Ref } from 'react';
import { WithTestId } from '../../interfaces/common.interfaces';
export type UserType = {
    fullName: string;
    email: string;
    id: number | string;
    disabled?: boolean;
};
export interface UserMultiselectProps extends WithTestId {
    name?: string;
    /** User list to be displayed in the component popover */
    users: UserType[];
    /** Users List items that are rendered selected in the popover component checkbox */
    checkedUsers: UserType[];
    /** Placeholder to be displayed in the component input */
    placeholder?: string;
    /** If true, the component can't be clicked and it appears with more opacity  */
    disabled?: boolean;
    /** If true, a loading spinner will appear on the right side of the select */
    isLoading?: boolean;
    inputRef?: Ref<HTMLDivElement>;
    /** Callback used to update the checkedUsers list when the save button is clicked  */
    onChange(updatedUsers: UserType[]): void;
}
/** Returns the text of the badge to display to the rest of CheckUsers  */
export declare const getRemainingUsersLabel: (checkedUsersTotal: number) => string;
/**
 * This component has the functionality of a Select component,
 * used to select multiple users and display only the first selected user and
 * a badge with a counter of the rest of the selected users in the value.
 *
 * The users appear in the content of a popover ordered lexicographically,
 * first the selected ones and then the rest of the unselected users. Also
 * has a search input to filter the list of users
 *
 * Cannot be extended from Select because it has a very customized behavior.
 *
 * The value displays the full name of the first CheckedUser,
 * in case there is more than one, it displays a badge with the remaining CheckUsers
 */
export declare const UserMultiselect: ({ dataTestId, name, isLoading, disabled, users, checkedUsers, placeholder, inputRef: externalInputRef, onChange, }: UserMultiselectProps) => JSX.Element;
