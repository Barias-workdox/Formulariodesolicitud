import { DesignSystemTheme } from '../../../../../themes/theme.interfaces';
import { TabOverrides, TabsOverrides } from 'baseui/tabs-motion';
/** Left Tab component overrides */
export declare const leftTabOverridesStyles: (theme: DesignSystemTheme, { showPanels }: {
    showPanels: boolean;
}) => TabOverrides;
/** Tab component overrides */
export declare const leftOrientationTabsOverridesStyles: (theme: DesignSystemTheme, { showPanels, showTabList }: {
    showPanels: boolean;
    showTabList: boolean;
}) => TabsOverrides;
