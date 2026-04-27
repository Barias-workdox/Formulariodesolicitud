import { useCallback, useContext, type ReactNode } from 'react';

import { RuleGroupContext } from '../contexts/rule-group.context';
import { TreeRuleContext } from '../contexts/tree-rule.context';
import { useDecisionTreeContext } from '../hooks';

import type { TreeRuleType, LogicConnectorType, UpdateConditionAction } from '../interfaces';

interface TreeRuleProviderProps {
  children: ReactNode;
  treeRule: TreeRuleType;
  treeRuleIndex: number;
}

/**
 * Provider component that supplies context values and handlers for a specific tree rule
 * within a decision tree rule group.
 *
 * It manages actions such as adding, updating, and deleting conditions, as well as
 * updating logical connectors for the tree rule.
 */
export const TreeRuleProvider = ({
  children,
  treeRule,
  treeRuleIndex,
}: TreeRuleProviderProps): JSX.Element => {
  const { onChange } = useDecisionTreeContext();
  const { ruleGroupId } = useContext(RuleGroupContext);

  const { id: treeRuleId } = treeRule;

  const handleAddCondition = useCallback(
    (treeRuleId: number): void | undefined =>
      ruleGroupId
        ? onChange({
            type: 'ADD_CONDITION',
            payload: { ruleGroupId, treeRuleId },
          })
        : undefined,
    [onChange, ruleGroupId],
  );

  const handleUpdateCondition = useCallback(
    (
      treeRuleId: number,
      conditionId: number,
      body: UpdateConditionAction['payload']['body'],
    ): void | undefined =>
      ruleGroupId
        ? onChange({
            type: 'UPDATE_CONDITION',
            payload: { ruleGroupId, treeRuleId, conditionId, body },
          })
        : undefined,
    [onChange, ruleGroupId],
  );

  const handleDeleteCondition = useCallback(
    (treeRuleId: number, conditionId: number): void | undefined =>
      ruleGroupId
        ? onChange({
            type: 'DELETE_CONDITION',
            payload: { ruleGroupId, treeRuleId, conditionId },
          })
        : undefined,
    [onChange, ruleGroupId],
  );

  const handleDeleteGroupRule = useCallback(
    (treeRuleId: number): void | undefined =>
      ruleGroupId
        ? onChange({
            type: 'DELETE_TREE_RULE',
            payload: { ruleGroupId, treeRuleId },
          })
        : undefined,
    [onChange, ruleGroupId],
  );

  const handleUpdateConditionLogicalConnector = useCallback(
    (treeRuleId: number, logicConnector: LogicConnectorType): void | undefined =>
      ruleGroupId
        ? onChange({
            type: 'UPDATE_CONDITION_LOGICAL_CONNECTOR',
            payload: { ruleGroupId, treeRuleId, body: { logicConnector } },
          })
        : undefined,
    [onChange, ruleGroupId],
  );

  const handleUpdateLogicConnector = useCallback(
    (treeRuleId: number, logicConnector: LogicConnectorType): void | undefined =>
      ruleGroupId
        ? onChange({
            type: 'UPDATE_RULE_GROUP_LOGICAL_CONNECTOR',
            payload: { ruleGroupId, treeRuleId, body: { logicConnector } },
          })
        : undefined,
    [onChange, ruleGroupId],
  );

  return (
    <TreeRuleContext.Provider
      value={{
        treeRule,
        treeRuleId: treeRule.id,
        treeRuleIndex,
        onAddCondition: () => handleAddCondition(treeRuleId),
        onUpdateCondition: (conditionId, body) =>
          handleUpdateCondition(treeRuleId, conditionId, body),
        onDeleteCondition: (conditionId) => handleDeleteCondition(treeRuleId, conditionId),
        onUpdateConditionLogicalConnector: (logicConnector) =>
          handleUpdateConditionLogicalConnector(treeRuleId, logicConnector),
        onUpdateLogicConnector: (logicConnector) =>
          handleUpdateLogicConnector(treeRuleId, logicConnector),
        onDeleteGroupRule: () => handleDeleteGroupRule(treeRuleId),
      }}
    >
      {children}
    </TreeRuleContext.Provider>
  );
};
