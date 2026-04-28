import { UserMultiselectProps, UserType } from '../../user-multiselect';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export interface UsersListProps extends WithTestId {
    users: UserMultiselectProps['users'];
    checkedUsers: UserMultiselectProps['checkedUsers'];
    /** Placeholder to be displayed in the component input */
    placeholder?: string;
    /** New selected users list updated by the user and triggered when the save button is pressed */
    updateCheckedUsers(updatedUsers: UserType[]): void;
}
/**
 * Returns a list of users, first the selected and then the rest of the unselected
 * ordered lexicographically
 */
export declare const getSortedUsers: (users: UserType[], checkedUsers: UserType[]) => UserType[];
/**
 * Component used on the popover content to display a list of selectable users.
 *
 * The list renders first the selected users and then the rest of the unselected users,
 * when the list is empty return a message `not found`.
 *
 * Has a search input to filter users
 *
 * The save button will be disabled as long as the selected users are equal to the checkedUsers
 *
 * The checkedUsers will only be saved when the button is clicked.
 */
export declare const UsersList: ({ dataTestId, users, checkedUsers, placeholder, updateCheckedUsers, }: UsersListProps) => JSX.Element;
