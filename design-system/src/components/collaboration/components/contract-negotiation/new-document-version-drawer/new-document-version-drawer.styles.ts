import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  formStyles: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  } as StyleObject,
  spacingStyles: (theme: DesignSystemTheme): StyleObject => ({
    paddingTop: theme.spacing.spacingMd,
  }),
};
