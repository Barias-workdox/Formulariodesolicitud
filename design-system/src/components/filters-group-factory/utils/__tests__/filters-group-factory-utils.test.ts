import { ContentTypes } from '@components/filters-group-factory/filter-group-factory.constants';

import {
  getFilterRawValues,
  getFilterRawValuesArray,
  getNonEmptyFiltersRawValues,
  getRawValuesByType,
  normalizeFilterRawValue,
} from '../filters-group-factory.utils';

import type {
  FilterFactoryConfig,
  FilterFactoryRawValues,
} from '../../filters-group-factory.interfaces';

describe('getRawValuesByType', () => {
  it('returns date value for a datepicker type', () => {
    const result = getRawValuesByType({
      type: ContentTypes.Datepicker,
      content: { date: '2024-01-01' },
    });

    expect(result).toEqual({ date: '2024-01-01' });
  });

  it('returns default (null) date for a datepicker if no content provided', () => {
    const result = getRawValuesByType({
      type: ContentTypes.Datepicker,
      content: {},
    });

    expect(result).toEqual({ date: null });
  });

  it('returns pathIds and checkedIds for a list type', () => {
    const result = getRawValuesByType({
      type: ContentTypes.List,
      content: { pathIds: ['p1'], checkedIds: ['c1', 'c2'] },
    });

    expect(result).toEqual({ pathIds: ['p1'], checkedIds: ['c1', 'c2'] });
  });

  it('returns default empty arrays for a list if no content provided', () => {
    const result = getRawValuesByType({
      type: ContentTypes.List,
      content: {},
    });

    expect(result).toEqual({ pathIds: [], checkedIds: [] });
  });

  it('returns value for a string type', () => {
    const result = getRawValuesByType({
      type: ContentTypes.String,
      content: { value: 'hello' },
    });

    expect(result).toEqual({ value: 'hello' });
  });

  it('returns empty string for a string if no content provided', () => {
    const result = getRawValuesByType({
      type: ContentTypes.String,
      content: {},
    });

    expect(result).toEqual({ value: '' });
  });

  it('throws an error for an invalid type', () => {
    expect(() =>
      // @ts-expect-error Testing an invalid type
      getRawValuesByType({ type: 'invalidType', content: {} }),
    ).toThrow('Invalid filter type');
  });
});

describe('getFilterRawValues', () => {
  const mockDate = '2024-02-15';

  it('returns filter raw values for a datepicker config', () => {
    const config: FilterFactoryConfig = {
      id: 'filter1',
      label: 'Filter 1',
      content: { type: ContentTypes.Datepicker, date: mockDate },
    };
    const result = getFilterRawValues(config);

    expect(result).toEqual({
      id: 'filter1',
      type: ContentTypes.Datepicker,
      date: mockDate,
    });
  });

  it('returns default/empty values if defaultValues=true for datepicker', () => {
    const config: FilterFactoryConfig = {
      id: 'filter1',
      label: 'Filter 1',
      content: { type: ContentTypes.Datepicker, date: mockDate },
    };
    const result = getFilterRawValues(config, { defaultValues: true });

    expect(result).toEqual({
      id: 'filter1',
      type: ContentTypes.Datepicker,
      date: null,
    });
  });

  it('works with a list type config', () => {
    const config: FilterFactoryConfig = {
      id: 'listFilter',
      label: 'Filter 1',
      content: {
        type: ContentTypes.List,
        pathIds: ['1', '2'],
        checkedIds: ['abc', 'xyz'],
        items: [],
      },
    };
    const result = getFilterRawValues(config);

    expect(result).toEqual({
      id: 'listFilter',
      type: ContentTypes.List,
      pathIds: ['1', '2'],
      checkedIds: ['abc', 'xyz'],
    });
  });

  it('works with a string type config', () => {
    const config: FilterFactoryConfig = {
      id: 'stringFilter',
      label: 'Filter 1',
      content: { type: ContentTypes.String, value: 'test' },
    };
    const result = getFilterRawValues(config);

    expect(result).toEqual({
      id: 'stringFilter',
      type: ContentTypes.String,
      value: 'test',
    });
  });
});

describe('getFilterRawValuesArray', () => {
  const filters: FilterFactoryConfig[] = [
    {
      id: 'f1',
      label: 'Filter 1',
      content: { type: ContentTypes.String, value: 'Hello' },
    },
    {
      id: 'f2',
      label: 'Filter 2',
      content: { type: ContentTypes.Datepicker, date: '2023-05-10' },
    },
    {
      id: 'f3',
      label: 'Filter 3',
      content: { type: ContentTypes.List, pathIds: [], checkedIds: ['x'], items: [] },
    },
  ];

  it('maps each filter to its raw values', () => {
    const results = getFilterRawValuesArray(filters);

    expect(results).toEqual([
      { id: 'f1', type: ContentTypes.String, value: 'Hello' },
      { id: 'f2', type: ContentTypes.Datepicker, date: '2023-05-10' },
      { id: 'f3', type: ContentTypes.List, pathIds: [], checkedIds: ['x'] },
    ]);
  });

  it('returns default values for all filters if defaultValues=true', () => {
    const results = getFilterRawValuesArray(filters, { defaultValues: true });

    expect(results).toEqual([
      { id: 'f1', type: ContentTypes.String, value: '' },
      { id: 'f2', type: ContentTypes.Datepicker, date: null },
      { id: 'f3', type: ContentTypes.List, pathIds: [], checkedIds: [] },
    ]);
  });
});

describe('getNonEmptyFiltersRawValues', () => {
  it('filters out empty list filters (checkedIds.length=0)', () => {
    const filters: FilterFactoryRawValues[] = [
      { id: 'list1', type: ContentTypes.List, pathIds: [], checkedIds: [] }, // empty
      { id: 'list2', type: ContentTypes.List, pathIds: [], checkedIds: ['a'] }, // not empty
    ];
    const result = getNonEmptyFiltersRawValues(filters);

    expect(result).toEqual([
      { id: 'list2', type: ContentTypes.List, pathIds: [], checkedIds: ['a'] },
    ]);
  });

  it('filters out empty datepicker filters (date=null)', () => {
    const filters: FilterFactoryRawValues[] = [
      { id: 'd1', type: ContentTypes.Datepicker, date: null }, // empty
      { id: 'd2', type: ContentTypes.Datepicker, date: '2024-02-01' }, // not empty
    ];
    const result = getNonEmptyFiltersRawValues(filters);

    expect(result).toEqual([{ id: 'd2', type: ContentTypes.Datepicker, date: '2024-02-01' }]);
  });

  it('filters out empty string filters (value="")', () => {
    const filters: FilterFactoryRawValues[] = [
      { id: 's1', type: ContentTypes.String, value: '' }, // empty
      { id: 's2', type: ContentTypes.String, value: 'hey' }, // not empty
    ];
    const result = getNonEmptyFiltersRawValues(filters);

    expect(result).toEqual([{ id: 's2', type: ContentTypes.String, value: 'hey' }]);
  });

  it('keeps all filters that are not empty', () => {
    const filters: FilterFactoryRawValues[] = [
      { id: 'l1', type: ContentTypes.List, pathIds: [], checkedIds: ['x'] },
      { id: 'd1', type: ContentTypes.Datepicker, date: '2024-01-10' },
      { id: 's1', type: ContentTypes.String, value: 'hello' },
    ];
    const result = getNonEmptyFiltersRawValues(filters);

    expect(result).toHaveLength(3);
  });
});

describe('normalizeFilterRawValue', () => {
  it('returns a plain string when type=string and no typeVariant', () => {
    const raw: FilterFactoryRawValues = { id: 'str1', type: ContentTypes.String, value: 'abc' };

    expect(normalizeFilterRawValue(raw)).toBe('abc');
  });

  it('parses a number when type=string and typeVariant=number', () => {
    const raw: FilterFactoryRawValues = {
      id: 'str2',
      type: ContentTypes.String,
      value: '42',
      typeVariant: 'number',
    };

    expect(normalizeFilterRawValue(raw)).toBe(42);
  });

  it('returns undefined when type=string, typeVariant=number, and value is NaN', () => {
    const raw: FilterFactoryRawValues = {
      id: 'str2',
      type: ContentTypes.String,
      value: 'not-a-number',
      typeVariant: 'number',
    };

    expect(normalizeFilterRawValue(raw)).toBeUndefined();
  });

  it('parses a boolean when type=string and typeVariant=boolean', () => {
    const rawTrue: FilterFactoryRawValues = {
      id: 'bool1',
      type: ContentTypes.String,
      value: 'true',
      typeVariant: 'boolean',
    };
    const rawFalse: FilterFactoryRawValues = {
      id: 'bool2',
      type: ContentTypes.String,
      value: 'false',
      typeVariant: 'boolean',
    };

    expect(normalizeFilterRawValue(rawTrue)).toBe(true);
    expect(normalizeFilterRawValue(rawFalse)).toBe(false);
  });

  it('returns the same array of IDs if list has no typeVariant', () => {
    const raw: FilterFactoryRawValues = {
      id: 'list1',
      type: ContentTypes.List,
      pathIds: [],
      checkedIds: ['a', 'b'],
    };

    expect(normalizeFilterRawValue(raw)).toEqual(['a', 'b']);
  });

  it('parses list items as numbers when typeVariant=number', () => {
    const raw: FilterFactoryRawValues = {
      id: 'list2',
      type: ContentTypes.List,
      checkedIds: ['1', 'xyz', '2'],
      pathIds: [],
      typeVariant: 'number',
    };

    // 'xyz' is not a number -> filter out NaN
    expect(normalizeFilterRawValue(raw)).toEqual([1, 2]);
  });

  it('parses list items as booleans when typeVariant=boolean', () => {
    const raw: FilterFactoryRawValues = {
      id: 'list3',
      type: ContentTypes.List,
      checkedIds: ['true', 'false', 'true'],
      pathIds: [],
      typeVariant: 'boolean',
    };

    expect(normalizeFilterRawValue(raw)).toEqual([true, false, true]);
  });

  it('returns the `date` value when type=datepicker', () => {
    const datepickerRaw: FilterFactoryRawValues = {
      id: 'dp',
      type: ContentTypes.Datepicker,
      date: '2025-12-25',
    };

    expect(normalizeFilterRawValue(datepickerRaw)).toEqual('2025-12-25');
  });
});
