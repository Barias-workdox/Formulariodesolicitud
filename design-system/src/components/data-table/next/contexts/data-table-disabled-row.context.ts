import { createContext } from 'react';

import type { DataTableDisabledRowContextValues } from './data-table-context.interfaces';

export const DataTableDisabledRowContext = createContext<DataTableDisabledRowContextValues>({
  isRowDisabled: false,
  disableReason: undefined,
});
