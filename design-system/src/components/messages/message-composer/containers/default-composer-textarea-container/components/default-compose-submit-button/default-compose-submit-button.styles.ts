import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  createButtonContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing.spacingMd,
  }),
  editButtonsContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    marginTop: theme.spacing.spacingXs,
    marginRight: theme.spacing.spacingMd,
    display: 'grid',
    gridAutoFlow: 'column',
    gridColumnGap: theme.spacing.spacingXs,
    justifyContent: 'flex-end',
  }),
};
