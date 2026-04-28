export type LogicConnectorType = 'OR' | 'AND';
export type DataType = 'string' | 'numeric' | 'boolean' | 'date' | 'list';
export type TargetObjectType = 'user' | 'job' | 'decision_workflow_template';
export type UserFieldIdType = 'group_ids' | 'job_ids';
export type WorkflowRequestFieldIdType = string;
export type FieldIdType = UserFieldIdType | WorkflowRequestFieldIdType;
export type GroupConditionDataType = 'dynamicAttributes' | 'groups' | 'profiles' | 'booleanAttributes';
export type ActionIdType = 'assign_taker' | 'start_workflow';
export type DistributionModeType = 'disabled' | 'global_sequential';
export type OperatorType = '==' | '!=' | '>' | '>=' | '<' | '<=';
export type ObjectToEvalType = 'User' | 'WorkflowRequest';
export type ActionType = {
    id: number;
    actionType?: ActionIdType;
    targetId?: string | number;
    targetObject?: TargetObjectType;
    distributionMode?: DistributionModeType;
};
export type ConditionType = {
    id: number;
    objectToEval?: ObjectToEvalType;
    field?: FieldIdType;
    operator?: OperatorType;
    value?: string | Date;
    dataType?: DataType;
};
export type TreeRuleType = {
    id: number;
    conditions: ConditionType[];
    logicConnector: LogicConnectorType;
};
export type RuleGroupType = {
    id: number;
    logicConnector: LogicConnectorType;
    treeRules: TreeRuleType[];
    actions: ActionType[];
};
export type TreePaginatedOptionsConfig<T> = {
    options: T[];
    isLoadingMore: boolean;
    onLoadMore(): void;
};
