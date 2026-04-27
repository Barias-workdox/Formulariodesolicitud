import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  formStyles: (): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'auto',
  }),
  containerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'grid',
    gap: theme.spacing.spacingMd,
  }),
};
