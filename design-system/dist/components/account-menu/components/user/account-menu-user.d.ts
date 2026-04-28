import { ReactElement } from 'react';
import { AccountMenuProps } from '../../account-menu.interfaces';
/**
 * AccountMenuUser component displays user information in the account menu.
 * It shows the user's avatar, name, role (if available), and a link to manage the account.
 */
export declare const AccountMenuUser: ({ dataTestId, user, manageAccountButtonText, onManageAccountClick, showManageAccountButton, }: AccountMenuProps) => ReactElement;
