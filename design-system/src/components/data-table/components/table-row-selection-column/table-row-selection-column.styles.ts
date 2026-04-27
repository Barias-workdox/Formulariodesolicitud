import {
  DATA_TABLE_Z_INDEX,
  ROW_SELECTION_COLUMN_WIDTH,
} from '@components/data-table/data-table.constants';
import { getTransitionStyles } from '@utils/styles.utils';

import { commonStyles } from '../../data-table.styles';

import type { DesignSystemTheme } from '../../../../themes';
import type { StyleObject } from 'styletron-react';

type StyleOptions = {
  showColumnShadow: boolean;
};

export const rowSelectionColumnsStyles = {
  containerStyles: (theme: DesignSystemTheme, { showColumnShadow }: StyleOptions): StyleObject => ({
    ...commonStyles,
    position: 'sticky',
    left: 0,
    width: ROW_SELECTION_COLUMN_WIDTH,
    borderRight: `1px solid ${theme.colors.neutralSubtle}`,
    transition: getTransitionStyles(['box-shadow']),
    boxShadow: `0px 8px 24px 0 ${showColumnShadow ? 'rgba(149, 157, 165, 0.20)' : 'transparent'}`,
    backgroundColor: theme.colors.bgBase,
    zIndex: DATA_TABLE_Z_INDEX.rowSelectionColumn,
    '::after': {
      content: '""',
      height: '100%',
      width: '1px',
      position: 'absolute',
      zIndex: DATA_TABLE_Z_INDEX.rowSelectionColumn,
      top: 0,
      left: 0,
      backgroundColor: theme.colors.neutralSubtle,
      transition: getTransitionStyles(['opacity']),
      opacity: showColumnShadow ? 1 : 0,
    },
  }),
};
