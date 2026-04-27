import { CharacterLowerCase, List } from '@carbon/icons-react';
import { renderHook } from '@testing-library/react';

import { useFieldOptions } from '../use-condition-field-options.hook';

describe('useFieldOptions', () => {
  it('should return memorized options for User options', () => {
    const {
      result: { current },
    } = renderHook(() => useFieldOptions({ objectToEval: 'User', dynamicAttributes: [] }));

    expect(current).toEqual([
      { id: 'group_ids', label: 'decisionTree.profile', dataType: 'string', Icon: List },
      { id: 'job_ids', label: 'decisionTree.group', dataType: 'string', Icon: List },
    ]);
  });

  it('should return memorized options for dynamic attributes options', () => {
    const {
      result: { current },
    } = renderHook(() =>
      useFieldOptions({
        objectToEval: 'WorkflowRequest',
        dynamicAttributes: [
          { id: '1', label: 'Test', dataType: 'string', icon: CharacterLowerCase },
        ],
      }),
    );

    expect(current).toEqual([
      { id: '1', label: 'Test', dataType: 'string', icon: CharacterLowerCase },
    ]);
  });
});
