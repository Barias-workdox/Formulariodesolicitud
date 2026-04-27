import { useMemo } from 'react';

import { StatefulTabs } from '@components/tabs';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';

import { getTabOverrides, getTabsOverrides } from './side-tabs.overrides';

import type { SideType } from './side-tabs.interfaces';
import type { StatefulTabsProps } from '@components/tabs';

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
export const SideTabs = ({
  children,
  showPanels,
  showTabList,
  side,
  tabPanelWidth,
  overrides,
  onClickTab = (): void => undefined,
  ...others
}: SideTabsProps): JSX.Element => {
  const mergedOverrides = useMemo(() => {
    const tabsOverrides = getTabsOverrides({
      showTabList,
      side,
      showPanels,
      onClickTab,
    });
    const tabOverrides = getTabOverrides({ showPanels, side, tabPanelWidth });

    return mergeOverridesDeep(tabsOverrides, tabOverrides, overrides);

    // TODO: Evaluate if we can add the missing dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [overrides, showPanels, side, tabPanelWidth, showTabList]);

  return (
    <StatefulTabs
      {...others}
      kind="medium"
      showPanels={showPanels}
      orientation="vertical"
      overrides={mergedOverrides}
    >
      {children}
    </StatefulTabs>
  );
};
