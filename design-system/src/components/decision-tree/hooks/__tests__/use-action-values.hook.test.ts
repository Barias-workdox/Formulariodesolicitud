import { renderHook } from '@testing-library/react';

import { useActionValues } from '../use-action-values.hook';

describe('useActionValues', () => {
  it('should return memorized options for actionTypeId as assign_taker', () => {
    const {
      result: { current },
    } = renderHook(() =>
      useActionValues({
        actionIdType: 'assign_taker',
        users: [{ id: '1', label: 'User 1' }],
        groups: [{ id: '1', label: 'Group 1' }],
        workflowTemplates: [],
      }),
    );

    expect(current).toEqual([
      { id: '1-user', label: 'User 1', targetObject: 'user' },
      { id: '1-job', label: 'Group 1', targetObject: 'job' },
    ]);
  });

  it('should return memorized options for actionTypeId as start_workflow', () => {
    const {
      result: { current },
    } = renderHook(() =>
      useActionValues({
        actionIdType: 'start_workflow',
        users: [],
        groups: [],
        workflowTemplates: [{ id: '1', label: 'Test' }],
      }),
    );

    expect(current).toEqual([{ id: '1', label: 'Test' }]);
  });

  it('should return empty array for other actionTypeId', () => {
    const {
      result: { current },
    } = renderHook(() =>
      useActionValues({
        actionIdType: undefined,
        users: [],
        groups: [],
        workflowTemplates: [],
      }),
    );

    expect(current).toEqual([]);
  });
});
