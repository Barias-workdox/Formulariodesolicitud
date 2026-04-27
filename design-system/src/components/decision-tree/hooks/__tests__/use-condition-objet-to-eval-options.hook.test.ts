import { renderHook } from '@testing-library/react';

import { useObjectToEvalOptions } from '../use-condition-objet-to-eval-options.hook';

describe('useObjectToEvalOptions', () => {
  it('should return memorized options', () => {
    const {
      result: { current },
    } = renderHook(() => useObjectToEvalOptions());

    expect(current).toEqual([
      { id: 'User', label: 'decisionTree.requester' },
      { id: 'WorkflowRequest', label: 'decisionTree.request' },
    ]);
  });
});
