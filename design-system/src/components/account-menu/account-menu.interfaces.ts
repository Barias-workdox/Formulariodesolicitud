import type { CarbonIconType } from '@carbon/icons-react';
import type { WithTestId } from '@interfaces/common.interfaces';

export interface AccountMenuUser {
  /** User's full name */
  name: string;
  /** User's role or subtitle */
  role?: string;
  /** Additional subtitle text */
  company?: string;
  /** User's avatar image URL */
  avatarSrc?: string;
}

export interface AccountMenuAction {
  /** Unique identifier for the action */
  id: string;
  /** Label text to display */
  label: string;
  /** Icon to display before the label */
  icon?: CarbonIconType;
  /** Whether the action is disabled */
  disabled?: boolean;
  /** Accessibility description for screen readers */
  ariaLabel?: string;
  /** Click handler for the action */
  onClick?(): void;
}

export interface AccountMenuProps extends WithTestId {
  /** User information to display */
  user: AccountMenuUser;
  /** Array of menu actions */
  actions?: AccountMenuAction[];
  /** Text to display in the manage account button */
  manageAccountButtonText?: string;
  /** Whether to show the manage account button */
  showManageAccountButton?: boolean;
  /** Whether to show the language selector */
  showLanguageSelector?: boolean;
  /** Whether to show the tooltip on the trigger (avatar). Defaults to true. */
  showTriggerTooltip?: boolean;
  /** Accessibility label for the menu trigger button */
  triggerAriaLabel?: string;
  /** Accessibility label for the menu container */
  menuAriaLabel?: string;
  /** Whether the menu is controlled externally */
  isOpen?: boolean;
  /** Click handler for the manage account button */
  onManageAccountClick?(): void;
  /** Click handler for language changes */
  onLanguageChange?(selectedLocale: string): void;
  /** Callback when menu opens */
  onOpen?(): void;
  /** Callback when menu closes */
  onClose?(): void;
}

export interface AccountMenuTriggerProps extends WithTestId {
  /** Whether the menu is open by default */
  isMenuOpen: boolean;
  /** User information to display */
  user: AccountMenuUser;
  /** Accessibility label for the trigger button */
  ariaLabel?: string;
  /** Set the menu open state */
  setIsMenuOpen(isMenuOpen: boolean): void;
}
