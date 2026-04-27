import { DEFAULT_FONT } from '@tokens';

import { commonStyles } from '../../../data-table.styles';

import type { TableCellProps } from './table-cell.interfaces';
import type { DesignSystemTheme } from '../../../../../../themes';
import type { TableCellAlignType } from '@components/data-table/next/data-table.interfaces';
import type { StyleObject } from 'styletron-react';

type StyleOptions = Partial<
  Pick<
    TableCellProps,
    | 'isHeaderHovered'
    | 'isRowHovered'
    | 'isRowChecked'
    | 'isRowClickable'
    | 'isRowDisabled'
    | 'isDragging'
    | 'align'
    | 'height'
  >
> & {
  isActionCell?: boolean;
};

/** Object representing styles based on cell alignment. */
const stylesByCellAlign: Record<TableCellAlignType, Record<string, StyleObject>> = {
  left: {
    containerStyles: {
      textAlign: 'initial',
      justifyContent: 'start',
    } as StyleObject,
  },
  center: {
    containerStyles: {
      textAlign: 'center',
      justifyContent: 'center',
    } as StyleObject,
  },
  right: {
    containerStyles: {
      textAlign: 'end',
      justifyContent: 'end',
    } as StyleObject,
  },
};

export const cellStyles = {
  containerStyles: (
    theme: DesignSystemTheme,
    {
      isHeaderHovered,
      isRowHovered,
      isRowChecked,
      isRowClickable,
      isRowDisabled,
      isDragging,
      align = 'left',
      height,
      isActionCell = false,
    }: StyleOptions = {},
  ): StyleObject => {
    const { containerStyles } = stylesByCellAlign[align];

    return {
      ...commonStyles,
      ...containerStyles,
      ...theme.typography.ParagraphMedium,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      padding: isActionCell
        ? `0 ${theme.spacing.spacingMd} 0 ${theme.spacing.spacingMd}`
        : `${theme.spacing.spacingXs} ${theme.spacing.spacingXl}`,
      height,
      backgroundColor: isRowDisabled
        ? theme.colors.neutralWashed
        : isRowChecked
          ? theme.colors.brandWashed
          : isDragging || isHeaderHovered || isRowHovered
            ? theme.colors.neutralBase
            : theme.colors.bgBase,
      borderBottom: `1px solid ${theme.colors.neutralWashed}`,
      textWrap: 'nowrap',
      textOverflow: 'ellipsis',
      color: isRowDisabled ? theme.colors.neutralDepressed : theme.colors.neutral,
      ...DEFAULT_FONT,
      ...(isRowClickable && !isRowDisabled && { cursor: 'pointer' }),
    };
  },
};
