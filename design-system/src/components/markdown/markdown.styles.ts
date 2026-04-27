import { cellStyles } from '@components/data-table/components/common/table-cell/table-cell.styles';
import { headerCellStyles } from '@components/data-table/components/common/table-header-cell/table-header-cell.styles';
import { getTableContainerStyles } from '@components/data-table/data-table.styles';

import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  imgStyles: { maxWidth: '100%' } as StyleObject,
  preStyles: (theme: DesignSystemTheme): StyleObject => ({
    backgroundColor: theme.colors.neutralWashed,
    border: `1px solid ${theme.colors.neutralSubtle}`,
    padding: theme.spacing.spacingSm,
    borderRadius: '4px',
    ':has(*) code': {
      border: 'none',
      backgroundColor: 'transparent',
      padding: 0,
      color: 'inherit',
    },
  }),
  codeStyles: (theme: DesignSystemTheme): StyleObject => ({
    backgroundColor: theme.colors.negativeSubtle,
    color: theme.colors.negative,
    padding: `0 ${theme.spacing.spacing2xs}`,
    borderRadius: '4px',
  }),
  blockquoteStyles: (theme: DesignSystemTheme): StyleObject => ({
    margin: `0 0 ${theme.spacing.spacingSm}`,
    padding: `${theme.spacing.spacingSm} ${theme.spacing.spacingLg}`,
    borderLeft: `6px solid ${theme.colors.neutralSubtle}`,
  }),
  tableStyles: (theme: DesignSystemTheme): StyleObject => ({
    ...getTableContainerStyles({ $theme: theme }),
    display: 'table',
    borderSpacing: 0,
    width: 'auto',
    maxWidth: '100%',
  }),
  tableHeaderStyles: (theme: DesignSystemTheme): StyleObject => ({
    ...headerCellStyles.containerStyles(theme),
    display: 'table-cell',
    textAlign: undefined,
    position: undefined,
  }),
  tableCellStyles: (theme: DesignSystemTheme): StyleObject => ({
    ...cellStyles.containerStyles(theme),
    display: 'table-cell',
    textAlign: undefined,
    textWrap: undefined,
  }),
};
