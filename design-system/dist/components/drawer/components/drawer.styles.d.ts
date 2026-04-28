import { DesignSystemTheme } from '../../../themes';
import { DrawerOverrides } from 'baseui/drawer';
import { StyleObject } from 'styletron-standard';
export declare const drawerHeaderStyles: {
    headerContainerStyles: () => StyleObject;
};
export declare const drawerFooterStyles: {
    footerContainerStyles: ($theme: DesignSystemTheme, { overrides }: {
        overrides?: StyleObject;
    }) => StyleObject;
};
export declare const drawerBodyStyles: {
    bodyContainerStyles: (theme: DesignSystemTheme, { padding, overrides }: {
        padding?: StyleObject["padding"];
        overrides?: StyleObject;
    }) => StyleObject;
};
/**
 * Returns the overrides for the drawer component.
 */
export declare const drawerOverrides: ({ zIndex, overrides, }: {
    zIndex?: number;
    overrides?: DrawerOverrides;
}) => DrawerOverrides;
