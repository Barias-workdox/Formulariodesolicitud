import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  mainContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    paddingTop: theme.spacing.spacingMd,
    paddingBottom: theme.spacing.spacingMd,
  }),
};
