import type { ReactElement } from 'react';

import { Tabs as BaseTabs, ORIENTATION } from 'baseui/tabs-motion';

import { useTabsOverrides } from './hooks/use-tabs-overrides';

import type { TabsProps as BaseTabsProps, TabOverrides, TabsOverrides } from 'baseui/tabs-motion';

export type TabsOrientationType = keyof typeof ORIENTATION;

export const TabsOrientation = ORIENTATION;

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
export const Tabs = (props: TabsProps): ReactElement => {
  const { overridesByKind, childrenWithOverrides } = useTabsOverrides(props);

  // Destructure the props to separate 'children' and 'overrides' as they're replaced with custom versions.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, overrides, ...rest } = props;

  // Render the BaseTabs with the custom styles. 'rest' contains the other props passed to this component.
  // Instead of the original 'children' prop, the modified version is passed as children to BaseTabs.
  return (
    <BaseTabs
      overrides={overridesByKind}
      {...rest}
    >
      {childrenWithOverrides}
    </BaseTabs>
  );
};
