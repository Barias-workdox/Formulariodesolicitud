import { HTMLProps, ReactElement, ReactNode } from 'react';
import { StyleObject } from 'styletron-react';
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
export declare const TableRowSelectionCell: ({ disableReason, height, isRowChecked, isRowDisabled, isRowHovered, children, ...rest }: TableRowSelectionCellProps) => ReactElement;
