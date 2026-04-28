import { CommonIconSize } from '../../../constants/common.constants';
import { BackgroundIconAppearance, BackgroundIconKind, BackgroundIconSize, ColorConfig } from './background-icon.interfaces';
/**
 * Mapping of BackgroundIcon container sizes to their corresponding icon sizes.
 *
 * Design specifications:
 * - 24px container → 16px icon
 * - 32px container → 16px icon
 * - 44px container → 20px icon
 */
export declare const BACKGROUND_ICON_SIZE_MAP: Record<BackgroundIconSize, {
    iconSize: CommonIconSize;
}>;
/**
 * Default values for the BackgroundIcon component.
 */
export declare const BACKGROUND_ICON_DEFAULTS: {
    readonly size: "32px";
    readonly kind: "brand";
    readonly appearance: "filled";
    readonly shape: "round";
};
/**
 * Test ID base for the BackgroundIcon component.
 */
export declare const BACKGROUND_ICON_TEST_ID = "background-icon";
/**
 * Kinds that support badge functionality.
 * Only 'brand' and 'neutral' kinds can display badges.
 */
export declare const BADGE_ENABLED_KINDS: ReadonlyArray<BackgroundIconKind>;
/**
 * Color mapping system for BackgroundIcon component.
 * Maps each kind and appearance combination to the appropriate background and icon color tokens.
 *
 * Design pattern:
 * - filled: Uses stronger background colors with base/washed icon colors for high contrast
 * - tonal: Uses subtle background colors with standard icon colors for softer appearance
 */
export declare const BACKGROUND_ICON_COLORS: Record<BackgroundIconKind, Record<BackgroundIconAppearance, ColorConfig>>;
/**
 * Disabled state color configuration.
 */
export declare const DISABLED_COLORS: ColorConfig;
