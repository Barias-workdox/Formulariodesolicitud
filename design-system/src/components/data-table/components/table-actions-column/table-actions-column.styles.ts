import { DATA_TABLE_Z_INDEX } from '@components/data-table/data-table.constants';
import { getTransitionStyles } from '@utils/styles.utils';

import { commonStyles } from '../../data-table.styles';

import type { DesignSystemTheme } from '../../../../themes';
import type { StyleObject } from 'styletron-react';

type StyleOptions = {
  $isScrollable: boolean;
  $rowHeight: string;
};

export const actionsColumnsStyles = {
  containerStyles: (
    theme: DesignSystemTheme,
    { $isScrollable, $rowHeight }: StyleOptions,
  ): StyleObject => ({
    ...commonStyles,
    position: 'sticky',
    right: 0,
    flexShrink: 0,
    minWidth: $rowHeight,
    transition: getTransitionStyles(['box-shadow']),
    boxShadow: `0px 8px 24px 0 ${$isScrollable ? 'rgba(149, 157, 165, 0.20)' : 'transparent'}`,
    zIndex: DATA_TABLE_Z_INDEX.fixedColumn,
    backgroundColor: theme.colors.bgBase,
    '::after': {
      content: '""',
      height: '100%',
      width: '1px',
      position: 'absolute',
      zIndex: DATA_TABLE_Z_INDEX.fixedColumn,
      top: 0,
      left: 0,
      backgroundColor: theme.colors.neutralSubtle,
      transition: getTransitionStyles(['opacity']),
      opacity: $isScrollable ? 1 : 0,
    },
  }),
};
