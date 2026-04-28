import { ConditionType, LogicConnectorType, TreeRuleType } from '../interfaces';
export interface TreeRuleContextValues {
    treeRule?: TreeRuleType;
    treeRuleId?: TreeRuleType['id'];
    treeRuleIndex?: number;
    onAddCondition(): void;
    onUpdateCondition(conditionId: number, body: Pick<ConditionType, 'value' | 'dataType' | 'objectToEval' | 'field' | 'operator'>): void;
    onUpdateConditionLogicalConnector(logicConnector: LogicConnectorType): void;
    onUpdateLogicConnector(logicConnector: LogicConnectorType): void;
    onDeleteCondition(conditionId: number): void;
    onDeleteGroupRule(): void;
}
export declare const TreeRuleContext: import('react').Context<TreeRuleContextValues>;
