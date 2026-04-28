import { SideType } from './side-tabs.interfaces';
import { StatefulTabsProps } from '../tabs';
export type SideTabsProps = Omit<StatefulTabsProps, 'kind' | 'orientation'> & {
    /** To show or hide the tab list */
    showTabList?: boolean;
    /** The side where tabs are positioned - either on the left or right. */
    side: SideType;
    /** The width of the tab panel in pixels. It should be a string representing a CSS value in pixels. */
    tabPanelWidth?: string;
    /** To handle the tab click*/
    onClickTab?(): void;
};
/**
 * `SideTabs` component represents a vertical tab using the StatefulTabs component.
 * It can be rendered on both the left and the right side.
 */
export declare const SideTabs: ({ children, showPanels, showTabList, side, tabPanelWidth, overrides, onClickTab, ...others }: SideTabsProps) => JSX.Element;
