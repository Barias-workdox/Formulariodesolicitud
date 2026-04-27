import { useState, useRef, useCallback } from 'react';
import type { ReactElement } from 'react';

import { ChevronDown, ChevronUp } from '@carbon/icons-react';
import { StatefulPopover } from 'baseui/popover';

import { Avatar } from '@components/avatar/next/avatar';
import { usePopperRefresh } from '@hooks/use-popper-refresh';

import { popoverOverrides, StyledMenuContainer, StyledMenuSection } from './account-menu.styles';
import { AccountMenuButton } from './components/button';
import { LanguageSelector } from './components/language-selector';
import { AccountMenuUser } from './components/user/account-menu-user';
import { useKeyboardNavigation } from './hooks/use-keyboard-navigation';

import type { AccountMenuProps } from './account-menu.interfaces';

/**
 * AccountMenu component displays a user's profile information and menu options in a popover.
 * It includes user details, account management link, menu actions, and language selection.
 * Implements WCAG 2.1 AA accessibility guidelines for keyboard navigation and screen readers.
 */
export const AccountMenu = ({
  dataTestId = 'account-menu',
  user,
  actions = [],
  showLanguageSelector = true,
  showManageAccountButton = true,
  showTriggerTooltip = true,
  manageAccountButtonText,
  onManageAccountClick,
  onLanguageChange,
  triggerAriaLabel,
  menuAriaLabel,
  isOpen: controlledIsOpen,
  onOpen,
  onClose,
}: AccountMenuProps): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageExpanded, setIsLanguageExpanded] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Use controlled or uncontrolled state
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : isMenuOpen;

  // Generate unique IDs for accessibility
  const menuId = `${dataTestId}-menu`;

  /**
   * Handles opening the menu
   */
  const handleOpen = useCallback(() => {
    onOpen?.();

    // If the component is uncontrolled, sync internal state with the popover
    if (controlledIsOpen === undefined) {
      setIsMenuOpen(true);
    }
  }, [controlledIsOpen, onOpen]);

  /**
   * Handles closing the menu
   */
  const handleClose = useCallback(() => {
    onClose?.();

    // If the component is uncontrolled, sync internal state with the popover
    if (controlledIsOpen === undefined) {
      setIsMenuOpen(false);
    }

    setIsLanguageExpanded(false);
  }, [controlledIsOpen, onClose]);

  /**
   * Handles focusing the trigger button
   */
  const handleFocusTrigger = useCallback(() => {
    triggerRef.current?.focus();
  }, []);

  /**
   * Handles language selector expansion
   */
  const handleLanguageExpansion = useCallback((expanded: boolean) => {
    setIsLanguageExpanded(expanded);
  }, []);

  // Keyboard navigation hook
  const { menuRef, handleKeyDown } = useKeyboardNavigation({
    isOpen,
    isLanguageExpanded,
    onClose: handleClose,
    onToggleLanguage: () => setIsLanguageExpanded(!isLanguageExpanded),
    onFocusTrigger: handleFocusTrigger,
  });

  // Popper refresh hook for dynamic positioning
  const popperRefreshOptions = usePopperRefresh();

  // Default accessibility labels
  const defaultTriggerAriaLabel = triggerAriaLabel || `Account menu for ${user.name}`;
  const defaultMenuAriaLabel = menuAriaLabel || 'Account menu options';

  return (
    <StatefulPopover
      placement="topRight"
      overrides={popoverOverrides}
      autoFocus={false}
      popperOptions={popperRefreshOptions}
      onOpen={handleOpen}
      onClose={handleClose}
      content={() => (
        <StyledMenuContainer
          ref={menuRef}
          id={menuId}
          data-testid={`${dataTestId}-menu`}
          role="menu"
          aria-label={defaultMenuAriaLabel}
          aria-orientation="vertical"
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          {/* User Section */}
          <AccountMenuUser
            user={user}
            {...{ showManageAccountButton, manageAccountButtonText, onManageAccountClick }}
          />

          {/* Menu Actions */}
          <StyledMenuSection
            role="group"
            aria-label="Menu actions"
          >
            {actions.length > 0 ? (
              <>
                <AccountMenuButton
                  key={actions[0].id}
                  startEnhancer={actions[0].icon}
                  text={actions[0].label}
                  onClick={actions[0].onClick}
                  isDisabled={actions[0].disabled}
                  ariaLabel={actions[0].ariaLabel || actions[0].label}
                  role="menuitem"
                  tabIndex={0}
                  variant="small"
                />

                {showLanguageSelector && (
                  <LanguageSelector
                    dataTestId={`${dataTestId}-language-selector`}
                    onLanguageChange={onLanguageChange}
                    onExpansionChange={handleLanguageExpansion}
                  />
                )}

                {actions.slice(1).map((action) => (
                  <AccountMenuButton
                    key={action.id}
                    startEnhancer={action.icon}
                    text={action.label}
                    onClick={action.onClick}
                    isDisabled={action.disabled}
                    ariaLabel={action.ariaLabel || action.label}
                    role="menuitem"
                    tabIndex={0}
                    variant="small"
                  />
                ))}
              </>
            ) : (
              showLanguageSelector && (
                <LanguageSelector
                  dataTestId={`${dataTestId}-language-selector`}
                  onLanguageChange={onLanguageChange}
                  onExpansionChange={handleLanguageExpansion}
                />
              )
            )}
          </StyledMenuSection>
        </StyledMenuContainer>
      )}
    >
      <AccountMenuButton
        ref={triggerRef}
        isTriggerButton
        text={user.name.trim().split(' ')[0]}
        startEnhancer={
          <Avatar
            name={user.name}
            size="24px"
            src={user.avatarSrc}
            showTooltip={showTriggerTooltip}
          />
        }
        endEnhancer={isOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        ariaLabel={defaultTriggerAriaLabel}
        role="button"
        ariaHasPopup="menu"
        ariaExpanded={isOpen}
        tabIndex={0}
      />
    </StatefulPopover>
  );
};
