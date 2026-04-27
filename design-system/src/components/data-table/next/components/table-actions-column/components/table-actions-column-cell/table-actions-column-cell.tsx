import type { HTMLProps, ReactElement, ReactNode } from 'react';

import { DataTableDisabledRowProvider } from '@components/data-table/next/providers/data-table-disabled-row.provider';

import { useCss } from '../../../../../../utils/hooks/use-css';
import { DisabledRowTooltip } from '../../../common/disabled-row-tooltip';
import { cellStyles } from '../../../common/table-cell/table-cell.styles';

import type { StyleObject } from 'styletron-react';

type TableActionCellProps = HTMLProps<HTMLDivElement> & {
  /**
   * Indicates whether the row is currently hovered.
   */
  isRowHovered: boolean;
  /**
   * Indicates whether the row is disabled.
   */
  isRowDisabled: boolean;
  children: ReactNode;
  /**
   * Indicates the reason why the row is disabled.
   */
  disableReason?: string;
  /**
   * The height of the cell, which can be customized.
   */
  height?: StyleObject['height'];
};

/**
 * This component is used to create a cell that contains action buttons or custom content
 * within a draggable columns table. It provides functionality for registering cell references
 * and applying specific styles based on table properties.
 *
 * It also integrates with the DataTableDisabledRowContext to manage disabled row states.
 */
export const TableActionCell = ({
  disableReason = '',
  height,
  isRowHovered,
  isRowDisabled,
  children,
  ...rest
}: TableActionCellProps): ReactElement => {
  const { containerStyles } = useCss(cellStyles, {
    height,
    isActionCell: true,
    isRowHovered,
    isRowDisabled,
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
