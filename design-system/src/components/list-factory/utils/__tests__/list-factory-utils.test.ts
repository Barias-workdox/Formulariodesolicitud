import { getItemsTraversed } from '../list-factory.utils';

import type { Item } from '../../list-factory.interfaces';

describe('getItemsTraversed', () => {
  const sampleTree: Item[] = [
    {
      id: 'root1',
      label: 'Root 1',
      items: [
        {
          id: 'child1',
          label: 'Child 1',
          items: [
            {
              id: 'grandchild1',
              label: 'Grandchild 1',
            },
            {
              id: 'grandchild2',
              label: 'Grandchild 2',
            },
          ],
        },
        {
          id: 'child2',
          label: 'Child 2',
        },
      ],
    },
    {
      id: 'root2',
      label: 'Root 2',
      items: [
        {
          id: 'child3',
          label: 'Child 3',
        },
      ],
    },
  ];

  test('should return an empty array when pathIds is empty', () => {
    const result = getItemsTraversed(sampleTree, []);

    expect(result).toEqual([]);
  });

  test('should return the correct breadcrumb path for valid pathIds', () => {
    const pathIds = ['root1', 'child1', 'grandchild2'];
    const expected = [
      {
        id: 'root1',
        label: 'Root 1',
        items: [
          {
            id: 'child1',
            label: 'Child 1',
            items: [
              {
                id: 'grandchild1',
                label: 'Grandchild 1',
              },
              {
                id: 'grandchild2',
                label: 'Grandchild 2',
              },
            ],
          },
          {
            id: 'child2',
            label: 'Child 2',
          },
        ],
      },
      {
        id: 'child1',
        label: 'Child 1',
        items: [
          {
            id: 'grandchild1',
            label: 'Grandchild 1',
          },
          {
            id: 'grandchild2',
            label: 'Grandchild 2',
          },
        ],
      },
      {
        id: 'grandchild2',
        label: 'Grandchild 2',
      },
    ];

    const result = getItemsTraversed(sampleTree, pathIds);

    expect(result).toEqual(expected);
  });

  test('should handle partial pathIds where some IDs do not exist', () => {
    const pathIds = ['root1', 'nonexistent', 'grandchild2'];
    const expected = [
      {
        id: 'root1',
        label: 'Root 1',
        items: [
          {
            id: 'child1',
            label: 'Child 1',
            items: [
              {
                id: 'grandchild1',
                label: 'Grandchild 1',
              },
              {
                id: 'grandchild2',
                label: 'Grandchild 2',
              },
            ],
          },
          {
            id: 'child2',
            label: 'Child 2',
          },
        ],
      },
      // 'nonexistent' ID does not exist, so traversal stops here
    ];

    const result = getItemsTraversed(sampleTree, pathIds);

    expect(result).toEqual(expected);
  });

  test('should return an empty array when none of the pathIds exist', () => {
    const pathIds = ['invalid1', 'invalid2'];
    const result = getItemsTraversed(sampleTree, pathIds);

    expect(result).toEqual([]);
  });

  test('should handle pathIds longer than the tree depth', () => {
    const pathIds = ['root1', 'child1', 'grandchild1', 'nonexistent'];
    const expected = [
      {
        id: 'root1',
        label: 'Root 1',
        items: [
          {
            id: 'child1',
            label: 'Child 1',
            items: [
              {
                id: 'grandchild1',
                label: 'Grandchild 1',
              },
              {
                id: 'grandchild2',
                label: 'Grandchild 2',
              },
            ],
          },
          {
            id: 'child2',
            label: 'Child 2',
          },
        ],
      },
      {
        id: 'child1',
        label: 'Child 1',
        items: [
          {
            id: 'grandchild1',
            label: 'Grandchild 1',
          },
          {
            id: 'grandchild2',
            label: 'Grandchild 2',
          },
        ],
      },
      {
        id: 'grandchild1',
        label: 'Grandchild 1',
      },
      // 'nonexistent' ID does not exist, so traversal stops here
    ];

    const result = getItemsTraversed(sampleTree, pathIds);

    expect(result).toEqual(expected);
  });

  test('should correctly traverse when items have multiple children', () => {
    const pathIds = ['root2', 'child3'];
    const expected = [
      {
        id: 'root2',
        label: 'Root 2',
        items: [
          {
            id: 'child3',
            label: 'Child 3',
          },
        ],
      },
      {
        id: 'child3',
        label: 'Child 3',
      },
    ];

    const result = getItemsTraversed(sampleTree, pathIds);

    expect(result).toEqual(expected);
  });

  test('should stop traversal correctly when encountering an item with no children', () => {
    const pathIds = ['root1', 'child2', 'grandchild3'];
    const expected = [
      {
        id: 'root1',
        label: 'Root 1',
        items: [
          {
            id: 'child1',
            label: 'Child 1',
            items: [
              {
                id: 'grandchild1',
                label: 'Grandchild 1',
              },
              {
                id: 'grandchild2',
                label: 'Grandchild 2',
              },
            ],
          },
          {
            id: 'child2',
            label: 'Child 2',
          },
        ],
      },
      {
        id: 'child2',
        label: 'Child 2',
        // 'child2' has no 'items', traversal stops here
      },
      // 'grandchild3' ID does not exist, traversal stops
    ];

    const result = getItemsTraversed(sampleTree, pathIds);

    expect(result).toEqual(expected);
  });

  test('should handle duplicate IDs gracefully', () => {
    const duplicateTree: Item[] = [
      {
        id: 'root',
        label: 'Root',
        items: [
          {
            id: 'child',
            label: 'Child 1',
          },
          {
            id: 'child',
            label: 'Child 2',
          },
        ],
      },
    ];

    const pathIds = ['root', 'child'];
    const expected = [
      {
        id: 'root',
        label: 'Root',
        items: [
          {
            id: 'child',
            label: 'Child 1',
          },
          {
            id: 'child',
            label: 'Child 2',
          },
        ],
      },
      {
        id: 'child',
        label: 'Child 1',
      },
    ];

    const result = getItemsTraversed(duplicateTree, pathIds);

    expect(result).toEqual(expected);
  });

  test('should not modify the original root array', () => {
    const pathIds = ['root1', 'child1'];
    const rootCopy = JSON.parse(JSON.stringify(sampleTree)); // Deep copy

    getItemsTraversed(sampleTree, pathIds);
    expect(sampleTree).toEqual(rootCopy);
  });
});
