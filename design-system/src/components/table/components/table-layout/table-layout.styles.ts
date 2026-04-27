import type { DesignSystemTheme } from '../../../../themes';
import type { StyleObject } from 'styletron-react';

/**
 * Returns the style object for the table layout container.
 */
export const tableLayoutContainerStyles = (
  theme: DesignSystemTheme,
  gridTemplateColumns: string,
): StyleObject => ({
  display: 'grid',
  width: '100%',
  columnGap: theme.spacing.spacingXs,
  gridTemplateColumns,
  paddingLeft: theme.spacing.spacingXl,
  paddingRight: theme.spacing.spacingXl,
  alignItems: 'center',
});

/**
 * Returns the style object for the table separation line.
 */
export const tableSeparationLineStyles = (theme: DesignSystemTheme): StyleObject => ({
  borderBottom: `1px solid ${theme.colors.neutralWashed}`,
  marginLeft: `-${theme.spacing.spacingXl}`,
  marginRight: `-${theme.spacing.spacingXl}`,
  gridColumn: '1 / -1',
});
