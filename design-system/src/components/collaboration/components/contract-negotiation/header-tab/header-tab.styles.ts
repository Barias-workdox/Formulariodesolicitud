import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

const TAB_HEADER_MIN_HEIGHT = '70px';

export const styles = {
  tabHeaderStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `0 ${theme.spacing.spacingMd}`,
    minHeight: TAB_HEADER_MIN_HEIGHT,
    borderBottom: `1px solid ${theme.colors.neutralWashed}`,
  }),
  tabHeaderTitleStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.spacingXs,
  }),
};
