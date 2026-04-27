import { useContext } from 'react';

import { DataTableDisabledRowContext } from '../contexts/data-table-disabled-row.context';

import type { DataTableDisabledRowContextValues } from '../data-table.interfaces';

/**
 * Hook to access the disabled state from DataTable context.
 * Returns `false` when used outside DataTable, allowing standalone usage of cell components.
 *
 * @returns The disabled state from context, or `false` if outside DataTable
 */
export const useDataTableDisabledRow = (): DataTableDisabledRowContextValues => {
  const context = useContext(DataTableDisabledRowContext);

  if (!context) {
    return { isRowDisabled: false, disableReason: undefined };
  }

  return context;
};
