import {
  DATA_TABLE_Z_INDEX,
  DEFAULT_COLUMN_WIDTH,
  ROW_SELECTION_COLUMN_WIDTH,
} from '@components/data-table/next/data-table.constants';
import { themedStyled } from '@themes/utilities';
import { getTransitionStyles } from '@utils/styles.utils';

import { commonStyles } from '../../data-table.styles';

import type { StyleObject } from 'styletron-react';

type StyleOptions = {
  $isFirstColumn: boolean;
  $isLastColumn: boolean;
  $isDragging: boolean;
  $isFixed: boolean;
  $isScrollable: boolean;
  $isHeaderHovered: boolean;
  $isSelectable: boolean;
  $isResizeHovered: boolean;
  $isResizable: boolean;
  $width?: StyleObject['width'];
  $minWidth: StyleObject['minWidth'];
  $maxWidth: StyleObject['maxWidth'];
};

/**
 * Styles for the resize line
 */
const resizeLineStyles: StyleObject = {
  position: 'absolute',
  height: '100%',
  width: '1px',
  zIndex: DATA_TABLE_Z_INDEX.fixedColumn,
  top: 0,
  transition: getTransitionStyles(['opacity']),
  pointerEvents: 'none',
};

export const StyledTableColumn = themedStyled<'div', StyleOptions>(
  'div',
  ({
    $isFirstColumn,
    $isLastColumn,
    $isDragging,
    $isFixed,
    $isScrollable,
    $isHeaderHovered,
    $isSelectable,
    $isResizeHovered,
    $isResizable,
    $width,
    $minWidth,
    $maxWidth,
    $theme,
  }) => ({
    ...commonStyles,
    display: 'flex',
    position: $isFixed ? 'sticky' : 'relative',
    zIndex: $isFixed ? DATA_TABLE_Z_INDEX.fixedColumn : DATA_TABLE_Z_INDEX.base,
    left: $isSelectable && $isFixed ? ROW_SELECTION_COLUMN_WIDTH : 0,
    width: $width ?? ($isFirstColumn ? DEFAULT_COLUMN_WIDTH : 'max-content'),
    minWidth: $minWidth,
    maxWidth: $isFirstColumn ? 'unset' : $maxWidth,
    flexGrow: 1,
    backgroundColor:
      $isHeaderHovered || $isDragging ? $theme.colors.neutralWashed : $theme.colors.bgBase,
    transition: getTransitionStyles(['box-shadow', 'background-color']),
    boxShadow:
      $isFixed && $isScrollable
        ? '0px 8px 24px 0 rgba(149, 157, 165, 0.20)'
        : $isDragging
          ? '0 4px 8px rgba(0,0,0,.25)'
          : '0 0 0 0 transparent',
    outline: $isDragging ? `2px solid ${$theme.colors.brand}` : undefined,
    ':only-child': {
      maxWidth: 'unset',
    },

    // Left resize line
    ...(!$isFirstColumn &&
      $isResizable && {
        '::before': {
          content: '""',
          left: 0,
          backgroundColor: $theme.colors.neutralSubtle,
          opacity: 0,
          ...resizeLineStyles,
        },
        ':hover::before': {
          opacity: 1,
        },
      }),
    // Right resize line
    ...(!$isLastColumn &&
      ($isResizable || $isFixed) && {
        '::after': {
          content: '""',
          right: 0,
          backgroundColor: $isResizeHovered
            ? $theme.colors.neutralDepressed
            : $theme.colors.neutralSubtle,
          opacity: ($isFixed && $isScrollable) || $isResizeHovered ? 1 : 0,
          ...resizeLineStyles,
        },
        ':hover::after': {
          opacity: 1,
        },
      }),
  }),
);

export const StyledTableColumnContent = themedStyled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  flex: 1,
});
