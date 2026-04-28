import { ReactElement } from 'react';
import { TabsCustomProps } from './tabs';
import { StatefulTabsProps as BaseStatefulTabsProps } from 'baseui/tabs-motion';
export type StatefulTabsProps = BaseStatefulTabsProps & TabsCustomProps;
/**
 * The StatefulTabs component is used for toggling between different views or sections,
 * similar to Tabs but with an internal state management for active tabs.
 */
export declare const StatefulTabs: (props: StatefulTabsProps) => ReactElement;
