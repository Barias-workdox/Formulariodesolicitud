import { createContext } from 'react';

import type { DataTableDisabledRowContextValues } from '../data-table.interfaces';

export const DataTableDisabledRowContext = createContext<DataTableDisabledRowContextValues>({
  isRowDisabled: false,
  disableReason: undefined,
});
