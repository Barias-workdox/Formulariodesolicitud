import { createContext } from 'react';

import { noop } from '@utils/noop';

import type { DataTableContextValues } from './data-table-context.interfaces';

export const DataTableContext = createContext<DataTableContextValues>({
  isScrollable: false,
  hoveredRowIndex: 0,
  totalHeight: '',
  orderBy: '',
  orderDirection: 'desc',
  data: [],
  columnsConfig: [],
  allColumnsConfig: [],
  virtualItems: [],
  rowsSelected: [],
  rowsDisabled: {},
  containerRef: undefined,
  listRef: undefined,
  handleOnChange: noop,
  updateHoveredRowIndex: noop,
  isColumnDisabledByReason: noop,
});
