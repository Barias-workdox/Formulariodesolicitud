import { memo, useCallback } from 'react';
import type { ReactElement } from 'react';

import { DataTableDisabledRowProvider } from '@components/data-table/providers';

import { useCss } from '../../../../../utils/hooks/use-css';
import { cellStyles } from '../../../common/table-cell/table-cell.styles';

import type { TableCellProps } from '../../../common/table-cell/table-cell.interfaces';

/**
 * Represents a cell within a table in a `DataTable`.
 *
 * This component is used to create individual cells within a table. It supports various
 * properties to control the cell's appearance and behavior, such as alignment, fixed positioning,
 * and dynamic sizing based on content changes.
 */
export const TableCell = memo<TableCellProps>(function TableCellMemoized({
  dataTestId = 'data-table__cell',
  children,
  isHeaderHovered,
  align,
  disableReason = '',
  isRowHovered,
  isRowChecked,
  isRowClickable,
  isRowDisabled = false,
  isDragging,
  height,
  role,
  rowIndex,
  tabIndex,
  onClick,
  onContextMenu,
  onKeyDown,
  ...rest
}): ReactElement {
  const { containerStyles } = useCss(cellStyles, {
    isHeaderHovered,
    isRowHovered,
    isRowChecked,
    isDragging,
    isRowDisabled,
    align,
    isRowClickable,
    height,
  });

  /**
   * Handles the context menu event for the table cell.
   */
  const handleContextMenu = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();

      onContextMenu?.(event, rowIndex);
    },
    [onContextMenu, rowIndex],
  );

  /** Handles the click event for the table cell. */
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      if (onClick && !isRowDisabled) {
        onClick(event);
      }
    },
    [onClick, isRowDisabled],
  );

  /** Handles the key down event for the table cell. */
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if ((event.key === 'Enter' || event.key === ' ') && onClick && onKeyDown && !isRowDisabled) {
        event.preventDefault();
        event.stopPropagation();
        onClick(event as unknown as React.MouseEvent<HTMLDivElement>);
        onKeyDown(event);
      }
    },
    [onClick, onKeyDown, isRowDisabled],
  );

  /** Determines the interactive properties for the table cell based on the presence of an onClick handler. */
  const interactiveProps = onClick
    ? {
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        role: role ?? ('button' as const),
        tabIndex: tabIndex ?? 0,
      }
    : {
        role,
        tabIndex,
        onKeyDown,
      };

  return (
    <DataTableDisabledRowProvider
      isRowDisabled={isRowDisabled}
      disableReason={disableReason}
    >
      <div
        data-testid={dataTestId}
        className={containerStyles}
        onContextMenu={handleContextMenu}
        {...interactiveProps}
        {...rest}
      >
        {children}
      </div>
    </DataTableDisabledRowProvider>
  );
});
