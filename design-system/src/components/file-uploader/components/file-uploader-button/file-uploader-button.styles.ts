import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-standard';

export const styles = {
  buttonContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing.spacingMd,
  }),
};
