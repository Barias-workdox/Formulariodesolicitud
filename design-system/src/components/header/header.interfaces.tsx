import type { WithTestId } from '@interfaces/common.interfaces';
import type { BorderKey } from '@tokens';
import type { SpacingKey } from '@tokens/spacing';

export type HeaderSize = 'xsmall' | 'small' | 'medium';

export type HeaderBorderRadius = Exclude<BorderKey, 'borderCircle'>;

export type EnhancerType = React.ReactNode | (() => React.ReactNode);

export interface HeaderProps extends WithTestId {
  /**
   * Header title content.
   */
  title: React.ReactNode;
  /**
   * Header size.
   */
  size?: HeaderSize;
  /**
   * Whether to show a bottom border.
   */
  borderRadius?: HeaderBorderRadius;
  /**
   * Element to show at the start of the header.
   * supported elements:
   *  - Header.Avatar
   *  - Header.BackgroundIcon
   *  - Header.Emoji
   *  - Header.Flag
   *  - Header.FileIconType
   */
  enhancer?: React.ReactNode;
  /**
   * Element to show at the end of the header.
   */
  actions?: React.ReactNode;
  /**
   * Whether the header is draggable.
   */
  isDraggable?: boolean;
  /**
   * Whether the header is disabled.
   */
  isDisabled?: boolean;
  /**
   * State of the icon button for collapse/expand.
   */
  isExpanded?: boolean;
  /**
   * Enables the button to add actions or action groups in compact sizes. (overflow menu)
   */
  iconButton?: boolean;
  /**
   * Callback for collapse/expand button click.
   */
  onCollapsibleButtonClick?(): void;
  /**
   * Callback for back button click.
   */
  onBackButtonClick?(): void;
  /**
   * Callback for close button click.
   */
  onClose?(): void;
}

export interface HeaderWrapperProps {
  $borderRadius: HeaderBorderRadius;
  $padding?: SpacingKey;
  $isDisabled?: boolean;
  $gap?: SpacingKey;
}

export interface HeaderSectionProps {
  $gap?: SpacingKey;
}
