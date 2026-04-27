import { DEFAULT_SKELETON_ROW_COUNT } from '@components/data-table/next/data-table.constants';

import { TableCellSkeleton } from '../table-cell-skeleton';

import type { TableColumnProps } from '../..';
import type { DataTableProps } from '@components/data-table/next';

export type LoadingStateProps = Pick<DataTableProps, 'rowHeight'> &
  Pick<TableColumnProps, 'columnIndex' | 'isDragging'> & {
    isHeaderHovered: boolean;
  };

/** Component that renders cells with skeletons indicating a loading process */
export const LoadingState = ({
  columnIndex,
  isDragging = false,
  rowHeight,
  isHeaderHovered,
}: LoadingStateProps): JSX.Element => {
  return (
    <>
      {Array.from({ length: DEFAULT_SKELETON_ROW_COUNT }, (_, cellSkeletonIndex) => {
        const skeletonId = `${columnIndex}-cell-skeleton-${cellSkeletonIndex}`;

        return (
          <TableCellSkeleton
            key={skeletonId}
            data-testid={skeletonId}
            isDragging={isDragging}
            isHeaderHovered={isHeaderHovered}
            rowIndex={1}
            height={rowHeight}
          />
        );
      })}
    </>
  );
};
