import { MutableRefObject, ReactElement } from 'react';
import { ColumnConfig } from '../../../../data-table.interfaces';
import { WithTestId } from '../../../../../../../interfaces/common.interfaces';
type ResizeColumnLineProps = WithTestId & Pick<ColumnConfig, 'width' | 'minWidth' | 'maxWidth'> & {
    /** Reference to the HTML element representing the table column. */
    columnRef: MutableRefObject<HTMLDivElement | null>;
    /** Function to update the width of the table column, useful to store the user configuration in the localStorage. */
    updateWidth(width: string): void;
    /** Function to set the resize hovered state. */
    setIsResizeHovered(isResizeHovered: boolean): void;
};
/**
 * Represents a draggable line for resizing a table column.
 *
 * This component is used to create a draggable line that allows users to resize a table column
 * by clicking and dragging the line horizontally. It provides interactive behavior for resizing
 * columns and updates the column's width based on the user's interaction.
 */
export declare const ResizeColumnLine: ({ dataTestId, columnRef, minWidth, maxWidth, width, setIsResizeHovered, updateWidth, }: ResizeColumnLineProps) => ReactElement;
export {};
