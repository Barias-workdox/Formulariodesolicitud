import { DragDropContext, Droppable } from '@hello-pangea/dnd';

import { render } from '@test/test-utils';

import { TableColumnDraggable } from '../table-column-draggable';

import type { TableColumnDraggableProps } from '../table-column-draggable';

describe('TableColumnDraggable', () => {
  const mockProps: TableColumnDraggableProps = {
    id: 'columnId',
    columnIndex: 0,
    label: 'Column name',
    isDraggable: true,
    align: 'center',
    isRemovable: true,
    isSortable: true,
    dataType: 'string',
    renderType: 'string',
    columnData: [],
  };

  it('renders correctly', () => {
    const { container } = render(
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId="table">
          {(dropProvided) => (
            <div ref={dropProvided.innerRef}>
              <TableColumnDraggable {...mockProps} />
            </div>
          )}
        </Droppable>
      </DragDropContext>,
    );

    expect(container).toBeInTheDocument();
  });
});
