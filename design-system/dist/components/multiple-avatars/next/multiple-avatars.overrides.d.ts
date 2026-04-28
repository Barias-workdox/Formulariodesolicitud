import { AvatarOverrides } from 'baseui/avatar';
/** Avatar overrides for the +N counter. */
export declare const getAvatarCounterOverrides: ({ disabled, dataTestId, counterText, }: {
    disabled: boolean;
    dataTestId: string;
    counterText: string;
}) => AvatarOverrides;
/** Avatar overrides for the avatars in MultipleAvatars (adds 1px borderBase border). */
export declare const getMultipleAvatarsAvatarOverrides: () => AvatarOverrides;
