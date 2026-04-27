import { useCallback, type ReactNode } from 'react';

import { RuleGroupContext } from '../contexts/rule-group.context';
import { useDecisionTreeContext } from '../hooks';

import type { RuleGroupType } from '../interfaces';

interface RuleGroupProviderProps {
  rule: RuleGroupType;
  ruleIndex: number;
  children: ReactNode;
}

/**
 * Provides the RuleGroupContext to its children components.
 */
export const RuleGroupProvider = ({
  rule,
  ruleIndex,
  children,
}: RuleGroupProviderProps): JSX.Element => {
  const { onChange } = useDecisionTreeContext();

  const ruleGroupId = rule.id;

  const handleAddGroup = useCallback(
    (): void =>
      ruleGroupId ? onChange({ type: 'ADD_TREE_RULE', payload: { ruleGroupId } }) : undefined,
    [ruleGroupId, onChange],
  );

  const handleDelete = useCallback(
    (): void =>
      ruleGroupId ? onChange({ type: 'DELETE_RULE_GROUP', payload: { ruleGroupId } }) : undefined,
    [ruleGroupId, onChange],
  );

  return (
    <RuleGroupContext.Provider
      key={rule.id}
      value={{
        ruleGroup: rule,
        ruleGroupId,
        ruleGroupIndex: ruleIndex,
        onAddRuleGroup: handleAddGroup,
        onDeleteRuleGroup: handleDelete,
      }}
    >
      {children}
    </RuleGroupContext.Provider>
  );
};
