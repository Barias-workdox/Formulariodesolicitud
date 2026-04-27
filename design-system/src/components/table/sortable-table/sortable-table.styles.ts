import type { DraggableRowsTableProps } from '../draggable-rows-table';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  headerCellStyles: (theme: DesignSystemTheme): StyleObject => ({
    paddingTop: theme.spacing.spacingXs,
    paddingBottom: theme.spacing.spacingXs,
    paddingLeft: theme.spacing.spacingMd,
  }),
  headerBodyStyles: (theme: DesignSystemTheme): StyleObject => ({
    padding: `${theme.spacing.spacingXs} ${theme.spacing.spacingMd}`,
  }),
};

/** DraggableRowsTable custom overrides for table wrapper component */
export const tableOverrideStyles = (
  theme: DesignSystemTheme,
): DraggableRowsTableProps['overrides'] => ({
  Root: {
    borderCollapse: 'collapse',
    border: `1px solid ${theme.colors.neutralSubtle}`,
  },
  Row: {
    border: `1px solid ${theme.colors.neutralSubtle}`,
  },
});
