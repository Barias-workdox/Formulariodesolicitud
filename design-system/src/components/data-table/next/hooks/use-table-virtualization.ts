import type { RefObject } from 'react';

import { useVirtualizer } from '@tanstack/react-virtual';

import { DEFAULT_HEADER_HEIGHT, VIRTUALIZATION_OVERSCAN } from '../data-table.constants';

import type { DataTableProps } from '..';
import type { DataTableContextValues } from '../contexts/data-table-context.interfaces';

type UseTableVirtualizationParams = Required<
  Pick<DataTableProps, 'data' | 'rowHeight' | 'showHeaders'>
> & {
  tableRef: RefObject<HTMLDivElement>;
};

type UseTableVirtualizationReturn = Pick<DataTableContextValues, 'totalHeight' | 'virtualItems'>;

/**
 * This hook is used to virtualize the table data and return the total height and virtual items.
 */
export const useTableVirtualization = ({
  data,
  rowHeight,
  tableRef,
  showHeaders,
}: UseTableVirtualizationParams): UseTableVirtualizationReturn => {
  const hasData = data.length > 0;
  const scrollMargin = showHeaders ? DEFAULT_HEADER_HEIGHT : 0;

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    overscan: VIRTUALIZATION_OVERSCAN,
    paddingStart: scrollMargin,
    getScrollElement: () => tableRef.current,
    estimateSize: () => parseInt(rowHeight.toString(), 10),
  });

  const totalHeight = hasData ? `${rowVirtualizer.getTotalSize()}px` : '100%';

  const virtualItems = rowVirtualizer.getVirtualItems();

  return { totalHeight, virtualItems };
};
