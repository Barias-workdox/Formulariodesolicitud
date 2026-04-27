import type { HTMLProps, ReactElement, ReactNode } from 'react';

import { DataTableDisabledRowProvider } from '@components/data-table/next/providers';
import { useCss } from '@components/utils/hooks/use-css';

import { DisabledRowTooltip } from '../../../common/disabled-row-tooltip';
import { cellStyles } from '../../../common/table-cell/table-cell.styles';

import type { StyleObject } from 'styletron-react';

export type TableRowSelectionCellProps = HTMLProps<HTMLDivElement> & {
  /**
   * Indicates whether the row is currently selected/checked.
   */
  isRowChecked: boolean;
  /**
   * Indicates whether the row is currently disabled.
   */
  isRowDisabled: boolean;
  /**
   * Indicates whether the row is currently hovered.
   */
  isRowHovered: boolean;
  children: ReactNode;
  /**
   * The reason why the row is disabled.
   */
  disableReason?: string;
  /**
   * The height of the cell, which can be customized.
   */
  height?: StyleObject['height'];
};

/**
 * This component is used to create a cell that contains the checkbox for the row or custom content
 * within a draggable columns table. It provides functionality for registering cell references
 * and applying specific styles based on table properties.
 */
export const TableRowSelectionCell = ({
  disableReason = '',
  height,
  isRowChecked,
  isRowDisabled,
  isRowHovered,
  children,
  ...rest
}: TableRowSelectionCellProps): ReactElement => {
  const { containerStyles } = useCss(cellStyles, {
    height,
    isRowHovered,
    isRowChecked,
    isRowDisabled,
    isActionCell: true,
  });

  return (
    <DataTableDisabledRowProvider
      isRowDisabled={isRowDisabled}
      disableReason={disableReason}
    >
      <DisabledRowTooltip>
        <div
          className={containerStyles}
          {...rest}
        >
          {children}
        </div>
      </DisabledRowTooltip>
    </DataTableDisabledRowProvider>
  );
};
