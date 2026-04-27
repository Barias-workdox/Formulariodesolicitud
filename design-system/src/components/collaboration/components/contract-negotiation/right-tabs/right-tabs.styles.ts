import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { TabOverrides, TabsOverrides } from 'baseui/tabs-motion';

/** Right Tab component overrides */
export const rightTabOverridesStyles = (
  theme: DesignSystemTheme,
  { showPanels }: { showPanels: boolean },
): TabOverrides => ({
  TabPanel: {
    style: {
      backgroundColor: theme.colors.bgBase,
      borderLeft: `1px solid ${theme.colors.divisionLine}`,
      width: '350px',
      overflow: 'unset',
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
export const rightOrientationTabsOverridesStyles = (
  theme: DesignSystemTheme,
  { showPanels }: { showPanels: boolean },
): TabsOverrides => ({
  TabHighlight: {
    style: {
      left: 'unset',
      right: 0,
      ...(!showPanels && { width: 0 }),
    },
  },
  Root: {
    style: {
      backgroundColor: theme.colors.bgBase,
      borderLeft: `1px solid ${theme.colors.divisionLine}`,
      flexDirection: 'row',
    },
  },
});
