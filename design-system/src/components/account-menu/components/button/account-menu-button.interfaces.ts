import type { ComponentType, ReactElement, ReactNode } from 'react';

import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';

export type EnhancerType =
  | CarbonIconType
  | ComponentType<{ size?: string | number }>
  | ReactElement
  | undefined;

export interface AccountMenuButtonProps {
  /**
   * The start enhancer to display (can be a Carbon icon or React element)
   */
  startEnhancer: EnhancerType;

  /**
   * The text to display next to the icon
   */
  text: string | ReactNode;

  /**
   * Optional end enhancer (can be a Carbon icon or React element)
   */
  endEnhancer?: EnhancerType;

  /**
   * Whether the button is currently active
   */
  isActive?: boolean;

  /**
   * Whether the button is disabled
   */
  isDisabled?: boolean;

  /**
   * Whether the button is a trigger button
   */
  isTriggerButton?: boolean;

  /**
   * The variant size of the button
   */
  variant?: 'small' | 'large';

  /**
   * Accessibility label for screen readers
   */
  ariaLabel?: string;

  /**
   * Role for accessibility (e.g., 'menuitem', 'button')
   */
  role?: string;

  /**
   * Data role for keyboard navigation
   */
  dataRole?: string;

  /**
   * Whether the button has a popup menu
   */
  ariaHasPopup?: boolean | 'true' | 'false' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';

  /**
   * Whether the popup is expanded
   */
  ariaExpanded?: boolean;

  /**
   * ID of the element controlled by this button
   */
  ariaControls?: string;

  /**
   * Tab index for keyboard navigation
   */
  tabIndex?: number;

  /**
   * Whether the option is selected (for listbox options)
   */
  ariaSelected?: boolean;

  /**
   * Optional onClick handler
   */
  onClick?(): void;
}

export type OverrideParams = {
  isActive?: boolean;
  isHovered?: boolean;
  isDisabled?: boolean;
};
