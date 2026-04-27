import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  containerStyles: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'unset',
    height: '100%',
  } as StyleObject,
  tabContentStyles: (theme: DesignSystemTheme): StyleObject => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    paddingRight: theme.spacing.spacingMd,
  }),
};
