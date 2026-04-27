import type { ReactElement } from 'react';

import { EmptyState } from '@components/empty-state';
import { useTranslation } from '@components/utils';

import { DragAndDropWrapper } from './components/drag-and-drop-wrapper';
import { EndOfPageNode } from './components/end-of-page-node';
import { TableActionsColumn } from './components/table-actions-column';
import { TableColumn, TableColumnDraggable } from './components/table-column';
import { TableRowSelectionColumn } from './components/table-row-selection-column';
import {
  StyledColumnsContainer,
  StyledEmptyMessageWrapper,
  StyledTableContainer,
} from './data-table.styles';
import { useDataTableContext } from './hooks/use-data-table-context';

/**
 * Data Table Wrapper Component.
 *
 * The `DataTableWrapper` is a higher-level component designed to work with the Data Table feature.
 * It provides a fully functional table with draggable columns, sortable headers, and customizable
 * row heights. This component acts as a container for rendering the table with a responsive
 * layout, handling drag-and-drop events, and managing the state of the table's columns and data.
 */
export const DataTableWrapper = (): ReactElement => {
  const {
    'data-testid': dataTestId,
    isLoading,
    showActionsColumn,
    showRowsSelection,
    data = [],
    columnsConfig = [],
    emptyState,
    tableRef,
    containerRef,
  } = useDataTableContext();
  const { t } = useTranslation();

  const hasData = data.length > 0;
  const shouldShowEmptyMessage = !isLoading && !hasData;
  const shouldShowRowsSelection = showRowsSelection && hasData;

  return (
    <StyledTableContainer
      data-testid={dataTestId}
      ref={tableRef}
    >
      <StyledColumnsContainer ref={containerRef}>
        {/* 1. Row selection column */}
        {shouldShowRowsSelection && <TableRowSelectionColumn />}

        {/* 2. Data columns */}
        <DragAndDropWrapper>
          {columnsConfig.map((columnConfig, index) => {
            const { isDraggable } = columnConfig;
            const TableColumnComponent =
              isDraggable && hasData ? TableColumnDraggable : TableColumn;
            const columnData = data.flatMap((row) => row[index]);

            return (
              <TableColumnComponent
                {...columnConfig}
                dataTestId={`data-table__column-${index}`}
                key={columnConfig.id}
                columnIndex={index}
                columnData={columnData}
              />
            );
          })}
        </DragAndDropWrapper>

        {/* 3. Actions column */}
        {showActionsColumn && hasData && <TableActionsColumn />}
      </StyledColumnsContainer>

      {/* Empty state */}
      {shouldShowEmptyMessage && (
        <StyledEmptyMessageWrapper>
          {emptyState ?? <EmptyState description={t('general.empty')} />}
        </StyledEmptyMessageWrapper>
      )}

      {/* Infinite pagination detector */}
      {hasData && <EndOfPageNode />}
    </StyledTableContainer>
  );
};
