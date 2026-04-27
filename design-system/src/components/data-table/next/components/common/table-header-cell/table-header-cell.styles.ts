import {
  DEFAULT_HEADER_HEIGHT,
  DATA_TABLE_Z_INDEX,
} from '@components/data-table/next/data-table.constants';
import { commonStyles } from '@components/data-table/next/data-table.styles';

import type { TableHeaderCellProps } from './table-header-cell.interfaces';
import type { TableCellAlignType } from '@components/data-table/next/data-table.interfaces';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

type StyleOptions = Partial<
  Pick<
    TableHeaderCellProps,
    'isHovered' | 'isFixed' | 'isDragging' | 'isDraggable' | 'isSortable' | 'align'
  >
> & {
  isActionCell?: boolean;
};

/** Retrieves the styles for each cell alignment. */
const getStylesByCellAlign = (
  theme: DesignSystemTheme,
  { isHovered, isDragging, isDraggable, isFixed, isSortable }: StyleOptions,
): Record<TableCellAlignType, Record<string, StyleObject>> => {
  const isShowingDragIcon = (isHovered || isDragging) && isDraggable && !isFixed;

  return {
    left: {
      justifyStyles: {
        justifyContent: 'space-between',
      } as StyleObject,
      wrapperStyles: {
        marginLeft: isShowingDragIcon ? theme.spacing.spacingLg : undefined,
      } as StyleObject,
    },
    center: {
      justifyStyles: {
        justifyContent: 'center',
      } as StyleObject,
      wrapperStyles: {
        marginLeft: isShowingDragIcon
          ? isSortable
            ? theme.spacing.spacingXs
            : theme.spacing.spacingLg
          : undefined,
        marginRight: isShowingDragIcon
          ? isSortable
            ? theme.spacing.spacingXs
            : theme.spacing.spacingLg
          : undefined,
        transform: isSortable && isDraggable ? `translateX(${theme.spacing.spacingXs})` : undefined,
      } as StyleObject,
    },
    right: {
      justifyStyles: {
        justifyContent: 'end',
      } as StyleObject,
      wrapperStyles: {
        marginLeft: isShowingDragIcon ? theme.spacing.spacingMd : undefined,
      } as StyleObject,
    },
  };
};

export const headerCellStyles = {
  containerStyles: (
    theme: DesignSystemTheme,
    { isHovered, isDragging, isActionCell = false }: StyleOptions = {},
  ): StyleObject => {
    return {
      ...commonStyles,
      position: 'sticky',
      zIndex: DATA_TABLE_Z_INDEX.sticky,
      top: 0,
      display: 'flex',
      alignItems: 'center',
      backgroundColor:
        isDragging || isHovered ? theme.colors.neutralSubtle : theme.colors.neutralBase,
      overflow: 'hidden',
      padding: isActionCell
        ? theme.spacing.spacingMd
        : `${theme.spacing.spacingMd} ${theme.spacing.spacingXl}`,
      height: `${DEFAULT_HEADER_HEIGHT}px`,
      borderBottom: `1px solid ${theme.colors.neutralSubtle}`,
    };
  },
  wrapperStyles: (
    theme: DesignSystemTheme,
    { isHovered, isFixed, align = 'left', isDragging, isDraggable, isSortable }: StyleOptions,
  ): StyleObject => {
    const { justifyStyles, wrapperStyles } = getStylesByCellAlign(theme, {
      isDraggable,
      isHovered,
      isDragging,
      isSortable,
      isFixed,
    })[align];

    return {
      ...justifyStyles,
      ...wrapperStyles,
      position: 'relative',
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      textWrap: 'nowrap',
      transition: 'all .25s ease-in-out',
      gap: theme.spacing.spacing2xs,
    };
  },
  dragIconContainerStyles: (
    theme: DesignSystemTheme,
    { isHovered, isFixed, isDragging, isDraggable }: StyleOptions,
  ): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    color: theme.colors.neutral,
    left: `-${theme.spacing.spacingXl}`,
    opacity: (isDragging || isHovered) && !isFixed && isDraggable ? 1 : 0,
    transition: 'all .25s ease-in-out',
  }),
};
