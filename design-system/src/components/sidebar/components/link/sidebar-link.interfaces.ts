import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import type { StyleObject } from 'styletron-react';

export interface SidebarLinkProps {
  /**
   * The URL to navigate to when clicking the link
   */
  href: string;

  /**
   * The icon to display (must be a Carbon icon)
   */
  Icon?: CarbonIconType;

  /**
   * The text to display next to the icon
   */
  text?: string;

  /**
   * Optional counter to display on sublink items (used in hover overlay).
   */
  counter?: number;

  /**
   * Whether the link is currently active
   */
  isActive?: boolean;

  /**
   * Whether the link is an avatar
   */
  isAvatar?: boolean;

  /**
   * Whether the link is disabled
   */
  isDisabled?: boolean;

  /**
   * Whether the link is external (opens in new tab)
   */
  isExternal?: boolean;

  /**
   * When true (default), the text is hidden when the sidebar is collapsed (responsive behavior).
   * When false, the text is always shown next to the icon regardless of collapse state.
   */
  hideTextWhenCollapsed?: boolean;

  /**
   * The sublinks to display
   */
  subLinks?: SidebarLinkProps[];

  /**
   * The variant size of the sidebar link
   */
  variant?: 'small' | 'large';

  /**
   * The aria-label attribute for accessibility.
   */
  ariaLabel?: string;

  /**
   * The tabIndex attribute to control keyboard navigation order.
   */
  tabIndex?: number;

  /**
   * The role attribute for ARIA roles.
   */
  role?: string;

  /**
   * The data-role attribute for custom data roles.
   */
  dataRole?: string;

  /**
   * The aria-haspopup attribute to indicate the presence of a popup.
   */
  ariaHasPopup?: string;

  /**
   * The aria-expanded attribute to indicate the expanded/collapsed state.
   */
  ariaExpanded?: boolean;

  /**
   * The aria-controls attribute to reference the controlled element.
   */
  ariaControls?: string;

  /**
   * The aria-selected attribute to indicate selection state.
   */
  ariaSelected?: boolean;

  /**
   * Optional keyboard event handler for keydown events.
   */
  onKeyDown?(event: React.KeyboardEvent): void;

  /**
   * Optional onClick handler
   */
  onClick?(): void;
}

export type SidebarLinkOverrides = {
  Text: { style: StyleObject };
  CollapsedText: { style: StyleObject };
  IconWrapper: { style: StyleObject };
  Avatar: { style: StyleObject };
  Initials: { style: StyleObject };
  Root: { style: StyleObject };
};

export type OverrideParams = {
  isAvatar?: boolean;
  isActive?: boolean;
  isHovered?: boolean;
  isDisabled?: boolean;
  isCollapsed?: boolean;
  hideTextWhenCollapsed?: boolean;
};
