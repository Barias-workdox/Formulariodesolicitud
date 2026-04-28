import { AvatarKind, AvatarSize, AvatarAppearance, AvatarColorConfig } from './avatar.interface';
import { WithTestId } from '../../../interfaces/common.interfaces';
import { DesignSystemColorType } from '../../../themes';
import { AvatarOverrides } from 'baseui/avatar';
/**
 * Gets the background color and text color configuration for a given kind and appearance
 */
export declare const getAvatarColorConfig: (kind: AvatarKind, appearance: AvatarAppearance) => AvatarColorConfig;
export declare const avatarFontSizeMap: Record<AvatarSize, string>;
/** Avatar overrides */
export declare const getAvatarOverrides: ({ dataTestId: dataTestId, backgroundColor, textColor, disabled, size, clickable, name, }: WithTestId & {
    backgroundColor: DesignSystemColorType;
    textColor: DesignSystemColorType;
    disabled: boolean;
    size: AvatarSize;
    clickable: boolean;
    name: string;
}) => AvatarOverrides;
/**
 * Processes initials based on avatar size to limit the number of characters displayed
 * - 44px size: shows up to 2 characters
 * - 32px and 24px sizes: shows up to 1 character
 * - Uses 'name' as fallback when 'initials' are not provided
 */
export declare const processInitials: (initials?: string, size?: AvatarSize, name?: string) => string | undefined;
