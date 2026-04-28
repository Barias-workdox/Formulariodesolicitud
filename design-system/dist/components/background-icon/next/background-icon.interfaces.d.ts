import { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import { CommonHeight } from '../../../constants/common.constants';
import { WithTestId } from '../../../interfaces/common.interfaces';
import { DesignSystemColorType } from '../../../themes';
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
export type BackgroundIconKind = 'brand' | 'neutral' | 'positive' | 'negative' | 'warning' | 'peace' | 'power' | 'sweet' | 'heat';
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
