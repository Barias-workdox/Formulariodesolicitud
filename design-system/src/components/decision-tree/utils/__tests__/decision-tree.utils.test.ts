import {
  Boolean,
  CalendarHeatMap,
  CharacterLowerCase,
  CharacterWholeNumber,
  List,
} from '@carbon/icons-react';

import { noop } from '@utils/noop';

import {
  getDynamicAttributeIcon,
  getGroupConditionDataType,
  getOptionsConfig,
} from '../decision-tree.utils';

import type { TreePaginatedOptionsConfig } from '@components/decision-tree/interfaces';
import type { CommonOption } from '@components/select/next';

describe('getDynamicAttributeIcon', () => {
  it('should return the CharacterLowerCase icon for string dataType', () => {
    expect(getDynamicAttributeIcon('string')).toBe(CharacterLowerCase);
  });

  it('should return the CharacterWholeNumber icon for numeric dataType', () => {
    expect(getDynamicAttributeIcon('numeric')).toBe(CharacterWholeNumber);
  });

  it('should return the CalendarHeatMap icon for date dataType', () => {
    expect(getDynamicAttributeIcon('date')).toBe(CalendarHeatMap);
  });

  it('should return the Boolean icon for boolean dataType', () => {
    expect(getDynamicAttributeIcon('boolean')).toBe(Boolean);
  });

  it('should return the List icon for list dataType', () => {
    expect(getDynamicAttributeIcon('list')).toBe(List);
  });
});

describe('getOptionsConfig', () => {
  const onLoadMoreMock = vi.fn();

  const rawOptions: CommonOption[] = [
    { id: '1', label: 'test-1' },
    { id: '2', label: 'test-2' },
  ];

  const paginatedOptionConfig: TreePaginatedOptionsConfig<CommonOption> = {
    options: rawOptions,
    isLoadingMore: false,
    onLoadMore: onLoadMoreMock,
  };

  it('should return correct pagination config', () => {
    const result = getOptionsConfig(paginatedOptionConfig);

    expect(result).toEqual(paginatedOptionConfig);
  });
  it('should return correct config when raw options are provided', () => {
    const result = getOptionsConfig(rawOptions);

    expect(result).toEqual({ ...paginatedOptionConfig, onLoadMore: noop });
  });
});

describe('getGroupConditionDataType', () => {
  it('should return the correct group condition data type when groups conditions are given', () => {
    const result = getGroupConditionDataType({
      objectToEval: 'User',
      field: 'job_ids',
      dataType: 'string',
    });

    expect(result).toBe('groups');
  });
  it('should return the correct group condition data type when profiles conditions are given', () => {
    const result = getGroupConditionDataType({
      objectToEval: 'User',
      field: 'group_ids',
      dataType: 'string',
    });

    expect(result).toBe('profiles');
  });
  it('should return the correct group condition data type when booleanAttributes conditions are given', () => {
    const result = getGroupConditionDataType({
      objectToEval: 'WorkflowRequest',
      field: '',
      dataType: 'boolean',
    });

    expect(result).toBe('booleanAttributes');
  });
  it('should return the correct group condition data type when dynamicAttributes conditions are given', () => {
    const result = getGroupConditionDataType({
      objectToEval: 'WorkflowRequest',
      field: undefined,
      dataType: 'list',
    });

    expect(result).toBe('dynamicAttributes');
  });
  it('should return null when no matching conditions are found', () => {
    const result = getGroupConditionDataType({
      objectToEval: 'User',
      field: 'unknown_field',
      dataType: 'string',
    });

    expect(result).toBeUndefined();
  });
});
