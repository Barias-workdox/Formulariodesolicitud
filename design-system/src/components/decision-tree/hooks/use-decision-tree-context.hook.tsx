import { useContext } from 'react';

import { DecisionTreeContext } from '../contexts/decision-tree.context';

import type { DecisionTreeContextValues } from '../contexts/decision-tree.context';

/**
 * This hook provides access to the decision tree context values, which are used to manage the state of the decision tree component.
 */
export const useDecisionTreeContext = (): DecisionTreeContextValues => {
  const context = useContext(DecisionTreeContext);

  if (!context) {
    throw new Error('useDecisionTreeContext must be used within a DecisionTreeProvider');
  }

  return context;
};
