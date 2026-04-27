import type { ReactNode } from 'react';

import { renderHook } from '@testing-library/react';

import { act, afterEach, describe, expect, it, testHelpers } from '@test/test-utils';

import { useTable } from '../use-table';

import type { ColumnConfig, DataTableProps } from '../../data-table.interfaces';

type DataType = { column1: string; column2: string };

type TableType = DataTableProps<DataType>;

const allColumnsConfig: ColumnConfig<keyof DataType>[] = [
  {
    id: 'column1',
    label: 'Column 1',
    isDraggable: true,
    isFixed: false,
    align: 'center',
    isRemovable: true,
    isSortable: true,
    dataType: 'string',
    renderType: 'string',
  },
  {
    id: 'column2',
    label: 'Column 2',
    isDraggable: true,
    isFixed: false,
    align: 'center',
    isRemovable: true,
    isSortable: true,
    dataType: 'string',
    renderType: 'string',
  },
];

const initialProps: TableType = {
  data: [],
  columnsConfig: [],
  orderBy: 'column1',
  orderDirection: 'asc',
  onChange: testHelpers.fn(),
  allColumnsConfig,
};

const updatedProps: TableType = {
  data: [[1, 'John']],
  columnsConfig: [
    {
      id: 'column1',
      label: 'Column 1',
      isDraggable: true,
      isFixed: false,
      align: 'center',
      isRemovable: true,
      isSortable: true,
      dataType: 'string',
      renderType: 'string',
    },
  ],
  allColumnsConfig,
  orderBy: 'column2',
  orderDirection: 'desc',
  onChange: testHelpers.fn(),
};

describe('useTable', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should initialize state with provided props', () => {
    const { result } = renderHook(() => useTable(initialProps));

    expect(result.current.data).toEqual([]);
    expect(result.current.columnsConfig).toEqual([]);
    expect(result.current.orderBy).toEqual('column1');
    expect(result.current.orderDirection).toEqual('asc');
    expect(result.current.handleOnChange).toEqual(expect.any(Function));
  });

  it('should update state when handleOnChange is called with "drag" event', async () => {
    const { result } = renderHook(() => useTable(initialProps));

    act(() => {
      result.current.handleOnChange({ payload: updatedProps, event: 'drag' });
    });

    expect(result.current.columnsConfig).toEqual(updatedProps.columnsConfig);
    expect(result.current.data).toEqual(updatedProps.data);
  });

  it('should update state when handleOnChange is called with "sort" event', async () => {
    const { result } = renderHook(() => useTable(initialProps));

    act(() => {
      result.current.handleOnChange({ payload: updatedProps, event: 'sort' });
    });

    expect(result.current.orderBy).toEqual(updatedProps.orderBy);
    expect(result.current.orderDirection).toEqual(updatedProps.orderDirection);
  });

  it('should update state when handleOnChange is called with "show-column" event', async () => {
    const { result } = renderHook(() => useTable(initialProps));

    act(() => {
      result.current.handleOnChange({ payload: { id: 'column1' }, event: 'show-column' });
    });

    expect(result.current.columnsConfig).toEqual(updatedProps.columnsConfig);
  });

  it('should update state when handleOnChange is called with "hide-column" event', async () => {
    const { result } = renderHook(() => useTable(updatedProps));

    act(() => {
      result.current.handleOnChange({
        payload: { id: updatedProps.columnsConfig[0].id },
        event: 'hide-column',
      });
    });

    expect(result.current.columnsConfig).toEqual([]);
  });

  it('should update state when handleOnChange is called with "column-width" event', async () => {
    const { result } = renderHook(() => useTable(updatedProps));

    act(() => {
      result.current.handleOnChange({
        payload: { id: 'column1', width: '1000px' },
        event: 'resize-column-width',
      });
    });

    expect(result.current.columnsConfig.find(({ id }) => id === 'column1')?.width).toEqual(
      '1000px',
    );
  });

  it('should not update state when handleOnChange is called with an invalid event', () => {
    const { result } = renderHook(() => useTable(initialProps));

    act(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      result.current.handleOnChange(updatedProps, 'invalidEvent');
    });

    expect(result.current.data).not.toEqual(updatedProps.data);
    expect(result.current.columnsConfig).not.toEqual(updatedProps.columnsConfig);
    expect(result.current.orderBy).not.toEqual(updatedProps.orderBy);
    expect(result.current.orderDirection).not.toEqual(updatedProps.orderDirection);
  });

  it('should synchronize data updates from external sources (update-data event)', async () => {
    const initialData: ReactNode[][] = [];
    const updatedData: ReactNode[][] = [[1, 'John']];

    const { result, rerender } = renderHook((props) => useTable(props), { initialProps });

    expect(result.current.data).toEqual(initialData);

    rerender({ ...initialProps, data: updatedData });

    // flush setState internal promises
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(result.current.data).toEqual(updatedData);
  });
});
