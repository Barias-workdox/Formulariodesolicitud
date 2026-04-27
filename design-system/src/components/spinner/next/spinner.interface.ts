import type { WithTestId } from '@interfaces/common.interfaces';
import type { DesignSystemColorType } from '@themes';

export type SpinnerKind = 'brand' | 'contrast' | 'custom';

export type SpinnerSize = 'small' | 'medium' | 'large';

export interface SpinnerProps extends WithTestId {
  /** Required: Define the color variant */
  kind: SpinnerKind;

  /** Required: Define the size variant */
  size: SpinnerSize;

  /** Optional: Text that accompanies the spinner */
  label?: string;

  /** Required when no visible text is present for accessibility */
  ariaLabel?: string;

  /** Blocks section or full screen with overlay (default: false) */
  fullWidth?: boolean;

  /** Determines if overlay is positioned relative to parent container (default: false) */
  isRelative?: boolean;

  /** Opacity of the overlay when in fullWidth mode (range 0-1, default: 0.8) */
  opacity?: number;

  /** Background color of the overlay in fullWidth mode (default: bgBase token) */
  backgroundColor?: DesignSystemColorType;

  /** Time in ms before showing the spinner to avoid flickering on fast loads (default: 0) */
  delay?: number;

  /** Custom color when kind is 'custom' - can be a hex color or DesignSystemTheme color token */
  customColor?: string;

  /** Custom size in pixels when size is 'custom' */
  customSize?: number;
}

export interface SpinnerConfig {
  size: number;
  strokeWidth: number;
  radius: number;
  center: number;
}

export interface SpinnerColors {
  primary: string;
  textColor: string;
}
