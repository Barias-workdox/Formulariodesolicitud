import { IGetTabOverrides, IGetTabsOverrides } from './side-tabs.interfaces';
import { TabOverrides, TabsOverrides } from 'baseui/tabs-motion';
/** Overrides for styling tabs displayed in vertical orientation. */
export declare const getTabsOverrides: ({ showPanels, showTabList, side, onClickTab, }: IGetTabsOverrides) => TabsOverrides;
/** Overrides for styling individual tabs in vertical tabs orientation. */
export declare const getTabOverrides: ({ showPanels, tabPanelWidth, side, }: IGetTabOverrides) => TabOverrides;
