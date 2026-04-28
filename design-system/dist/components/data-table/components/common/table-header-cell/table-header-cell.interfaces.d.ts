import { HTMLProps } from 'react';
import { ColumnConfig, DataTableProps } from '../../../data-table.interfaces';
import { UseTableReturn } from '../../../hooks/use-table';
import { WithTestId } from '../../../../../interfaces/common.interfaces';
export type TableHeaderCellProps = WithTestId & Pick<HTMLProps<HTMLDivElement>, 'onMouseEnter' | 'onMouseLeave'> & Omit<ColumnConfig, 'renderType'> & Pick<DataTableProps, 'orderBy' | 'orderDirection'> & {
    /**
     * Indicates whether the header cell is currently hovered over.
     */
    isHovered: boolean;
    /**
     * Indicates whether the header cell is being dragged.
     */
    isDragging: boolean;
} & Pick<UseTableReturn, 'handleOnChange'>;
