import type { DesignSystemTheme } from '../../../../../themes/theme.interfaces';
import type { StyleObject } from 'styletron-standard';

export const styles = {
  spinnerContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    padding: theme.spacing.spacingMd,
    backgroundColor: theme.colors.bgBase,
  }),
};
