import { renderHook } from '@testing-library/react';

import { useActionOptions } from '../use-action-options.hook';

describe('useActionOptions', () => {
  it('should return memorized options', () => {
    const {
      result: { current },
    } = renderHook(() => useActionOptions());

    expect(current).toEqual([
      { id: 'assign_taker', label: 'decisionTree.assign' },
      { id: 'start_workflow', label: 'decisionTree.startWorkflow' },
    ]);
  });
});
