import { useCallback, useMemo, type ReactElement } from 'react';

import { Checkbox } from '@components/checkbox';
import { useDataTableContext } from '@components/data-table/next/hooks/use-data-table-context';
import { useCss } from '@components/utils/hooks/use-css';

import { renderVirtualizedRows } from '../../utils/data-table.utils';

import { TableRowSelectionCell } from './components/table-row-selection-cell';
import { TableRowsSelectionHeaderCell } from './components/table-rows-selection-header-cell';
import { rowSelectionColumnsStyles } from './table-row-selection-column.styles';

/**
 * This component is used to create a column on the table's left side that contains the checkbox
 * or custom content for each row. It can also display a header cell with checkbox for add/remove
 * all rows selected.
 */
export const TableRowSelectionColumn = (): ReactElement => {
  const {
    'data-testid': dataTestId,
    isScrollable,
    columnsConfig = [],
    rowsSelected = [],
    rowsDisabled = {},
    data = [],
    showHeaders,
    virtualItems,
    hoveredRowIndex,
    rowHeight,
    updateHoveredRowIndex,
    handleOnChange,
    isColumnDisabledByReason,
  } = useDataTableContext();

  /** Memoized sets for selected rows */
  const selectedRowsSet = useMemo(() => new Set(rowsSelected), [rowsSelected]);

  const showColumnShadow = !columnsConfig[0]?.isFixed && isScrollable;
  const { containerStyles } = useCss(rowSelectionColumnsStyles, {
    showColumnShadow,
  });

  /** Rows changes event handler */
  const handleSetRowsSelected = useCallback(
    (rows: number[]): void => {
      handleOnChange({
        event: 'row-selection',
        payload: {
          rowsSelected: rows,
        },
      });
    },
    [handleOnChange],
  );

  /** Row checkbox click event handler */
  const handleClickCheck = useCallback(
    (index: number) => (): void => {
      const newRowsSelected = selectedRowsSet.has(index)
        ? rowsSelected.filter((i) => i !== index)
        : [...rowsSelected, index].sort();

      handleSetRowsSelected(newRowsSelected);
    },
    [selectedRowsSet, rowsSelected, handleSetRowsSelected],
  );

  /** Header checkbox click event handler */
  const handleClickAllCheck = useCallback((): void => {
    if (selectedRowsSet.size > 0) {
      handleSetRowsSelected([]);

      return;
    }

    const dataLength = data?.length ?? 0;
    const allSelectableIndexes = Array.from({ length: dataLength }, (_, i) => i).filter(
      (index) => !(index in rowsDisabled),
    );

    handleSetRowsSelected(allSelectableIndexes);
  }, [data?.length, rowsDisabled, selectedRowsSet.size, handleSetRowsSelected]);
  const totalRows = data?.length ?? 0;
  const selectableCount = totalRows - Object.keys(rowsDisabled).length;
  const isAllChecked = selectedRowsSet.size > 0 && selectedRowsSet.size === selectableCount;
  const isIndeterminate = selectedRowsSet.size > 0 && selectedRowsSet.size < selectableCount;

  return (
    <div className={containerStyles}>
      {showHeaders && (
        <TableRowsSelectionHeaderCell
          data-testid={dataTestId ? `${dataTestId}--checkbox-all` : undefined}
          onClickAll={handleClickAllCheck}
          isAllCheck={isAllChecked}
          isIndeterminate={isIndeterminate}
        />
      )}
      {renderVirtualizedRows({
        virtualItems,
        renderRow: (index) => {
          const isRowSelected = selectedRowsSet.has(index);
          const isRowDisabled = index in rowsDisabled;
          const disableReason = rowsDisabled[index];
          const isCellDisabled =
            isRowDisabled && isColumnDisabledByReason(disableReason, 'actions');

          return (
            <TableRowSelectionCell
              key={index}
              disableReason={disableReason}
              isRowHovered={hoveredRowIndex === index}
              isRowChecked={isRowSelected}
              isRowDisabled={isCellDisabled}
              height={rowHeight}
              onMouseEnter={(): void => updateHoveredRowIndex(index)}
              onMouseLeave={(): void => updateHoveredRowIndex(-1)}
            >
              <Checkbox
                data-testid={dataTestId ? `${dataTestId}--checkbox-${index}` : undefined}
                checked={isRowSelected}
                disabled={isRowDisabled}
                onChange={handleClickCheck(index)}
              />
            </TableRowSelectionCell>
          );
        },
      })}
    </div>
  );
};
