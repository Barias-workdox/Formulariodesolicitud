import { ReactElement } from 'react';
import { AccountMenuProps } from './account-menu.interfaces';
/**
 * AccountMenu component displays a user's profile information and menu options in a popover.
 * It includes user details, account management link, menu actions, and language selection.
 * Implements WCAG 2.1 AA accessibility guidelines for keyboard navigation and screen readers.
 */
export declare const AccountMenu: ({ dataTestId, user, actions, showLanguageSelector, showManageAccountButton, showTriggerTooltip, manageAccountButtonText, onManageAccountClick, onLanguageChange, triggerAriaLabel, menuAriaLabel, isOpen: controlledIsOpen, onOpen, onClose, }: AccountMenuProps) => ReactElement;
