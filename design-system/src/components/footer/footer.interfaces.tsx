import type { WithTestId } from '@interfaces/common.interfaces';
import type { BorderKey } from '@tokens';
import type { SpacingKey } from '@tokens/spacing';

export type FooterSize = 'small' | 'medium' | 'large';

export type FooterBorderRadius = Exclude<BorderKey, 'borderCircle'>;

export type EnhancerType = React.ReactNode | (() => React.ReactNode);

export interface FooterProps extends WithTestId {
  /**
   * Footer text content.
   */
  text?: string;
  /**
   * Footer size.
   */
  size?: FooterSize;
  /**
   * Whether to show a bottom border.
   */
  borderRadius?: FooterBorderRadius;
  /**
   * Element to show at the start of the footer.
   */
  slot?: React.ReactNode;
  /**
   * whether the footer is disabled.
   */
  isDisabled?: boolean;
  /**
   * Buttons to show in the footer.
   */
  actions?: React.ReactNode;
  /**
   * when size is small we can choose to have full width actions
   */
  fullWidthActions?: boolean;
}

export interface FooterWrapperProps {
  $borderRadius: FooterBorderRadius;
  $padding?: SpacingKey;
  $isDisabled?: boolean;
  $gap?: SpacingKey;
}

export interface FooterActionsWrapperProps {
  $gap?: SpacingKey;
}
