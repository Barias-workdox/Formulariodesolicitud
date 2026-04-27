import type { ReactNode } from 'react';

import { Text } from '@components/text';

import { TableCell } from '../components';
import { DraggableCellTable } from '../draggable-rows-table';

import { styles } from './sortable-table.styles';

import type { TableCellProps } from '../components';
import type { DraggableCellTableProps } from '../draggable-rows-table';
import type { SortableTableProps } from './sortable-table';
import type { DesignSystemTheme } from '@themes/theme.interfaces';

/**
 * Utility to render in table the table header cell elements.
 * Each cell can be declared as string or a function that execute it
 * self with default cell props returning a custom cell component.
 */
export const getTableHeader = (
  headers: SortableTableProps['headers'],
  theme: DesignSystemTheme,
  dataTestId?: string,
): ReactNode[] =>
  headers.map((tableHeaderCell, indexHeaderCell) => {
    const tableHeaderCellProps: Partial<TableCellProps> = {
      'data-testid': dataTestId ? `${dataTestId}--header-cell-${indexHeaderCell}` : undefined,
      $style: styles.headerCellStyles(theme),
    };

    return typeof tableHeaderCell !== 'function' ? (
      <TableCell
        key={`header-cell-${tableHeaderCell}`}
        {...tableHeaderCellProps}
      >
        <Text
          variant="bodySmall"
          margin={0}
          fontWeight="500"
        >
          {tableHeaderCell}
        </Text>
      </TableCell>
    ) : (
      tableHeaderCell(tableHeaderCellProps)
    );
  });

/**
 * Utility to render in table the table body cell elements.
 * Each cell into each row can be declared as string or a function that
 * execute it self with default cell props returning a custom cell component.
 */
export const getTableBody = (
  children: SortableTableProps['children'],
  isDragDisabled: boolean,
  theme: DesignSystemTheme,
  dataTestId?: string,
): ReactNode[] =>
  children.map((tableBodyRow, indexBodyRow) =>
    tableBodyRow.map((tableBodyCell, indexBodyCell) => {
      const tableBodyCellProps: DraggableCellTableProps = {
        'data-testid': dataTestId
          ? `${dataTestId}--body-cell-${indexBodyRow}-${indexBodyCell}`
          : undefined,
        isDisabled: isDragDisabled || indexBodyCell !== 0,
        $style: styles.headerBodyStyles(theme),
      };

      return typeof tableBodyCell !== 'function' ? (
        <DraggableCellTable
          key={`body-cell-${indexBodyRow}-${indexBodyCell}`}
          {...tableBodyCellProps}
        >
          {tableBodyCell}
        </DraggableCellTable>
      ) : (
        tableBodyCell(tableBodyCellProps)
      );
    }),
  );
