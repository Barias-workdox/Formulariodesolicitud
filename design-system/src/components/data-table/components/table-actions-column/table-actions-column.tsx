import type { ReactElement } from 'react';

import { useDataTableContext } from '@components/data-table/hooks/use-data-table-context';
import { useCss } from '@components/utils/hooks/use-css';

import { renderVirtualizedRows } from '../../utils/data-table.utils';

import { TableActionCell } from './components/table-actions-column-cell';
import { TableActionsColumnHeaderCell } from './components/table-actions-column-header-cell';
import { actionsColumnsStyles } from './table-actions-column.styles';

/**
 * This component is used to create a column on the table's right side that contains action buttons
 * or custom content for each row. It can also display a header cell with an "Add" button for adding columns.
 */
export const TableActionsColumn = (): ReactElement => {
  const {
    data,
    rowHeight,
    rowsDisabled = {},
    hoveredRowIndex,
    isScrollable,
    columnsConfig,
    allColumnsConfig,
    showHeaders,
    showHeaderActionButton = true,
    virtualItems,
    handleOnChange,
    updateHoveredRowIndex,
    isColumnDisabledByReason,
  } = useDataTableContext();

  const { containerStyles } = useCss(actionsColumnsStyles, {
    $isScrollable: isScrollable,
    $rowHeight: rowHeight,
  });

  return (
    <div className={containerStyles}>
      {showHeaders && (
        <TableActionsColumnHeaderCell
          columnsConfig={columnsConfig}
          allColumnsConfig={allColumnsConfig}
          handleOnChange={handleOnChange}
          showButton={showHeaderActionButton}
        />
      )}
      {renderVirtualizedRows({
        virtualItems,
        renderRow: (index) => {
          const disableReason = rowsDisabled[index];
          const isRowDisabled = index in rowsDisabled;
          const isCellDisabled =
            isRowDisabled && isColumnDisabledByReason(disableReason, 'actions');

          return (
            <TableActionCell
              key={index}
              disableReason={disableReason}
              isRowDisabled={isCellDisabled}
              isRowHovered={hoveredRowIndex === index}
              height={rowHeight}
              onMouseEnter={(): void => {
                updateHoveredRowIndex(index);
              }}
              onMouseLeave={(): void => {
                updateHoveredRowIndex(undefined);
              }}
            >
              {data[index].at(-1)}
            </TableActionCell>
          );
        },
      })}
    </div>
  );
};
