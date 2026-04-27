import { useDeferredValue, useRef, useState, type ReactElement, type ReactNode } from 'react';

import { MIN_COLUMN_WIDTH } from '@components/data-table/data-table.constants';
import { useDataTableContext } from '@components/data-table/hooks/use-data-table-context';
import { renderVirtualizedRows } from '@components/data-table/utils';
import { noop } from '@utils/noop';

import { LoadingState } from './components/loading-state';
import { ResizeColumnLine } from './components/resize-column-line';
import { TableCell } from './components/table-cell';
import { TableHeaderCell } from './components/table-header-cell';
import { StyledTableColumn, StyledTableColumnContent } from './table-column.styles';

import type { ColumnConfig } from '@components/data-table/data-table.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';
import type { VirtualItem } from '@tanstack/react-virtual';

export type TableColumnProps = WithTestId &
  ColumnConfig & {
    columnIndex: number;
    /**
     * The data to display in the column.
     */
    columnData: ReactNode[];
    /**
     * Indicates whether the column is currently being dragged.
     */
    isDragging?: boolean;
    /**
     * A function to update the drag disabled state.
     */
    updateIsDragDisabled?(value: boolean): void;
  };

/** Deferred hidden sizer — measures visible cells to establish intrinsic column width */
const ColumnSizer = ({
  virtualItems,
  columnData,
}: {
  virtualItems: VirtualItem[];
  columnData: ReactNode[];
}): ReactElement => {
  const deferredItems = useDeferredValue(virtualItems);

  return (
    <div
      aria-hidden
      style={{ height: 0, overflow: 'hidden', visibility: 'hidden' }}
    >
      {deferredItems.map((item) =>
        columnData[item.index] != null ? (
          <div
            key={item.key}
            style={{ display: 'flex', whiteSpace: 'nowrap', padding: '0 1.5rem' }}
          >
            {columnData[item.index]}
          </div>
        ) : null,
      )}
    </div>
  );
};

/**
 * Represents a column within a `DataTable`.
 *
 * This component represents a single column in a `DataTable`, offering features
 * like drag-and-drop reordering, sortable columns, text alignment, fixed positioning during
 * horizontal scrolling, resizable columns with custom minimum and maximum widths, and more.
 *
 * When the prop `isLoading` is set to true and there is no an infinite loading configuration,
 * a group of skeleton elements will be rendered at the end of the table. These skeletons serve as placeholders,
 * visually indicating that new data is currently being fetched.
 
 * It supports customization of appearance and behavior through various properties and callbacks.
 * The component provides data type information for sorting, custom row heights, optional header
 * cells, and event handling for hover interactions and cell registration to handle dynamic cell height.
 */
export const TableColumn = ({
  dataTestId = 'data-table__column',
  id,
  columnIndex,
  label,
  isDraggable,
  isDragging = false,
  isSortable,
  isFixed = false,
  isRemovable,
  isResizable = false,
  dataType,
  align = 'left',
  width,
  minWidth = MIN_COLUMN_WIDTH,
  maxWidth,
  columnData,
  updateIsDragDisabled,
}: TableColumnProps): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [isResizeHovered, setIsResizeHovered] = useState(false);
  const [localWidth, setLocalWidth] = useState<ColumnConfig['width']>(() => width);

  const {
    isLoading,
    isScrollable,
    isRowClickable = false,
    showRowsSelection = false,
    autoMeasureCells = false,
    showHeaders,
    hoveredRowIndex,
    rowHeight,
    orderBy = '',
    orderDirection = 'asc',
    virtualItems,
    data,
    handleOnChange,
    onClickRow = noop,
    onContextMenu,
    updateHoveredRowIndex,
    isColumnDisabledByReason,
  } = useDataTableContext();

  const hasData = columnData.length > 0;

  const {
    paginationSettings: { isEnabled, method } = {},
    rowsSelected = [],
    rowsDisabled = {},
  } = useDataTableContext();

  const isInfinitePaginationEnabled = isEnabled && method === 'infinite';

  /** Verify if the current table configuration should render the loading state */
  const shouldRenderLoadingCells = isLoading && !isInfinitePaginationEnabled;

  /**
   * Callback function to update the width of the column dynamically.
   * This function is typically used when the column is resizable,
   * allowing users to adjust its width interactively.
   */
  const updateWidth = (updatedWidth: string): void => {
    if (updatedWidth !== localWidth) {
      setLocalWidth(updatedWidth);
      handleOnChange({ payload: { id, width: updatedWidth }, event: 'resize-column-width' });
    }
  };

  return (
    <StyledTableColumn
      ref={ref}
      $isFirstColumn={columnIndex === 0}
      $isLastColumn={columnIndex === (data?.length || 0) - 1}
      $isDragging={isDragging}
      $isFixed={isFixed && hasData}
      $isScrollable={isScrollable}
      $isHeaderHovered={isHeaderHovered}
      $isSelectable={showRowsSelection}
      $isResizeHovered={isResizeHovered}
      $isResizable={isResizable && !shouldRenderLoadingCells}
      $width={localWidth}
      $minWidth={minWidth}
      $maxWidth={maxWidth}
    >
      <StyledTableColumnContent>
        {showHeaders && (
          <TableHeaderCell
            dataTestId={`${dataTestId}__header-cell`}
            id={id}
            label={label}
            isDragging={isDragging}
            isSortable={isSortable}
            isHovered={isHeaderHovered}
            align={align}
            isRemovable={isRemovable}
            isDraggable={isDraggable && hasData}
            isFixed={isFixed}
            orderBy={orderBy}
            orderDirection={orderDirection}
            dataType={dataType}
            handleOnChange={handleOnChange}
            onMouseEnter={(): void => {
              updateIsDragDisabled?.(!isDraggable);
              setIsHeaderHovered(true);
            }}
            onMouseLeave={(): void => {
              updateIsDragDisabled?.(true);
              setIsHeaderHovered(false);
            }}
          />
        )}

        {/* Hidden sizer in normal flow — lets the browser measure visible cells for intrinsic column width */}
        {autoMeasureCells && hasData && (
          <ColumnSizer
            virtualItems={virtualItems}
            columnData={columnData}
          />
        )}

        {renderVirtualizedRows({
          virtualItems,
          renderRow: (index) => {
            const disableReason = rowsDisabled[index];
            const isRowDisabled = index in rowsDisabled;
            const isCellDisabled =
              isRowDisabled && isColumnDisabledByReason(disableReason, 'data', id);

            return (
              <TableCell
                dataTestId={`${dataTestId}__cell-${index}`}
                key={`${columnIndex}-${index}`}
                isHeaderHovered={isHeaderHovered}
                align={align}
                disableReason={disableReason}
                isRowChecked={rowsSelected.some((selectedIndex) => selectedIndex === index)}
                isRowDisabled={isCellDisabled}
                isRowHovered={hoveredRowIndex === index}
                isRowClickable={isRowClickable}
                isDragging={isDragging}
                height={rowHeight}
                rowIndex={index}
                onMouseEnter={(): void => {
                  updateHoveredRowIndex(index);
                }}
                onMouseLeave={(): void => {
                  updateHoveredRowIndex(-1);
                }}
                onClick={(): void => {
                  onClickRow(index);
                }}
                onContextMenu={onContextMenu}
              >
                {columnData[index]}
              </TableCell>
            );
          },
        })}

        {shouldRenderLoadingCells && (
          <LoadingState
            columnIndex={columnIndex}
            isDragging={isDragging}
            isHeaderHovered={isHeaderHovered}
            rowHeight={rowHeight}
          />
        )}
      </StyledTableColumnContent>
      {isResizable && !shouldRenderLoadingCells && hasData && (
        <ResizeColumnLine
          dataTestId={`${dataTestId}__resize-line`}
          columnRef={ref}
          minWidth={minWidth}
          maxWidth={maxWidth}
          width={localWidth}
          updateWidth={updateWidth}
          setIsResizeHovered={setIsResizeHovered}
        />
      )}
    </StyledTableColumn>
  );
};
