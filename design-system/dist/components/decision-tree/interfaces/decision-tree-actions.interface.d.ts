import { ActionType, ConditionType, RuleGroupType, TreeRuleType } from './decision-tree.interface';
type ADD_RULE_GROUP = 'ADD_RULE_GROUP';
type DELETE_RULE_GROUP = 'DELETE_RULE_GROUP';
type ADD_TREE_RULE = 'ADD_TREE_RULE';
type DELETE_TREE_RULE = 'DELETE_TREE_RULE';
type UPDATE_RULE_GROUP_LOGICAL_CONNECTOR = 'UPDATE_RULE_GROUP_LOGICAL_CONNECTOR';
type ADD_CONDITION = 'ADD_CONDITION';
type UPDATE_CONDITION = 'UPDATE_CONDITION';
type DELETE_CONDITION = 'DELETE_CONDITION';
type UPDATE_CONDITION_LOGICAL_CONNECTOR = 'UPDATE_CONDITION_LOGICAL_CONNECTOR';
type UPDATE_ACTION = 'UPDATE_ACTION';
export type AddRuleGroupAction = {
    type: ADD_RULE_GROUP;
    payload: object;
};
export type DeleteRuleGroupAction = {
    type: DELETE_RULE_GROUP;
    payload: {
        ruleGroupId: RuleGroupType['id'];
    };
};
export type AddTreeRuleAction = {
    type: ADD_TREE_RULE;
    payload: {
        ruleGroupId: RuleGroupType['id'];
    };
};
export type DeleteTreeRuleAction = {
    type: DELETE_TREE_RULE;
    payload: {
        ruleGroupId: RuleGroupType['id'];
        treeRuleId: TreeRuleType['id'];
    };
};
export type UpdateRuleGroupLogicalConnectorAction = {
    type: UPDATE_RULE_GROUP_LOGICAL_CONNECTOR;
    payload: {
        ruleGroupId: RuleGroupType['id'];
        treeRuleId: TreeRuleType['id'];
        body: Pick<RuleGroupType, 'logicConnector'>;
    };
};
export type AddConditionAction = {
    type: ADD_CONDITION;
    payload: {
        ruleGroupId: RuleGroupType['id'];
        treeRuleId: TreeRuleType['id'];
    };
};
export type UpdateConditionAction = {
    type: UPDATE_CONDITION;
    payload: {
        ruleGroupId: RuleGroupType['id'];
        treeRuleId: TreeRuleType['id'];
        conditionId: ConditionType['id'];
        body: Pick<ConditionType, 'value' | 'dataType' | 'objectToEval' | 'field' | 'operator'>;
    };
};
export type DeleteConditionAction = {
    type: DELETE_CONDITION;
    payload: {
        ruleGroupId: RuleGroupType['id'];
        treeRuleId: TreeRuleType['id'];
        conditionId: ConditionType['id'];
    };
};
export type UpdateConditionLogicalConnectorAction = {
    type: UPDATE_CONDITION_LOGICAL_CONNECTOR;
    payload: {
        ruleGroupId: RuleGroupType['id'];
        treeRuleId: TreeRuleType['id'];
        body: Pick<TreeRuleType, 'logicConnector'>;
    };
};
export type UpdateAction = {
    type: UPDATE_ACTION;
    payload: {
        ruleGroupId: RuleGroupType['id'];
        actionId: ActionType['id'];
        body: Pick<ActionType, 'actionType' | 'targetId' | 'targetObject' | 'distributionMode'>;
    };
};
export type DecisionTreeAction = AddRuleGroupAction | DeleteRuleGroupAction | AddTreeRuleAction | DeleteTreeRuleAction | UpdateRuleGroupLogicalConnectorAction | AddConditionAction | UpdateConditionAction | DeleteConditionAction | UpdateConditionLogicalConnectorAction | UpdateAction;
export {};
