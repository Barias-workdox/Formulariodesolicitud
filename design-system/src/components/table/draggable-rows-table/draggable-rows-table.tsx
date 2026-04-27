import type { CSSProperties, ReactNode } from 'react';

import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';

import { themedUseStyletron } from '@themes/index';

import { tableContainerStyles, tableRowStyles } from './draggable-rows-table.styles';

import type { DragDropContextProps, DraggableProps, DroppableProps } from '@hello-pangea/dnd';
import type { StyleObject } from 'styletron-standard';

export interface DraggableRowsTableProps {
  'data-testid'?: string;
  droppableId: DroppableProps['droppableId'];
  onDragEnd: DragDropContextProps['onDragEnd'];
  headers: ReactNode[];
  /** Each row has consists of an array of semantic React nodes */
  items: ReactNode[];
  /** Custom division line between headers and data */
  divisionLine?: ReactNode;
  isDragDisabled?: DraggableProps['isDragDisabled'];
  overrides?: {
    Root?: StyleObject;
    Row?: StyleObject;
    DivisionContainer?: StyleObject;
  };
}

/**
 * Styled Draggable rows table, allowing user to send custom styled headers and rows.
 * The dragging element is reparented using the draggable clone api, to avoid position
 * issues. This way, the dragged element
 */
export const DraggableRowsTable = ({
  'data-testid': dataTestId = 'design-system__draggable-rows-table--component',
  onDragEnd,
  headers,
  items,
  droppableId,
  divisionLine,
  isDragDisabled = false,
  overrides = {},
}: DraggableRowsTableProps): JSX.Element => {
  const [css, theme] = themedUseStyletron();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId={droppableId}
        // Draggable clone api to reparent the dragged element using portals
        renderClone={(provided, snapshot, rubric): JSX.Element => (
          // DIV tag used to avoid `validateDOMNesting` warning
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={tableRowStyles(theme, snapshot.isDragging, {
              ...provided.draggableProps.style,
              ...((overrides.Row as CSSProperties) ?? {}),
            })}
          >
            <table className={css(tableContainerStyles())}>
              <tbody>
                <tr>{items[rubric.source.index]}</tr>
              </tbody>
            </table>
          </div>
        )}
      >
        {(provided): JSX.Element => (
          <table
            data-testid={`${dataTestId}-table`}
            ref={provided.innerRef}
            className={css({
              ...tableContainerStyles(),
              ...overrides.Root,
            })}
          >
            <thead data-testid={`${dataTestId}-table-head`}>
              <tr>{headers}</tr>
            </thead>
            <tbody data-testid={`${dataTestId}-table-body`}>
              {divisionLine && (
                <tr>
                  <td
                    colSpan={headers.length}
                    className={css(overrides.DivisionContainer)}
                  >
                    {divisionLine}
                  </td>
                </tr>
              )}
              {items.map((innerItems, index) => (
                <Draggable
                  key={`draggable-table-item-key-${droppableId}-${index}`}
                  draggableId={`draggable-table-item-id-${droppableId}-${index}`}
                  index={index}
                  isDragDisabled={isDragDisabled}
                >
                  {/* //This is the element in the table without dragging (drag is handled by clone api using portals) */}
                  {(provided, snapshot): JSX.Element => (
                    <tr
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={tableRowStyles(theme, snapshot.isDragging, {
                        ...provided.draggableProps.style,
                        ...((overrides.Row as CSSProperties) ?? {}),
                      })}
                    >
                      {innerItems}
                    </tr>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </tbody>
          </table>
        )}
      </Droppable>
    </DragDropContext>
  );
};
