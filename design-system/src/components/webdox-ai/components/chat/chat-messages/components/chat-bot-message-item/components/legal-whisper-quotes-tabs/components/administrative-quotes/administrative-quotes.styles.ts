import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  iconStyles: (theme: DesignSystemTheme): StyleObject => ({
    verticalAlign: 'sub',
    paddingLeft: theme.spacing.spacing2xs,
    boxSizing: 'content-box',
  }),
};
