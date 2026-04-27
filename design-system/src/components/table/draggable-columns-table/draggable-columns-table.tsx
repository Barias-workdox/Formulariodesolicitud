import { useEffect, useRef, useState } from 'react';

import { DragHorizontal, FilterRemove } from '@carbon/icons-react';
import {
  StyledBody,
  StyledCell,
  StyledHead,
  StyledHeadCell,
  StyledRow,
  StyledTable,
} from 'baseui/table';

import { useCss } from '@components/utils/hooks/use-css';
import { useTranslation } from '@components/utils/i18n';

import { Block } from '../../block';
import { Text } from '../../text';
import { StatefulTooltip } from '../../tooltip';
import { spacing } from '../../utils/spacing';

import { AddColumnsButton, ColumnMenuPopover } from './draggable-columns-table-popups';
import { ColumnMenu, DragIcon, TruncatedText } from './draggable-columns-table.styles';

import type {
  ColumnHeaderProps,
  ColumnProps,
  DraggableColumnsTableProps,
  TableBodyProps,
  TableCellProps,
  TableHeadProps,
  TableRowProps,
} from './draggable-columns-table.interfaces';
import type { StyleOverrideProps } from '../../../themes/theme.interfaces';
import type { StyleObject } from 'styletron-standard';

/** Generate styles to the table row */
const getRowStyles = ({ $theme }: StyleOverrideProps): StyleObject => ({
  borderBottom: `1px solid ${$theme.colors.neutralWashed}`,
  ':hover': {
    backgroundColor: $theme.colors.neutralWashed,
    ':has(*) .draggable-columns-table__truncated-text::before': {
      background: `linear-gradient(to right, ${$theme.colors.neutralWashed}00 0%, ${$theme.colors.neutralWashed}FF 100%)`,
    },
  },
});

/**
 * Content of the TableHead.
 * This is the component that contains all the logic of dragging.
 */
const ColumnHeader = function ColumnHeader({
  dataTestId = 'table__header',
  column,
  setDraggingColumnId,
  setDroppableColumnId,
  paddingLeft,
  paddingRight,
  toggleActiveColumn,
  updateSortingColumn,
}: ColumnHeaderProps): React.ReactElement {
  const [isOver, setIsOver] = useState(false);
  const [isOverMenu, setIsOverMenu] = useState(false);
  const ref = useRef(null);

  /** handleDrag event handler */
  async function handleDrag(event): Promise<void> {
    event.preventDefault();

    if (isOverMenu || !column.draggable) return;

    const elmnt = ref.current;
    const rect = ref.current.getBoundingClientRect();
    const shiftX = event.clientX - rect.left;
    const shiftY = event.clientY - rect.top;
    let initialX = rect.left;
    let initialY = rect.top;
    const { parentElement } = elmnt;
    const displayType = elmnt.style.display;

    /**
     * Moves the element at (pageX, pageY) coordinates
     * taking initial shifts into account
     */
    function moveAt(pageX, pageY): void {
      elmnt.style.left = pageX - shiftX + 'px';
      elmnt.style.top = pageY - shiftY + 'px';
    }

    /** onMouseMove event handler */
    function onMouseMove(event): void {
      event.preventDefault();

      moveAt(event.pageX, event.pageY);

      const elemBelow = document
        .elementsFromPoint(event.clientX, event.clientY)
        .find((elem) => elem.classList?.contains('droppable') && elem.id !== column.id);
      // mousemove events may trigger out of the window (when the ball is dragged off-screen)
      // if clientX/clientY are out of the window, then elementFromPoint returns null
      if (!elemBelow) return;

      setDroppableColumnId(elemBelow.id);
    }

    /** onMouseUp event handler */
    async function onMouseUp(event): Promise<void> {
      const animationDuration = 150;

      event.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      elmnt.style.transition = `all ${animationDuration}ms ease-in-out`;

      const headRect = document
        .querySelector(`#${column.id}.droppable-head`)
        .getBoundingClientRect();

      initialX = headRect.left;
      initialY = headRect.top;

      await new Promise(() => {
        elmnt.style.left = initialX + 'px';
        elmnt.style.top = initialY + 'px';

        setTimeout(() => {
          elmnt.style.width = 'inherit';
          elmnt.style.position = 'initial';
          elmnt.style.display = displayType;
          elmnt.style.pointerEvents = 'all';
          parentElement.append(elmnt);

          setDraggingColumnId(null);
          setDroppableColumnId(null);
        }, animationDuration);
      });
    }

    if (event.button === 0) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      setDraggingColumnId(column.id);
      elmnt.style.width = elmnt.clientWidth + 'px';
      elmnt.style.position = 'absolute';
      elmnt.style.transition = 'none';
      elmnt.style.pointerEvents = 'none';
      document.body.append(elmnt);
      moveAt(event.pageX, event.pageY);
    }
  }

  return (
    <StyledHeadCell
      $style={{ padding: 0, border: 'none', minWidth: 0, flex: column.flex || 1 }}
      id={column.id}
      className={column.draggable ? 'droppable-head' : ''}
    >
      <Block
        data-testid={`${dataTestId}--${column.id}`}
        className={column.draggable ? 'draggable-head-block droppable' : ''}
        id={column.id}
        ref={ref}
        display={column.centered ? 'flex' : 'block'}
        justifyContent={column.centered ? 'center' : 'initial'}
        pl={paddingLeft}
        pr={paddingRight}
        py={8}
        width="100%"
        $style={{ fontSize: spacing(8), cursor: column.draggable ? 'move' : 'cursor' }}
        onMouseDown={handleDrag}
        onDragStart={(): boolean => false}
        onMouseEnter={(): void => setIsOver(true)}
        onMouseLeave={(): void => setIsOver(false)}
      >
        <Block
          position="relative"
          display="flex"
          alignItems="center"
        >
          <DragIcon
            className="drag-ic"
            $isOver={column.draggable && isOver}
          >
            <DragHorizontal
              size={16}
              style={{ position: 'relative' }}
            />
          </DragIcon>
          <TruncatedText>
            <StatefulTooltip
              content={column.label}
              returnFocus
              autoFocus
              placement="top"
              showArrow
              ignoreBoundary
              popoverMargin={8}
            >
              <Text
                variant="bodySmall"
                margin="0"
              >
                {column.label}
              </Text>
            </StatefulTooltip>
          </TruncatedText>
          {(column.removable || column.sortable) && (
            <Block
              as={ColumnMenu}
              ml={2}
              mr={4}
              display="flex"
              alignItems="center"
              flex="1"
            >
              <ColumnMenuPopover
                column={column}
                toggleActiveColumn={toggleActiveColumn}
                setIsOverMenu={setIsOverMenu}
                updateSortingColumn={updateSortingColumn}
              />
            </Block>
          )}
        </Block>
      </Block>
    </StyledHeadCell>
  );
};

/**
 * Head cell for the DraggableColumnsTable
 */
const TableHead = ({
  headers,
  setDraggingColumnId,
  setDroppableColumnId,
  allColumns,
  updateActiveColumns,
  updateSortingColumn,
  canAddColumns,
  'data-testid': dataTestId,
}: TableHeadProps): React.ReactElement => {
  const { theme } = useCss();

  /**
   * Validates if the given column is an active column
   */
  const isAnActiveColumn = (column: ColumnProps): boolean =>
    !!headers.find((header: ColumnProps) => header.id === column.id);

  /**
   * Toggle the column active or inactive.
   * This will show or hide the column in the table.
   */
  const toggleActiveColumn = (column): void => {
    const activeColumnsUpdated = headers.slice();

    if (isAnActiveColumn(column)) {
      const columnIndex = headers.findIndex((header) => header.id === column.id);

      activeColumnsUpdated.splice(columnIndex, 1);
    } else {
      activeColumnsUpdated.push(column);
    }

    updateActiveColumns(activeColumnsUpdated);
  };

  return (
    <StyledHead
      $style={{ boxShadow: 'none', borderBottom: `.5px solid ${theme.colors.neutralWashed}` }}
    >
      {headers.length > 0 ? (
        headers.map((column, index) =>
          column.label ? (
            <ColumnHeader
              data-testid={dataTestId}
              key={column.id}
              column={column}
              setDraggingColumnId={setDraggingColumnId}
              setDroppableColumnId={setDroppableColumnId}
              toggleActiveColumn={toggleActiveColumn}
              paddingLeft={index === 0 ? 6 : 0}
              paddingRight={index === headers.length - 1 ? 6 : 0}
              updateSortingColumn={updateSortingColumn}
            />
          ) : (
            <StyledHeadCell
              key={index}
              $style={{ border: 'none', flex: 1, padding: 0 }}
            />
          ),
        )
      ) : (
        <StyledHeadCell $style={{ border: 'none' }}>
          <Block py={8} />
        </StyledHeadCell>
      )}
      {canAddColumns && (
        <StyledHeadCell
          $style={{
            flex: 0,
            padding: 0,
            border: 'none',
            borderLeft: `.5px solid ${theme.colors.neutralWashed}`,
          }}
        >
          <AddColumnsButton
            columns={allColumns.filter((column) => !isAnActiveColumn(column))}
            toggleActiveColumn={toggleActiveColumn}
            data-testid={dataTestId}
          />
        </StyledHeadCell>
      )}
    </StyledHead>
  );
};

/**
 * Body of the DraggableColumnsTable
 */
export const TableBody = ({
  dataTestId = 'table__body',
  children,
  headers,
}: TableBodyProps): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useCss();

  return (
    <StyledBody>
      {headers.length ? (
        children
      ) : (
        <Block
          data-testid={`${dataTestId}__empty-state`}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={40}
          $style={{ borderTop: `1px solid ${theme.colors.neutralWashed}` }}
        >
          <FilterRemove
            size={32}
            color={theme.colors.neutralSubdued}
          />
          <Text
            variant="bodySmall"
            color="neutralSubdued"
          >
            {t('table.columnsEmpty')}
          </Text>
        </Block>
      )}
    </StyledBody>
  );
};

/**
 * Row of the DraggableColumnsTable
 */
export const TableRow = ({ children, onMouseEnter, onMouseLeave }: TableRowProps): JSX.Element => {
  return (
    <StyledRow
      $style={getRowStyles}
      className="draggable-columns-table__row"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - the property exists
      onMouseEnter={onMouseEnter}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - the property exists
      onMouseLeave={onMouseLeave}
    >
      {children}
    </StyledRow>
  );
};

/**
 * Simple cell component for the Draggable Columns Table.
 */
export const TableCell = ({
  children,
  paddingLeft = 0,
  paddingRight = 0,
  paddingTop = spacing(12),
  paddingBottom = spacing(12),
  flex,
  ...rest
}: TableCellProps): JSX.Element => (
  <StyledCell
    {...rest}
    $style={{ padding: 0, minWidth: 0, flex: flex || 1 }}
  >
    <TruncatedText
      $fullwidth={true}
      $style={{ padding: `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}` }}
      className="draggable-columns-table__truncated-text"
    >
      {children}
    </TruncatedText>
  </StyledCell>
);

/**
 * Table that allows columns to be dragged horizontally
 */
export const DraggableColumnsTable = ({
  activeColumns,
  allColumns,
  updateActiveColumns = (): void => {
    return;
  },
  updateSortingColumn = (): void => {
    return;
  },
  items,
  setIsDragging = (): void => {
    return;
  },
  children,
  canAddColumns = true,
  renderTableHeaders = true,
  'data-testid': dataTestId = 'design-system',
}: DraggableColumnsTableProps): JSX.Element => {
  const { theme } = useCss();

  const [draggingColumnId, setDraggingColumnId] = useState(null);
  const [droppableColumnId, setDroppableColumnId] = useState(null);

  /**
   * When a column is being dragged it will update the draggingColumnId and droppableColumnId states.
   * If the draggingColumn collapses with another column then they will be swapped, this is why this effect
   * is in charge to swap them and update the states about the order of the columns in the table (active columns).
   */
  useEffect(() => {
    setIsDragging(draggingColumnId != null);

    if (draggingColumnId && droppableColumnId) {
      // The active columns are the columns shown in the table
      const activeColumnsUpdated = activeColumns.slice();
      // Swap dragging with droppable columns
      const newDragging = activeColumns.find((option) => option.id === droppableColumnId);
      const newDroppable = activeColumns.find((option) => option.id === draggingColumnId);

      activeColumnsUpdated[activeColumns.indexOf(newDragging)] = newDroppable;
      activeColumnsUpdated[activeColumns.indexOf(newDroppable)] = newDragging;
      updateActiveColumns(activeColumnsUpdated);
      setDroppableColumnId(null);
    }
  }, [
    draggingColumnId,
    droppableColumnId,
    activeColumns,
    setIsDragging,
    updateActiveColumns,
    setDroppableColumnId,
  ]);

  return (
    <StyledTable
      $style={{
        height: '100%',
        width: '100%',
        borderTop: `1px solid ${theme.colors.neutralWashed}`,
        borderBottom: items?.length ? 'none' : `1px solid ${theme.colors.neutralWashed}`,
        borderLeft: 'none',
        borderRight: 'none',
        borderRadius: 0,
      }}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - used but not typed
      cellSpacing="0"
    >
      {renderTableHeaders && (
        <TableHead
          headers={activeColumns}
          allColumns={allColumns}
          setDraggingColumnId={setDraggingColumnId}
          setDroppableColumnId={setDroppableColumnId}
          updateActiveColumns={updateActiveColumns}
          updateSortingColumn={updateSortingColumn}
          canAddColumns={canAddColumns}
          data-testid={`${dataTestId}__table-head`}
        />
      )}
      <TableBody headers={activeColumns}>{children}</TableBody>
    </StyledTable>
  );
};
