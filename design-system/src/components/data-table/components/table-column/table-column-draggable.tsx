import { useState } from 'react';
import type { ReactElement } from 'react';

import { Draggable } from '@hello-pangea/dnd';

import { DATA_TABLE_Z_INDEX } from '@components/data-table/data-table.constants';
import { commonStyles } from '@components/data-table/data-table.styles';
import { themedUseStyletron } from '@themes/utilities';

import { TableColumn } from './table-column';

import type { TableColumnProps } from './table-column';
import type { StyleObject } from 'styletron-react';

export type TableColumnDraggableProps = Omit<TableColumnProps, 'updateIsDragDisabled'>;

/**
 * Represents a draggable table column in a `DataTable`.
 *
 * This component wraps the TableColumn component and provides the functionality to make
 * the column draggable within a `DataTable` using the `@hello-pangea/dnd` library.
 * It manages the drag-and-drop behavior of the column and updates its position.
 */
export const TableColumnDraggable = (props: TableColumnDraggableProps): ReactElement => {
  const { id, columnIndex, maxWidth } = props;
  const [isDragDisabled, setIsDragDisabled] = useState(true);
  const [css] = themedUseStyletron();

  const wrapperStyles: StyleObject = {
    ...commonStyles,
    display: 'flex',
    flexGrow: 1,
    flexShrink: 0,
    maxWidth,
    ':hover': { zIndex: DATA_TABLE_Z_INDEX.draggingColumn },
  };

  return (
    <Draggable
      draggableId={id}
      index={columnIndex}
      isDragDisabled={isDragDisabled}
      disableInteractiveElementBlocking
    >
      {(dragProvided, { isDragging }): ReactElement => (
        <div
          ref={dragProvided.innerRef}
          {...dragProvided.draggableProps}
          {...dragProvided.dragHandleProps}
          className={css(wrapperStyles)}
        >
          <TableColumn
            {...props}
            isDragging={isDragging}
            updateIsDragDisabled={setIsDragDisabled}
          />
        </div>
      )}
    </Draggable>
  );
};
