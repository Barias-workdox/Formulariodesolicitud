import { TableCellProps } from '../../../common/table-cell/table-cell.interfaces';
export interface TableCellSkeletonProps extends Pick<TableCellProps, 'isHeaderHovered' | 'isDragging' | 'height' | 'rowIndex'> {
    'data-testid': string;
}
/**
 * Represents a memoized version of TableCellSkeleton component.
 * Renders a TableCell with a CellSkeleton inside, typically used to indicate loading state for cell data.
 */
export declare const TableCellSkeleton: import('react').NamedExoticComponent<TableCellSkeletonProps>;
