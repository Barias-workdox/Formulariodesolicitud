import { StyleObject } from 'styletron-standard';
export interface TitleLayoutProps {
    titleText: React.ReactNode;
    startEnhancer?: React.ReactNode;
    subtitleText?: React.ReactNode;
    overrides?: {
        Root?: StyleObject;
        StartEnhancer?: StyleObject;
        TitleContainer?: StyleObject;
        SubtitleContainer?: StyleObject;
    };
    'data-testid'?: string;
    onClick?(): void;
}
/** A Styled layout for Title cell used by a lot of tables (mainly) */
export declare const TitleLayout: ({ titleText, startEnhancer, subtitleText, onClick, overrides, "data-testid": dataTestId, }: TitleLayoutProps) => JSX.Element;
