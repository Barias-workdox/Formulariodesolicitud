import { renderHook } from '@testing-library/react';

import { act, testHelpers } from '@test/test-utils';

import { useDragEvents } from '../use-drag-events';

import type { ColumnConfig } from '../../data-table.interfaces';

const mockData = [
  [1, 'Column A'],
  [2, 'Column B'],
];

const mockColumnsConfig: ColumnConfig[] = [
  {
    id: 'id',
    label: 'ID',
    isDraggable: true,
    align: 'center',
    isRemovable: true,
    isSortable: true,
    dataType: 'string',
    renderType: 'string',
  },
  {
    id: 'name',
    label: 'Name',
    isDraggable: true,
    align: 'center',
    isRemovable: true,
    isSortable: true,
    dataType: 'string',
    renderType: 'string',
  },
];

const mockUpdateTable = testHelpers.fn();

const setup = () => {
  return renderHook(() =>
    useDragEvents({
      data: mockData,
      columnsConfig: mockColumnsConfig,
      updateTable: mockUpdateTable,
    }),
  );
};

describe('useDragEvents', () => {
  it('initializes dragSourceIndex and dragDestinationIndex as undefined', () => {
    const { result } = setup();

    expect(result.current.dragSourceIndex).toBeUndefined();
    expect(result.current.dragDestinationIndex).toBeUndefined();
  });

  it('handles onDragStart', () => {
    const { result } = setup();

    act(() => {
      result.current.onDragStart({
        source: {
          index: 1,
          droppableId: '',
        },
        mode: 'FLUID',
        draggableId: 'draggableId',
        type: 'type',
      });
    });

    expect(result.current.dragSourceIndex).toBe(1);
    expect(result.current.dragDestinationIndex).toBe(1);
  });

  it('handles onDragUpdate with a valid destination', () => {
    const { result } = setup();

    act(() => {
      result.current.onDragUpdate({
        destination: {
          index: 2,
          droppableId: 'droppableId',
        },
        combine: null,
        mode: 'FLUID',
        draggableId: 'draggableId',
        type: 'type',
        source: {
          index: 1,
          droppableId: '',
        },
      });
    });

    expect(result.current.dragDestinationIndex).toBe(2);
  });

  it('handles onDragUpdate with an invalid destination', () => {
    const { result } = setup();

    act(() => {
      result.current.onDragUpdate({
        destination: null,
        combine: null,
        mode: 'FLUID',
        draggableId: 'draggableId',
        type: 'type',
        source: {
          index: 1,
          droppableId: '',
        },
      });
    });

    expect(result.current.dragDestinationIndex).toBeUndefined();
  });

  it('handles onDragEnd', () => {
    const { result } = setup();

    act(() => {
      result.current.onDragEnd({
        source: {
          index: 0,
          droppableId: 'droppableId',
        },
        destination: {
          index: 1,
          droppableId: 'droppableId',
        },
        reason: 'DROP',
        combine: null,
        mode: 'FLUID',
        draggableId: 'draggableId',
        type: 'type',
      });
    });

    expect(mockUpdateTable).toHaveBeenCalledWith(
      expect.objectContaining({
        payload: {
          data: expect.any(Array),
          columnsConfig: expect.any(Array),
        },
        event: 'drag',
      }),
    );
  });
});
