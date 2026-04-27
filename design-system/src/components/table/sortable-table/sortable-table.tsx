import { useCallback } from 'react';
import type { ReactElement, ReactNode } from 'react';

import { useCss } from '@components/utils/hooks/use-css';

import { DraggableRowsTable } from '../draggable-rows-table';

import { tableOverrideStyles } from './sortable-table.styles';
import { getTableBody, getTableHeader } from './sortable-table.utils';

import type { TableCellProps } from '../components';
import type { DraggableRowsTableProps } from '@components/table/draggable-rows-table';
import type { DraggableCellTableProps } from '@components/table/draggable-rows-table/components/draggable-cell-table-next';

export interface SortableTableProps extends Pick<
  DraggableRowsTableProps,
  'onDragEnd' | 'isDragDisabled' | 'droppableId'
> {
  'data-testid': string;
  headers: (string | ((props: Partial<TableCellProps>) => ReactElement))[];
  children: (
    | ReactNode
    | ((props: DraggableCellTableProps) => ReactElement<DraggableCellTableProps>)
  )[][];
}

/** Sortable rows table component, renders the table with draggable rows and header for each column */
export const SortableTable = ({
  'data-testid': dataTestId,
  isDragDisabled,
  droppableId,
  headers,
  children,
  onDragEnd,
}: SortableTableProps): ReactElement => {
  const { theme } = useCss();

  /** Parse the headers prop data to render correctly in table */
  const tableHeader = useCallback(
    () => getTableHeader(headers, theme, dataTestId),
    [headers, theme, dataTestId],
  );

  /** Parse the children prop to render correctly in table */
  const tableBody = useCallback(
    () => getTableBody(children, isDragDisabled, theme, dataTestId),
    [children, isDragDisabled, theme, dataTestId],
  );

  return (
    <DraggableRowsTable
      data-testid={dataTestId}
      droppableId={droppableId}
      onDragEnd={onDragEnd}
      isDragDisabled={isDragDisabled}
      headers={tableHeader()}
      items={tableBody()}
      overrides={tableOverrideStyles(theme)}
    />
  );
};
