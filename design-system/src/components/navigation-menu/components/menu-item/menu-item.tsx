import { useState } from 'react';
import type { ReactNode } from 'react';

import { noop } from '@utils/noop';

import { ItemLabel } from './components/item-label';
import { StyledLink } from './menu-item.styles';

import type { MenuItemSize } from '@components/navigation-menu/navigation-menu.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export interface MenuItemProps extends WithTestId {
  /** Optional counter to display next to the label */
  counter?: number;
  /** If true, the menu item is dimmed and non-interactive */
  disabled?: boolean;
  /** The href of the menu item */
  href?: string;
  /** The text or element representing the menu item's label */
  label: ReactNode;
  /** Controls the size of the menu item */
  size?: MenuItemSize;
  /** Element rendered at the start of the item (must be already configured) */
  startEnhancer?: ReactNode;
  /** Function to handle the click event */
  onClick?(e: React.MouseEvent<HTMLAnchorElement>): void;
}

/**
 * `MenuItem` is a component used within a navigation menu to display an interactive item.
 */
export const MenuItem = ({
  'data-testid': dataTestId = 'menu-item',
  counter,
  disabled = false,
  label,
  size = 'default',
  startEnhancer,
  href = '#',
  onClick,
}: MenuItemProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);

  /**
   * Handles the focus event for the menu item (keyboard or after click).
   */
  const handleFocus = (): void => {
    if (!disabled) setIsFocused(true);
  };

  /**
   * Handles the blur event for the menu item.
   */
  const handleBlur = (): void => setIsFocused(false);

  return (
    <StyledLink
      to={href}
      $disabled={disabled}
      $isFocused={isFocused}
      $size={size}
      data-testid={`${dataTestId}--root`}
      tabIndex={disabled ? -1 : 0}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onClick={disabled ? noop : onClick}
    >
      <ItemLabel
        data-testid={`${dataTestId}_label`}
        counter={counter}
        disabled={disabled}
        label={label}
        startEnhancer={startEnhancer}
      />
    </StyledLink>
  );
};
