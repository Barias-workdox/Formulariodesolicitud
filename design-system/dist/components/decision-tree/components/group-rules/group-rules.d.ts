import { LogicConnectorType, TreeRuleType } from '../../interfaces';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export type GroupRulesProps = Pick<TreeRuleType, 'conditions' | 'logicConnector'> & WithTestId<{
    disabled: boolean;
    onAddCondition(): void;
    onUpdateConditionLogicalConnector(logicConnector: LogicConnectorType): void;
}>;
/**
 * Component that is responsible for rendering a list of conditions within a group in a
 * decision tree structure. It allows users to add, manage, and organize conditions within a group,
 * with the option to combine conditions using logical operators
 */
export declare const GroupRules: ({ dataTestId, conditions, disabled, logicConnector, onAddCondition, onUpdateConditionLogicalConnector, }: GroupRulesProps) => JSX.Element;
