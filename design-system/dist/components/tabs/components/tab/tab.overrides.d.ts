import { TabsProps } from '../../tabs';
import { TabOverrides } from 'baseui/tabs-motion';
/**
 * An object providing style overrides for the Tab and TabPanel within the Tabs component, with a focus on medium-sized design.
 * Compared to the default style, the medium style has a larger height, increased padding, and a bigger font size for Tabs.
 * For the TabPanel, it inherits common styles which are suitable for most use cases.
 */
export declare const mediumTabOverrides: TabOverrides;
/**
 * This function retrieves style overrides for the Tab component based
 * on the provided kind ('default' or 'medium'). It merges the base
 * overrides with the overrides specific to the chosen kind, and
 * optionally hides the TabPanel if `showPanels` is set to false.
 */
export declare const getTabOverridesByKind: ({ "data-testid": dataTestId, overrides, showPanels, kind, }: {
    "data-testid"?: string;
    kind: TabsProps["kind"];
    overrides?: TabOverrides;
    showPanels?: boolean;
}) => TabOverrides;
