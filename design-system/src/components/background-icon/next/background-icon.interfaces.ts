import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import type { CommonHeight } from '@constants/common.constants';
import type { WithTestId } from '@interfaces/common.interfaces';
import type { DesignSystemColorType } from '@themes';

/**
 * Supported sizes for the BackgroundIcon component.
 * - 24px: Small size for compact layouts
 * - 32px: Medium size for standard layouts
 * - 44px: Large size for prominent displays
 */
export type BackgroundIconSize = Extract<CommonHeight, '24px' | '32px' | '44px'>;

/**
 * Semantic color kinds for the BackgroundIcon component.
 * Each kind represents a specific semantic meaning or use case.
 */
export type BackgroundIconKind =
  | 'brand' // Primary brand color for key actions and brand elements
  | 'neutral' // Default neutral color for secondary elements
  | 'positive' // Success states and positive outcomes
  | 'negative' // Error states and destructive actions
  | 'warning' // Warning states and caution messages
  | 'peace' // Documents, import, classification, and info states
  | 'power' // Requests, companies, and new features
  | 'sweet' // Pleasant, soft experiences
  | 'heat'; // New features and onboarding

/**
 * Visual appearance variants for the BackgroundIcon.
 * - filled: Solid background with contrasting icon
 * - tonal: Subtle background with matching icon
 */
export type BackgroundIconAppearance = 'filled' | 'tonal';

/**
 * Shape variants for the BackgroundIcon container.
 * - round: Circular shape
 * - square: Square shape with rounded corners
 */
export type BackgroundIconShape = 'round' | 'square';

/**
 * Props for the styled root component of the BackgroundIcon.
 */
export interface StyledRootProps {
  /** The background color token */
  $backgroundColor: DesignSystemColorType;
  /** The size of the container */
  $size: BackgroundIconSize;
  /** The shape of the container */
  $shape: BackgroundIconShape;
  /** Whether the component is disabled */
  $disabled: boolean;
}

/**
 * Props for the styled icon wrapper.
 */
export interface StyledIconProps {
  /** The icon color token */
  $iconColor: DesignSystemColorType;
  /** Whether the component is disabled */
  $disabled: boolean;
}

/**
 * Color configuration for a specific kind and appearance combination.
 */
export interface ColorConfig {
  /** Background color token */
  backgroundColor: DesignSystemColorType;
  /** Icon color token */
  iconColor: DesignSystemColorType;
}

/**
 * Main props interface for the BackgroundIcon component.
 */
export interface BackgroundIconProps extends WithTestId {
  /** The Carbon icon component to render (from Carbon icons library) */
  icon: CarbonIconType;
  /** The size of the container (default: "32px") */
  size?: BackgroundIconSize;
  /** The semantic color kind (default: "brand") */
  kind?: BackgroundIconKind;
  /** The visual appearance variant (default: "filled") */
  appearance?: BackgroundIconAppearance;
  /** The shape of the container (default: "round") */
  shape?: BackgroundIconShape;
  /** Whether the component is disabled (default: false) */
  disabled?: boolean;
  /** Whether to show a badge (only available for 'brand' and 'neutral' kinds) */
  badge?: boolean;
}
