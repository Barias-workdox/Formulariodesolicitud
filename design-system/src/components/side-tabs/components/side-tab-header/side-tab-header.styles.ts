import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  tabHeaderStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.spacingMd,
    borderBottom: `1px solid ${theme.colors.neutralSubtle}`,
  }),
};
