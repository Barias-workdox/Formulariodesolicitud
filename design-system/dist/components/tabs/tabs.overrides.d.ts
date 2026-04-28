import { TabsProps } from './tabs';
import { TabsOverrides } from 'baseui/tabs-motion';
/**
 * An object containing style overrides for the Tabs component
 * in its default appearance. The default appearance uses a
 * full-width layout with a flexible container, suitable
 * for standard use cases.
 */
export declare const defaultTabsOverrides: TabsOverrides;
/**
 * An object containing style overrides for the Tabs component
 * in its medium appearance. The medium appearance uses a more
 * compact layout with less padding and a fixed container,
 * suitable for use cases that require a denser UI.
 */
export declare const mediumTabsOverrides: TabsOverrides;
/**
 * A mapping object that associates different 'kind' values
 * to their respective style overrides for the Tabs component.
 * This allows for easy switching between different appearances
 * of the Tabs component based on the 'kind' prop.
 */
export declare const overridesByKindMap: Record<TabsProps['kind'], TabsOverrides>;
