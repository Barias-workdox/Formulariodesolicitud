import { useContext } from 'react';

import { DataTableContext } from '../contexts/data-table.context';

import type { DataTableContextValues } from '../contexts/data-table-context.interfaces';

/**
 * Custom hook for accessing the Data Table context.
 *
 * This hook allows components within the Data Table to access the context's values
 * and functionality.
 */
export const useDataTableContext = (): DataTableContextValues => useContext(DataTableContext);
