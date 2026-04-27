/* eslint-disable react/jsx-key */

import { getTableData, isColumnDisabledByReason } from '../data-table.utils';
import { BooleanText } from '../render-types/boolean-text';
import { DateAsText } from '../render-types/date-text';
import { DatetimeAsText } from '../render-types/datetime-text';
import { SimpleText } from '../render-types/simple-text';

import type { ColumnConfig, TableCellRenderType } from '../../data-table.interfaces';
import type { ActionCell, CustomRenders } from '../data-table.utils';

type DataType = {
  id: number;
  name: string;
  birthdate: string;
  isAdmin: boolean;
  updatedAt: string;
};

describe('getTableData', () => {
  const rawData: DataType[] = [
    {
      id: 1,
      name: 'John',
      birthdate: '1990-05-15',
      isAdmin: true,
      updatedAt: '2021-01-01T00:00:00.000Z',
    },
    {
      id: 2,
      name: 'Jane',
      birthdate: '1985-08-22',
      isAdmin: false,
      updatedAt: '2021-03-07T12:34:56.000Z',
    },
  ];

  const allColumnsConfig: ColumnConfig<keyof DataType>[] = [
    {
      id: 'id',
      label: 'ID',
      isDraggable: true,
      align: 'center',
      isRemovable: true,
      isSortable: true,
      dataType: 'number',
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
    {
      id: 'birthdate',
      label: 'Birthdate',
      isDraggable: true,
      align: 'center',
      isRemovable: true,
      isSortable: true,
      dataType: 'date',
      renderType: 'date',
    },
    {
      id: 'updatedAt',
      label: 'Updated At',
      isDraggable: true,
      align: 'center',
      isRemovable: true,
      isSortable: true,
      dataType: 'date',
      renderType: 'datetime',
    },
    {
      id: 'isAdmin',
      label: 'Is Admin',
      isDraggable: true,
      align: 'center',
      isRemovable: true,
      isSortable: true,
      dataType: 'action',
      renderType: 'boolean',
    },
  ];

  const customRenders: CustomRenders<DataType> = {
    name: ({ id, name }) => <strong key={id}>{name}</strong>,
  };

  // The "custom" render type is tested in other unit test
  it('should test all render types', () => {
    // This is a helper object to create a variable that forces using all the TableCellRenderType values except "custom",
    // creating a single TableCellRenderType[] won't show any error if the array is empty by example.
    const renderTypesObj: Record<Exclude<TableCellRenderType, 'custom'>, undefined> = {
      string: undefined,
      date: undefined,
      datetime: undefined,
      boolean: undefined,
    };

    const allRenderTypes = Object.keys(renderTypesObj) as TableCellRenderType[];

    allRenderTypes.forEach((renderType) =>
      expect(allColumnsConfig).toEqual(
        expect.arrayContaining([expect.objectContaining({ renderType })]),
      ),
    );
  });

  it('should transform raw data into table-ready format with default renderers', () => {
    const tableData = getTableData({
      rawData,
      allColumnsConfig,
    });

    expect(tableData).toEqual([
      [
        <SimpleText value={1} />,
        <SimpleText value="John" />,
        <DateAsText value="1990-05-15" />,
        <DatetimeAsText value="2021-01-01T00:00:00.000Z" />,
        <BooleanText value={true} />,
      ],
      [
        <SimpleText value={2} />,
        <SimpleText value="Jane" />,
        <DateAsText value="1985-08-22" />,
        <DatetimeAsText value="2021-03-07T12:34:56.000Z" />,
        <BooleanText value={false} />,
      ],
    ]);
  });

  it('should transform raw data into table-ready format with custom renderers', () => {
    const tableData = getTableData({
      rawData,
      allColumnsConfig,
      customRenders,
    });

    expect(tableData).toEqual([
      [
        <SimpleText value={1} />,
        <strong key="1">John</strong>,
        <DateAsText value="1990-05-15" />,
        <DatetimeAsText value="2021-01-01T00:00:00.000Z" />,
        <BooleanText value={true} />,
      ],
      [
        <SimpleText value={2} />,
        <strong key="2">Jane</strong>,
        <DateAsText value="1985-08-22" />,
        <DatetimeAsText value="2021-03-07T12:34:56.000Z" />,
        <BooleanText value={false} />,
      ],
    ]);
  });

  it('should include action cells when actionCell prop is provided', () => {
    const actionCell: ActionCell<DataType> = ({ id, name }) => (
      <button key={id}>{`Edit ${name}`}</button>
    );

    const tableData = getTableData({
      rawData,
      allColumnsConfig,
      actionCell,
    });

    expect(tableData).toEqual([
      [
        <SimpleText value={1} />,
        <SimpleText value="John" />,
        <DateAsText value="1990-05-15" />,
        <DatetimeAsText value="2021-01-01T00:00:00.000Z" />,
        <BooleanText value={true} />,
        <button key="1">Edit John</button>,
      ],
      [
        <SimpleText value={2} />,
        <SimpleText value="Jane" />,
        <DateAsText value="1985-08-22" />,
        <DatetimeAsText value="2021-03-07T12:34:56.000Z" />,
        <BooleanText value={false} />,
        <button key="2">Edit Jane</button>,
      ],
    ]);
  });
});

describe('isColumnDisabledByReason', () => {
  it('should return true if disable reason is deleting', () => {
    expect(isColumnDisabledByReason('deleting', 'data')).toBe(true);
    expect(isColumnDisabledByReason('deleting', 'actions')).toBe(true);
    expect(isColumnDisabledByReason('deleting', 'selection')).toBe(true);
  });
  it('should return true for selection column only if disable reason is custom', () => {
    expect(isColumnDisabledByReason('custom', 'selection')).toBe(true);
    expect(isColumnDisabledByReason('custom', 'data')).toBe(false);
    expect(isColumnDisabledByReason('custom', 'actions')).toBe(false);
  });
});
