import { DataTableDisabledRowContextValues } from '../data-table.interfaces';
/**
 * Hook to access the disabled state from DataTable context.
 * Returns `false` when used outside DataTable, allowing standalone usage of cell components.
 *
 * @returns The disabled state from context, or `false` if outside DataTable
 */
export declare const useDataTableDisabledRow: () => DataTableDisabledRowContextValues;
