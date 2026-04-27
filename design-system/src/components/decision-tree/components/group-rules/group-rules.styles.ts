import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  containerStyles: (): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
  }),
  actionContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    paddingTop: theme.spacing.spacingSm,
  }),
};
