import { memo } from 'react';
import type { ReactElement } from 'react';

import { CellSkeleton } from '../../../common/cell-skeleton';
import { TableCell } from '../table-cell';

import type { TableCellProps } from '@components/data-table/next/components/common/table-cell/table-cell.interfaces';

export interface TableCellSkeletonProps extends Pick<
  TableCellProps,
  'isHeaderHovered' | 'isDragging' | 'height' | 'rowIndex'
> {
  'data-testid': string;
}

/**
 * Represents a memoized version of TableCellSkeleton component.
 * Renders a TableCell with a CellSkeleton inside, typically used to indicate loading state for cell data.
 */
export const TableCellSkeleton = memo<TableCellSkeletonProps>(function TableCellMemoized({
  'data-testid': dataTestId,
  isHeaderHovered,
  isDragging,
  height,
  rowIndex,
}): ReactElement {
  return (
    <TableCell
      data-testid={dataTestId}
      isDragging={isDragging}
      isHeaderHovered={isHeaderHovered}
      isRowClickable={false}
      isRowHovered={false}
      isRowChecked={false}
      rowIndex={rowIndex}
      height={height}
    >
      <CellSkeleton data-testid={`${dataTestId}--skeleton`} />
    </TableCell>
  );
});
