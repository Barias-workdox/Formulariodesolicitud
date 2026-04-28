import { SectionedCardProps } from './sectioned-card';
import { DesignSystemTheme } from '../../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
export interface StylesOptions {
    hasElevation: boolean;
    hasBody: boolean;
    overrides: SectionedCardProps['overrides'];
}
export declare const styles: {
    rootStyles: (theme: DesignSystemTheme, { hasElevation, overrides: { Root } }: StylesOptions) => StyleObject;
    headerStyles: (theme: DesignSystemTheme, { hasBody, overrides: { Header } }: StylesOptions) => StyleObject;
    headerTitleStyles: StyleObject;
    headerTitleTextStyles: StyleObject;
    bodyStyles: (theme: DesignSystemTheme, { overrides: { Body } }: StylesOptions) => StyleObject;
    footerStyles: (theme: DesignSystemTheme, { overrides: { Footer } }: StylesOptions) => StyleObject;
};
