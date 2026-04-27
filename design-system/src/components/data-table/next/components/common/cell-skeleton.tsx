import { Skeleton } from '@components/skeleton';

export interface CellSkeletonProps {
  'data-testid'?: string;
}

/** Represents a skeleton for a table cell. */
export const CellSkeleton = ({
  'data-testid': dataTestId = 'design_system__cell-skeleton',
}: CellSkeletonProps): JSX.Element => {
  return (
    <Skeleton
      data-testid={dataTestId}
      rows={1}
      animation={true}
      autoSizeRows={true}
      width="100%"
      height="12px"
    />
  );
};
