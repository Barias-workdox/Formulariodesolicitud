import { SectionedCardProps } from './sectioned-card.interfaces';
export declare const SectionedCard: {
    (props: SectionedCardProps): JSX.Element;
    Header: ((props: import('./components/sectioned-card-header').SectionedCardHeaderProps) => JSX.Element) & {
        displayName: string;
    };
    Avatar: ((props: import('../../../../header/components/header-avatar').HeaderAvatarProps) => JSX.Element) & {
        displayName: string;
    };
    BackgroundIcon: ((props: Omit<import('../../../../background-icon/next').BackgroundIconProps, "size" | "data-testid" | "dataTestId">) => JSX.Element) & {
        displayName: string;
    };
    Emoji: (({ symbol, label }: import('../../../../header/components/header-emoji').HeaderEmojiProps) => JSX.Element) & {
        displayName: string;
    };
    FileIconType: ((props: Omit<import('../../../../file-type-icon').FileTypeIconProps, "size" | "data-testid" | "dataTestId" | "isDisabled">) => JSX.Element) & {
        displayName: string;
    };
    Flag: (({ countryCode, label }: import('../../../../header/components/header-flag').HeaderFlagProps) => JSX.Element) & {
        displayName: string;
    };
    HeaderTabs: ((props: import('./components/sectioned-card-header-tabs').SectionedCardHeaderTabsProps) => JSX.Element) & {
        displayName: string;
    };
    HeaderTab: ((props: import('../../../../header-tab/components/header-tab').HeaderTabProps) => JSX.Element) & {
        displayName: string;
    };
    Footer: ((props: import('./components/sectioned-card-footer').SectionedCardFooterProps) => JSX.Element) & {
        displayName: string;
    };
    Button: ((props: import('../../../../footer/components/footer-button').FooterButtonProps) => JSX.Element) & {
        displayName: string;
    };
    Body: (({ children, id }: import('./components/sectioned-card-body').SectionedCardBodyProps) => JSX.Element) & {
        displayName: string;
    };
};
