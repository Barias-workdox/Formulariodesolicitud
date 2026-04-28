import { ReactElement } from 'react';
import { ORIENTATION, TabsProps as BaseTabsProps, TabOverrides, TabsOverrides } from 'baseui/tabs-motion';
export type TabsOrientationType = keyof typeof ORIENTATION;
export declare const TabsOrientation: {
    readonly vertical: "vertical";
    readonly horizontal: "horizontal";
};
export type TabsCustomProps = {
    'data-testid'?: string;
    /**
     * (Optional) Choose between 'default' and 'medium' styles.
     * 'default' is more compact, while 'medium' offers slightly larger tabs.
     */
    kind?: 'default' | 'medium';
    /**
     * (Optional) When set to false, the panel content is hidden.
     * Helpful if you just need tab headers.
     */
    showPanels?: boolean;
    overrides?: TabsOverrides & TabOverrides;
};
export type TabsProps = BaseTabsProps & TabsCustomProps;
/**
 * The Tabs component is used for toggling between different views or sections. It's like a folder that keeps your content tidy.
 */
export declare const Tabs: (props: TabsProps) => ReactElement;
