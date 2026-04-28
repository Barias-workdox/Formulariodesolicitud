import { AddColumnsButtonProps, ColumnMenuPopoverProps } from './draggable-columns-table.interfaces';
/**
 * Button to add columns to the table. Will show the available columns as options.
 */
export declare const AddColumnsButton: ({ columns, toggleActiveColumn, "data-testid": dataTestId, }: AddColumnsButtonProps) => React.ReactElement;
/**
 * This is the menu as a popover for the table column header.
 * It will show the options to: "remove the column", "order ascending" and "order descending".
 */
export declare const ColumnMenuPopover: ({ dataTestId, column, setIsOverMenu, toggleActiveColumn, updateSortingColumn, }: ColumnMenuPopoverProps) => React.ReactElement;
