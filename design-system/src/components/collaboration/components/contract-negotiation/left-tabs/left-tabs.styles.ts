import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { TabOverrides, TabsOverrides } from 'baseui/tabs-motion';

/** Left Tab component overrides */
export const leftTabOverridesStyles = (
  theme: DesignSystemTheme,
  { showPanels }: { showPanels: boolean },
): TabOverrides => ({
  TabPanel: {
    style: {
      backgroundColor: theme.colors.bgBase,
      borderRight: `1px solid ${theme.colors.divisionLine}`,
      width: '250px',
      overflow: 'unset',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  Tab: {
    style: {
      ...(!showPanels && {
        color: theme.colors.neutralSubdued,
        ':hover': {
          color: theme.colors.neutralMedium,
        },
      }),
    },
  },
});

/** Tab component overrides */
export const leftOrientationTabsOverridesStyles = (
  theme: DesignSystemTheme,
  { showPanels, showTabList }: { showPanels: boolean; showTabList: boolean },
): TabsOverrides => ({
  TabHighlight: {
    style: {
      left: 0,
      right: 'unset',
      ...(!showPanels && { width: 0 }),
    },
  },
  Root: {
    style: {
      backgroundColor: theme.colors.bgBase,
      flexDirection: 'row-reverse',
      ...(showTabList && { borderRight: `1px solid ${theme.colors.divisionLine}` }),
    },
  },
  TabList: {
    style: {
      ...(!showTabList && { display: 'none' }),
    },
  },
});
