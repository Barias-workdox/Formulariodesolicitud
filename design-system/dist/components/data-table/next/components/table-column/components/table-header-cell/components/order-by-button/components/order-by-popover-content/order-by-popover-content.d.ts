import { ReactElement } from 'react';
import { ColumnConfig, ColumnDataType } from '../../../../../../../../data-table.interfaces';
import { UseTableReturn } from '../../../../../../../../hooks/use-table';
import { OrderDirection } from '../../../../../../../../../../../interfaces/common.interfaces';
export type OrderByPopoverContentProps = Pick<UseTableReturn, 'handleOnChange'> & Pick<ColumnConfig, 'id' | 'isSortable' | 'isRemovable'> & {
    /**
     * Indicates whether the column is currently ordered by.
     */
    isOrderedByThis: boolean;
    /**
     * The data type of the column.
     */
    dataType: ColumnDataType;
    /**
     * The current order direction of the column (asc or desc).
     */
    orderDirection: OrderDirection;
};
/**
 * Represents the content of a popover menu for ordering and managing columns in a table.
 *
 * This component is used to display a menu with options for sorting columns in ascending or descending order,
 * and for hiding columns. It provides user interaction for ordering and managing columns.
 */
export declare const OrderByPopoverContent: ({ id, isSortable, isRemovable, isOrderedByThis, dataType, orderDirection, handleOnChange, }: OrderByPopoverContentProps) => ReactElement;
