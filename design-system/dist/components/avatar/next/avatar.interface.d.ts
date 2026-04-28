import { WithTestId } from '../../../interfaces/common.interfaces';
import { DesignSystemColorType } from '../../../themes';
import { AvatarProps as BaseAvatarProps } from 'baseui/avatar';
/**
 * AvatarKind specifies the available visual themes for the Avatar component.
 * Each kind is intended for a particular entity type or visual context.
 *
 * - 'users': internal users
 * - 'group': groups or unassigned
 * - 'people': external individuals
 * - 'companies': companies directory
 * - 'mint': signers, other variants
 * - 'cherry': signers, other variants
 * - 'sunrise': signers, other variants
 * - 'sweet': signers, other variants
 * - 'heat': signers, other variants
 */
export type AvatarKind = 'users' | 'group' | 'people' | 'companies' | 'mint' | 'cherry' | 'sunrise' | 'sweet' | 'heat';
/**
 * Avatar appearance types
 */
export type AvatarAppearance = 'filled' | 'tonal' | 'image';
/**
 * Avatar-specific size type with only supported sizes
 */
export type AvatarSize = '24px' | '32px' | '44px';
/**
 * Props for the Avatar component
 */
export interface AvatarProps extends WithTestId, Pick<BaseAvatarProps, 'name' | 'overrides' | 'src'> {
    /** The size of the avatar. */
    size?: AvatarSize;
    /** Whether the avatar is disabled. */
    disabled?: boolean;
    /** Whether to show a tooltip with the name on hover. Defaults to true. */
    showTooltip?: boolean;
    /** Z-index for the tooltip. */
    zIndex?: number;
    /** The kind of avatar, determines the color scheme. */
    kind?: AvatarKind;
    /** The appearance style of the avatar. */
    appearance?: AvatarAppearance;
    /** Whether the avatar is clickable. */
    clickable?: boolean;
    /** URL to navigate to. Converts avatar into a link. */
    href?: string;
    /**
     * Text to display inside the avatar as a fallback when no image is provided.
     * Will show max 2 characters for 44px size, and 1 character for 32px and 24px sizes.
     */
    initials?: string;
    /** Click handler function. Only available when clickable is true. */
    onClick?(): void;
}
/**
 * Color configuration for each avatar kind and appearance combination
 */
export interface AvatarColorConfig {
    backgroundColor: DesignSystemColorType;
    textColor: DesignSystemColorType;
}
