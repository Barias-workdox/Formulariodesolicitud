import { WithTestId } from '../../interfaces/common.interfaces';
import { DesignSystemColorType } from '../../themes';
import { AvatarProps as BaseAvatarProps } from 'baseui/avatar';
export type AvatarSize = '24px' | '32px' | '40px';
export interface AvatarProps extends WithTestId, Pick<BaseAvatarProps, 'initials' | 'name' | 'overrides' | 'src'> {
    /** The background color of the avatar, limited to specific color options. */
    backgroundColor?: DesignSystemColorType;
    /** The size of the avatar. */
    size?: AvatarSize;
    /** Whether the avatar is disabled. */
    disabled?: boolean;
    showTooltip?: boolean;
    zIndex?: number;
}
/**
 * The `Avatar` component displays a user's avatar with customizable properties such as
 * background color, size, and optional disabled state.
 */
export declare const Avatar: ({ "data-testid": dataTestId, backgroundColor, disabled, size, initials, name, overrides, showTooltip, zIndex, src, }: AvatarProps) => JSX.Element;
