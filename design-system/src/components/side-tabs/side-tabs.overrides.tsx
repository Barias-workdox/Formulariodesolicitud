import { DEFAULT_TAB_PANEL_WIDTH } from './side-tabs.constants';

import type { IGetTabOverrides, IGetTabsOverrides } from './side-tabs.interfaces';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { TabOverrides, TabsOverrides } from 'baseui/tabs-motion';

/** Overrides for styling tabs displayed in vertical orientation. */
export const getTabsOverrides = ({
  showPanels = true,
  showTabList = true,
  side = 'left',
  onClickTab = (): void => null,
}: IGetTabsOverrides): TabsOverrides => ({
  TabHighlight: {
    style: {
      ...(side === 'left' && { left: 0, right: 'unset' }),
      ...(side === 'right' && { right: 0, left: 'unset' }),
      ...(!showPanels && { width: 0 }),
    },
  },
  Root: {
    style: ({ $theme }: StyleOverrideProps) => ({
      backgroundColor: $theme.colors.bgBase,
      flexDirection: side === 'left' ? 'row-reverse' : 'row',
      ...(showTabList &&
        side === 'left' && { borderRight: `1px solid ${$theme.colors.divisionLine}` }),
      ...(showTabList &&
        side === 'right' && { borderLeft: `1px solid ${$theme.colors.divisionLine}` }),
    }),
  },
  TabList: {
    ...(!showTabList && { component: () => null }),
    props: {
      onClick: onClickTab,
    },
  },
});

/** Overrides for styling individual tabs in vertical tabs orientation. */
export const getTabOverrides = ({
  showPanels,
  tabPanelWidth = DEFAULT_TAB_PANEL_WIDTH,
  side = 'left',
}: IGetTabOverrides): TabOverrides => ({
  TabPanel: {
    style: ({ $theme }: StyleOverrideProps) => ({
      backgroundColor: $theme.colors.bgBase,
      width: tabPanelWidth,
      overflow: 'unset',
      ...(side === 'left' && { borderRight: `1px solid ${$theme.colors.divisionLine}` }),
      ...(side === 'right' && { borderLeft: `1px solid ${$theme.colors.divisionLine}` }),
    }),
  },
  Tab: {
    style: ({ $theme }: StyleOverrideProps) => ({
      ...(!showPanels && {
        color: $theme.colors.neutralSubdued,
        ':hover': {
          color: $theme.colors.neutralMedium,
        },
      }),
    }),
  },
});
