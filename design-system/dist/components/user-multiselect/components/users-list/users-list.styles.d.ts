import { DesignSystemTheme } from '../../../../themes';
import { TitleLayoutProps } from '../../../layouts';
import { InputOverrides } from 'baseui/input';
import { StyleObject } from 'styletron-react';
/** Overrides styles for the baseInput component */
export declare const inputStyledOverrides: () => InputOverrides;
/** Overrides styles for the TitleLayout component */
export declare const popoverStyledOverrides: () => TitleLayoutProps["overrides"];
export declare const userListStyles: {
    wrapper: (theme: DesignSystemTheme) => StyleObject;
    inputWrapper: (theme: DesignSystemTheme) => StyleObject;
    bodyStyles: (theme: DesignSystemTheme) => StyleObject;
    noResultsWrapper: StyleObject;
    footerStyles: (theme: DesignSystemTheme) => StyleObject;
};
