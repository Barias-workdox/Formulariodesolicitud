import { HTMLProps, ReactNode } from 'react';
import { ColumnConfig, DataTableProps } from '../../../data-table.interfaces';
import { WithTestId } from '../../../../../../interfaces/common.interfaces';
import { StyleObject } from 'styletron-react';
export type TableCellProps = WithTestId & Omit<HTMLProps<HTMLDivElement>, 'onContextMenu'> & Pick<DataTableProps, 'onContextMenu'> & Pick<ColumnConfig, 'align'> & {
    children: ReactNode;
    /**
     * Indicates whether the table row is clickable, affecting cell styling.
     */
    isRowClickable: boolean;
    /**
     * Indicates whether the table header is currently hovered, affecting cell styling.
     */
    isHeaderHovered: boolean;
    /**
     * Indicates whether the table row is currently hovered, affecting cell styling.
     */
    isRowHovered: boolean;
    /**
     * Indicates whether the table row is currently selected/checked, affecting cell styling.
     */
    isRowChecked: boolean;
    /**
     * Indicates whether the table row is currently disabled, affecting cell styling.
     */
    isRowDisabled?: boolean;
    /**
     * Indicates whether the cell is currently being dragged, affecting cell styling.
     */
    isDragging: boolean;
    /**
     * Indicates the reason why the row is disabled.
     */
    disableReason?: string;
    /**
     * The height of the cell, which can be customized.
     */
    height?: StyleObject['height'];
    /**
     * The index of the row containing the cell.
     */
    rowIndex: number;
};
