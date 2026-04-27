import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  containerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'grid',
    gap: theme.spacing.spacingXs,
  }),
  documentContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    borderLeft: `3px solid ${theme.colors.neutralSubtle}`,
    paddingLeft: theme.spacing.spacingMd,
  }),
  titleStyles: (theme: DesignSystemTheme): StyleObject => ({
    letterSpacing: '1px',
    textTransform: 'uppercase',
    padding: `${theme.spacing.spacingXs} 0px ${theme.spacing.spacingXs} 0px`,
  }),
  documentStyles: (theme: DesignSystemTheme): StyleObject => ({
    padding: `${theme.spacing.spacingXs} 0px`,
  }),
};
