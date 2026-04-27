import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  documentsTabContainer: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
  } as StyleObject,
  tabContentStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.spacingMd,
    overflowY: 'auto',
    gap: theme.spacing.spacingXl,
  }),
};
