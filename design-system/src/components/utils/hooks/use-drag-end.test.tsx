import { renderHook } from '@testing-library/react';

import { useDragEnd } from './use-drag-end';

import type { DropResult } from '@hello-pangea/dnd';

type ExampleItemsType = {
  id: number;
  name: string;
  last_name: string;
  dni: string;
};

const mockElementsList: ExampleItemsType[] = [
  {
    id: 1,
    name: 'Felipe',
    last_name: 'Gonzalez',
    dni: '460012312',
  },
  {
    id: 2,
    name: 'Mia',
    last_name: 'Wong',
    dni: 'AA0012312',
  },
  {
    id: 3,
    name: 'Andrew',
    last_name: 'Kazantzis',
    dni: 'XX9012312',
  },
  {
    id: 4,
    name: 'Ruveni',
    last_name: 'Ellawala',
    dni: '669012312',
  },
];

describe('onDragEnd hook tests', () => {
  it('onDragEnd should move elements', async () => {
    const mockResults: Partial<DropResult> = {
      destination: {
        index: 3,
        droppableId: '1',
      },
      source: {
        index: 0,
        droppableId: '1',
      },
    };
    const {
      result: {
        current: { onDragEnd },
      },
    } = renderHook(() => useDragEnd(mockElementsList));

    // trigger onDragEnd callback
    const sortedElements = onDragEnd<ExampleItemsType>(mockResults as DropResult);

    expect(sortedElements).toHaveLength(4);
    // first dni on sortedList should be equal the second dni from the original array.
    expect(sortedElements[0].dni).toBe(mockElementsList[1].dni);
    // last dni on sortedList should be equal the first dni from the original array.
    expect(sortedElements[3].dni).toBe(mockElementsList[0].dni);
  });

  it('onRemoveElement should remove an index of list', async () => {
    const mockIndex = 0;
    const {
      result: {
        current: { onRemoveElement },
      },
    } = renderHook(() => useDragEnd(mockElementsList));

    // trigger onRemoveElement callback
    const sortedElements = onRemoveElement<ExampleItemsType>(mockIndex);

    // first element dni should be deleted.
    expect(sortedElements.some(({ dni }) => dni === mockElementsList[0].dni)).toBeFalsy();
  });
});
