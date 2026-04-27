import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  infoContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    border: `1px solid ${theme.colors.divisionLine}`,
    padding: theme.spacing.spacingXl,
    margin: `${theme.spacing.spacingMd} 0`,
  }),
  infoItemStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.spacingXs,
  }),
  documentInfoStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.spacingXs,
  }),
  divisionLineStyles: (theme: DesignSystemTheme): StyleObject => ({
    borderTop: `1px solid ${theme.colors.divisionLine}`,
    margin: `${theme.spacing.spacingMd} 0`,
  }),
};

/** Row title styles */
export const rowTitleStyles = (theme: DesignSystemTheme): StyleObject => ({
  ...theme.typography.LabelXSmall,
});
