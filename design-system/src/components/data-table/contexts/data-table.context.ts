import { createContext } from 'react';

import { noop } from '@utils/noop';

import type { DataTableContextValues } from '../data-table.interfaces';

export const DataTableContext = createContext<DataTableContextValues>({
  isScrollable: false,
  hoveredRowIndex: 0,
  containerRef: undefined,
  listRef: undefined,
  rowsSelected: [],
  rowsDisabled: {},
  virtualItems: [],
  totalHeight: '',
  translateDisableReason: undefined,
  handleOnChange: noop,
  updateHoveredRowIndex: noop,
});
