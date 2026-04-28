import { DesignSystemTheme } from '../../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
export declare const HEADER_HEIGHT = "58px";
/**
 * Total height obtained by adding the header height (58px) and the banner height (58px).
 */
export declare const HEADER_WITH_BANNER_HEIGHT = "116px";
export declare const styles: {
    layoutStyles: StyleObject;
    headerStyles: (theme: DesignSystemTheme) => StyleObject;
    contentStyles: (theme: DesignSystemTheme, { showBanner }: {
        showBanner?: boolean;
    }) => StyleObject;
};
