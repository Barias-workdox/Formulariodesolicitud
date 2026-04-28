import { ReactElement } from 'react';
import { TableActionsColumnHeaderCellProps } from '../../../../data-table.interfaces';
/**
 * This component is used to create a header cell that contains an action button
 * for managing table columns. It displays an "Add" button, which, when clicked,
 * opens a popover menu for adding columns to the table.
 */
export declare const TableActionsColumnHeaderCell: ({ dataTestId, columnsConfig, allColumnsConfig, showButton, handleOnChange, }: TableActionsColumnHeaderCellProps) => ReactElement;
