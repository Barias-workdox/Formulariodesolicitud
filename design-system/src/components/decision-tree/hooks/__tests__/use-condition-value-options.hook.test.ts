import { renderHook } from '@testing-library/react';

import { useValueOptions } from '../use-condition-value-options.hook';

describe('useValueOptions', () => {
  it('should return memorized options for User and group_ids', () => {
    const {
      result: { current },
    } = renderHook(() =>
      useValueOptions({
        objectToEval: 'User',
        field: 'group_ids',
        dataType: 'string',
        groups: [],
        profiles: [{ id: 'profile-1', label: 'Test' }],
        dynamicAttributes: [],
      }),
    );

    expect(current).toEqual([{ id: 'profile-1', label: 'Test' }]);
  });

  it('should return memorized options for User and job_ids', () => {
    const {
      result: { current },
    } = renderHook(() =>
      useValueOptions({
        objectToEval: 'User',
        field: 'job_ids',
        dataType: 'string',
        groups: [{ id: 'group-1', label: 'Test' }],
        profiles: [],
        dynamicAttributes: [],
      }),
    );

    expect(current).toEqual([{ id: 'group-1', label: 'Test' }]);
  });

  it('should return memorized options for WorkflowRequest and dataType as boolean', () => {
    const {
      result: { current },
    } = renderHook(() =>
      useValueOptions({
        objectToEval: 'WorkflowRequest',
        field: undefined,
        dataType: 'boolean',
        groups: [],
        profiles: [],
        dynamicAttributes: [],
      }),
    );

    expect(current).toEqual([
      { id: 'true', label: 'decisionTree.true' },
      { id: 'false', label: 'decisionTree.false' },
    ]);
  });

  it('should return memorized options for WorkflowRequest and dataType as list', () => {
    const {
      result: { current },
    } = renderHook(() =>
      useValueOptions({
        objectToEval: 'WorkflowRequest',
        field: 'dynamic-1',
        dataType: 'list',
        groups: [],
        profiles: [],
        dynamicAttributes: [
          { id: 'dynamic-1', label: 'Test', options: [{ id: 'opt-1', label: 'Test' }] },
        ],
      }),
    );

    expect(current).toEqual([{ id: 'opt-1', label: 'Test' }]);
  });
});
