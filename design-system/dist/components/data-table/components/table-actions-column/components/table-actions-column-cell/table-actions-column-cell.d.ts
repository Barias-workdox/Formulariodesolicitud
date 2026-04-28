import { HTMLProps, ReactElement, ReactNode } from 'react';
import { StyleObject } from 'styletron-react';
type TableActionCellProps = HTMLProps<HTMLDivElement> & {
    /**
     * Indicates whether the row is disabled.
     */
    isRowDisabled: boolean;
    /**
     * Indicates whether the row is currently hovered.
     */
    isRowHovered: boolean;
    children: ReactNode;
    /**
     * The height of the cell, which can be customized.
     */
    height?: StyleObject['height'];
    /**
     * The reason why the row is disabled.
     */
    disableReason?: string;
};
/**
 * This component is used to create a cell that contains action buttons or custom content
 * within a draggable columns table. It provides functionality for registering cell references
 * and applying specific styles based on table properties.
 *
 * It also integrates with the DataTableDisabledRowContext to manage disabled row states.
 */
export declare const TableActionCell: ({ disableReason, height, isRowDisabled, isRowHovered, children, ...rest }: TableActionCellProps) => ReactElement;
export {};
