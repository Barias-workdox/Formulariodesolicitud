import { useState } from 'react';
import type { ReactElement } from 'react';

import { Draggable } from '@hello-pangea/dnd';

import { DATA_TABLE_Z_INDEX } from '@components/data-table/next/data-table.constants';
import { commonStyles } from '@components/data-table/next/data-table.styles';

import { useCss } from '../../../../utils/hooks/use-css';

import { TableColumn } from './table-column';

import type { TableColumnProps } from './table-column';
import type { StyleObject } from 'styletron-react';

export type TableColumnDraggableProps = Omit<TableColumnProps, 'updateIsDragDisabled'>;

const styles = {
  wrapperStyles: (): StyleObject => ({
    ...commonStyles,
    display: 'flex',
    flex: 1,
    ':hover': { zIndex: DATA_TABLE_Z_INDEX.draggingColumn },
  }),
};

/**
 * Represents a draggable table column in a `DataTable`.
 *
 * This component wraps the TableColumn component and provides the functionality to make
 * the column draggable within a `DataTable` using the `@hello-pangea/dnd` library.
 * It manages the drag-and-drop behavior of the column and updates its position.
 */
export const TableColumnDraggable = (props: TableColumnDraggableProps): ReactElement => {
  const { id, columnIndex } = props;
  const [isDragDisabled, setIsDragDisabled] = useState(true);
  const { wrapperStyles } = useCss(styles);

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
          className={wrapperStyles}
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
