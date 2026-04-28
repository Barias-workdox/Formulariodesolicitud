import { DesignSystemTheme } from '../../../themes';
import { TitleLayoutProps } from '../../layouts';
import { StyleObject } from 'styletron-react';
export declare const styles: {
    wrapper: () => StyleObject;
    lastUpdateWrapperStyles: (theme: DesignSystemTheme) => StyleObject;
};
/** Last update title and i18n date time */
export declare const lastUpdateTitleLayoutOverridesStyles: (theme: DesignSystemTheme) => TitleLayoutProps["overrides"];
