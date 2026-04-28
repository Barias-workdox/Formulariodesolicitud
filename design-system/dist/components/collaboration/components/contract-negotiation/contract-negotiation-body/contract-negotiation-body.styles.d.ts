import { TitleLayoutProps } from '../../../../layouts';
import { DesignSystemTheme } from '../../../../../themes/index';
import { StyleObject } from 'styletron-react';
export declare const styles: {
    containerStyles: () => StyleObject;
    contentStyles: (theme: DesignSystemTheme) => StyleObject;
    headerStyles: (theme: DesignSystemTheme) => StyleObject;
    headerRightContainerStyles: (theme: DesignSystemTheme) => StyleObject;
    footerStyles: (theme: DesignSystemTheme) => StyleObject;
};
/** Title Layout Overrides */
export declare const titleLayoutOverrides: () => TitleLayoutProps["overrides"];
