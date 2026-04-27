import { act, renderHook } from '@test/test-utils';

import { useListFactoryUtils } from '../hooks/use-list-factory-utils';

import type { Item } from '@components/list-factory/list-factory.interfaces';

const mockData: Item[] = [
  {
    id: 'level1',
    label: 'Level 1',
    items: [
      { id: 'item1', label: 'Item 1' },
      { id: 'item2', label: 'Item 2', disabled: true },
      {
        id: 'nested1',
        label: 'Nested 1',
        items: [
          { id: 'nested1ItemA', label: 'Nested 1 - Item A' },
          { id: 'nested1ItemB', label: 'Nested 1 - Item B' },
        ],
      },
    ],
  },
];

describe('useListFactoryUtils', () => {
  let pathIdsMock: Item['id'][] = [];
  let checkedIdsMock: Item['id'][] = [];
  let searchValueMock = '';

  const onFilterChangeMock = vi.fn((params) => {
    pathIdsMock = [...params.pathIds];
    checkedIdsMock = [...params.checkedIds];
  });

  const renderUseListFactoryUtils = () =>
    renderHook(() =>
      useListFactoryUtils({
        root: mockData,
        pathIds: pathIdsMock,
        checkedIds: checkedIdsMock,
        searchValue: searchValueMock,
        onChange: onFilterChangeMock,
      }),
    );

  beforeEach(() => {
    vi.clearAllMocks();
    pathIdsMock = [];
    checkedIdsMock = [];
    searchValueMock = '';
  });

  it('initializes with empty pathIds and checkedIds', () => {
    const { result } = renderUseListFactoryUtils();

    expect(pathIdsMock).toEqual([]);
    expect(checkedIdsMock).toEqual([]);

    expect(result.current.options).toEqual(mockData.map((item) => ({ ...item, checked: false }))); // At top-level, the options are `mockData` themselves (unchecked)
  });

  it('navigates into nested items and resets checkedIds', () => {
    const { result, rerender } = renderUseListFactoryUtils();

    // Initially, pathIds is empty, so top-level is `mockData`
    expect(result.current.options.length).toBe(1); // Only 1 item at top level: "level1"

    // Click "level1" item
    act(() => {
      result.current.onOptionClick({ item: mockData[0] });
    });

    // Now we've navigated into `level1`
    expect(onFilterChangeMock).toHaveBeenCalledWith({
      pathIds: [mockData[0].id],
      checkedIds: [],
    });

    rerender();

    // The nested children of "level1" are item1, item2, nested1
    expect(result.current.options.map((o) => o.id)).toEqual(['item1', 'item2', 'nested1']);
  });

  it('checks a leaf item if it has no children', () => {
    const { result, rerender } = renderUseListFactoryUtils();

    // Navigate into "level1"
    act(() => {
      result.current.onOptionClick({ item: mockData[0] });
    });

    rerender();

    // "item1" is a leaf -> toggle its checked state
    const item1 = result.current.options.find((o) => o.id === 'item1');

    expect(item1).toBeDefined();

    act(() => {
      result.current.onOptionClick({ item: item1 });
    });

    rerender();

    expect(checkedIdsMock).toEqual(['item1']);

    // Clicking it again unchecks it
    act(() => {
      result.current.onOptionClick({ item: item1 });
    });

    rerender();

    expect(checkedIdsMock).toEqual([]);
  });

  it('navigates to deeper nested items', () => {
    const { result, rerender } = renderUseListFactoryUtils();

    // Navigate into "level1"
    act(() => {
      result.current.onOptionClick({ item: mockData[0] });
    });

    rerender();

    // Navigate into "nested1"
    const nested1 = result.current.options.find((o) => o.id === 'nested1');

    expect(nested1).toBeDefined();

    act(() => {
      result.current.onOptionClick({ item: nested1 });
    });

    rerender();

    // Check pathIds
    expect(pathIdsMock).toEqual(['level1', 'nested1']);

    // "nested1" has two leaf children
    expect(result.current.options.map((o) => o.id)).toEqual(['nested1ItemA', 'nested1ItemB']);
  });

  it('calls mockOnFilterChange when navigating to a new level', () => {
    const { result, rerender } = renderUseListFactoryUtils();

    // Navigate into "level1"
    act(() => {
      result.current.onOptionClick({ item: mockData[0] });
    });

    rerender();

    expect(onFilterChangeMock).toHaveBeenCalledTimes(1);

    // Navigate again into "nested1"
    const nested1 = result.current.options.find((o) => o.id === 'nested1');

    act(() => {
      result.current.onOptionClick({ item: nested1 });
    });

    expect(onFilterChangeMock).toHaveBeenCalledTimes(2);
  });

  it('getItemsTraversed returns correct items for current path', () => {
    const { result, rerender } = renderUseListFactoryUtils();

    // Navigate into "level1"
    act(() => {
      result.current.onOptionClick({ item: mockData[0] });
    });

    rerender();

    // Navigate again into "nested1"
    const nested1 = result.current.options.find((o) => o.id === 'nested1');

    act(() => {
      result.current.onOptionClick({ item: nested1 });
    });

    rerender();

    const traversed = result.current.getItemsTraversed();

    expect(traversed.map((item) => item.id)).toEqual(['level1', 'nested1']);
  });

  it('filters options when searchValue is updated', () => {
    const { result, rerender } = renderUseListFactoryUtils();

    // 1) Initially, pathIds is empty, so the top-level is mockData (which has just one item: "level1")
    expect(result.current.options).toHaveLength(1);

    // 2) Navigate into "level1" so we see the nested items [item1, item2, nested1]
    act(() => {
      result.current.onOptionClick({ item: mockData[0] });
    });

    rerender();

    expect(pathIdsMock).toEqual(['level1']);
    expect(result.current.options.map((o) => o.id)).toEqual(['item1', 'item2', 'nested1']);

    // 3) Update searchValue to only match "Item 1"
    searchValueMock = 'Item 1';

    rerender();

    // 4) Only "item1" should remain in the options, since "item2" and "nested1" do not match 'Item 1'
    const filteredOptions = result.current.options;

    expect(filteredOptions).toHaveLength(1);
    expect(filteredOptions[0].id).toBe('item1');

    // 5) Clear the search filter
    searchValueMock = '';

    rerender();

    // 6) All items at this level should be visible again
    expect(result.current.options.map((o) => o.id)).toEqual(['item1', 'item2', 'nested1']);
  });
});
