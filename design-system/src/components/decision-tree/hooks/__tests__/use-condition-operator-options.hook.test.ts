import { renderHook } from '@testing-library/react';

import { useOperatorOptions } from '../use-condition-operator-options.hook';

import type { DataType } from '@components/decision-tree/interfaces';

describe('useOperatorOptions', () => {
  it('should return memorized options for string, list and boolean options', () => {
    const response = [
      { id: '==', label: 'decisionTree.equals' },
      { id: '!=', label: 'decisionTree.notEquals' },
    ];

    const {
      result: { current },
      rerender,
    } = renderHook(() => useOperatorOptions({ dataType: 'string' }));

    expect(current).toEqual(response);

    rerender({ dataType: 'list' as DataType });
    expect(current).toEqual(response);

    rerender({ dataType: 'boolean' as DataType });
    expect(current).toEqual(response);
  });

  it('should return memorized options for numeric and date options', () => {
    const response = [
      { id: '==', label: 'decisionTree.equals' },
      { id: '!=', label: 'decisionTree.notEquals' },
      { id: '>', label: 'decisionTree.graterThan' },
      { id: '>=', label: 'decisionTree.graterOrEqual' },
      { id: '<', label: 'decisionTree.lessThan' },
      { id: '<=', label: 'decisionTree.lessOrEqual' },
    ];

    const {
      result: { current },
      rerender,
    } = renderHook(() => useOperatorOptions({ dataType: 'numeric' }));

    expect(current).toEqual(response);

    rerender({ dataType: 'date' as DataType });
    expect(current).toEqual(response);
  });
});
