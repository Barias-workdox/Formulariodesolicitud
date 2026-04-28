import { AvatarProps, AvatarSize } from './avatar';
import { WithTestId } from '../../interfaces/common.interfaces';
import { AvatarOverrides } from 'baseui/avatar';
export declare const avatarFontSizeMap: Record<AvatarSize, string>;
/** Avatar overrides */
export declare const getAvatarOverrides: ({ "data-testid": dataTestId, backgroundColor, disabled, size, }: WithTestId & {
    backgroundColor: AvatarProps["backgroundColor"];
    disabled: boolean;
    size: AvatarSize;
}) => AvatarOverrides;
