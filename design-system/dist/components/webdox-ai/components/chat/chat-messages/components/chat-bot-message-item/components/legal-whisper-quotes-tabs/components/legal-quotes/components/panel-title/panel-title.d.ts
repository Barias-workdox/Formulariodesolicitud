import { PropsWithChildren, ReactElement } from 'react';
export type PanelTitleProps = PropsWithChildren<{
    url?: string;
    zIndex?: number;
}>;
/**
 * `PanelTitle` component renders a styled link if a valid URL is provided,
 * otherwise, it renders a styled text element.
 */
export declare const PanelTitle: ({ children, url, zIndex }: PanelTitleProps) => ReactElement;
