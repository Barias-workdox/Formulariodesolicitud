import { ReactElement } from 'react';
import { ColumnConfig, DataTableProps } from '../../../../../../data-table.interfaces';
import { UseTableReturn } from '../../../../../../hooks/use-table';
import { WithTestId } from '../../../../../../../../interfaces/common.interfaces';
export type OrderByButtonProps = WithTestId & Pick<DataTableProps, 'orderDirection'> & Pick<UseTableReturn, 'handleOnChange'> & Pick<ColumnConfig, 'id' | 'isSortable' | 'isRemovable' | 'dataType' | 'label'> & {
    /**
     * Indicates whether the column is currently ordered by.
     */
    isOrderedByThis: boolean;
};
/**
 * Represents a button for ordering and sorting columns in a table header.
 *
 * This component is used in the header of a table to display a button with an icon for sorting columns
 * in ascending or descending order. It also handles the popover menu for sorting options and hiding columns.
 */
export declare const OrderByButton: ({ dataTestId, id, label, isOrderedByThis, isSortable, isRemovable, orderDirection, dataType, handleOnChange, }: OrderByButtonProps) => ReactElement;
