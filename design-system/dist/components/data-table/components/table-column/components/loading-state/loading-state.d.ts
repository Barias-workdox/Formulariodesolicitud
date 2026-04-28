import { TableColumnProps } from '../..';
import { DataTableProps } from '../../../..';
export type LoadingStateProps = Pick<DataTableProps, 'rowHeight'> & Pick<TableColumnProps, 'columnIndex' | 'isDragging'> & {
    isHeaderHovered: boolean;
};
/** Component that renders cells with skeletons indicating a loading process */
export declare const LoadingState: ({ columnIndex, isDragging, rowHeight, isHeaderHovered, }: LoadingStateProps) => JSX.Element;
