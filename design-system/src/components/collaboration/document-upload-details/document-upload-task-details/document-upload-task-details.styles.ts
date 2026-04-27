import type { DesignSystemTheme } from '../../../../themes';
import type { StyleObject } from 'styletron-react';

export const taskStyles = {
  taskContainer: (theme: DesignSystemTheme): StyleObject => ({
    padding: theme.spacing.spacingXl,
    borderTop: `1px solid ${theme.colors.neutralWashed}`,
  }),
  taskLabelsContainer: (theme: DesignSystemTheme): StyleObject => ({
    margin: `${theme.spacing.spacingSm} 0`,
  }),
};
