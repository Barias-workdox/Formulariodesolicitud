import { HeaderProps } from './header.interfaces';
export declare const Header: {
    (props: HeaderProps): JSX.Element;
    BackgroundIcon: (props: Omit<import('../background-icon/next').BackgroundIconProps, "size" | "data-testid" | "dataTestId">) => JSX.Element;
    Emoji: ({ symbol, label }: import('./components/header-emoji').HeaderEmojiProps) => JSX.Element;
    Flag: ({ countryCode, label }: import('./components/header-flag').HeaderFlagProps) => JSX.Element;
    FileIconType: (props: Omit<import('../file-type-icon').FileTypeIconProps, "size" | "data-testid" | "dataTestId" | "isDisabled">) => JSX.Element;
    Avatar: (props: import('./components/header-avatar').HeaderAvatarProps) => JSX.Element;
};
