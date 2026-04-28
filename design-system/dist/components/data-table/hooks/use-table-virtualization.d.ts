import { RefObject } from 'react';
import { DataTableContextValues, DataTableProps } from '..';
type UseTableVirtualizationParams = Pick<DataTableProps, 'data' | 'rowHeight' | 'showHeaders'> & {
    tableRef: RefObject<HTMLDivElement>;
};
type UseTableVirtualizationReturn = Pick<DataTableContextValues, 'totalHeight' | 'virtualItems'>;
/**
 * This hook is used to virtualize the table data and return the total height and virtual items.
 */
export declare const useTableVirtualization: ({ data, rowHeight, tableRef, showHeaders, }: UseTableVirtualizationParams) => UseTableVirtualizationReturn;
export {};
