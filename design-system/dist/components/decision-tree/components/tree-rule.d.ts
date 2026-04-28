import { TreeRuleContextValues } from '../contexts/tree-rule.context';
import { TreeRuleType } from '../interfaces';
import { WithTestId } from '../../../interfaces/common.interfaces';
interface TreeRuleProps extends WithTestId<Pick<TreeRuleContextValues, 'onAddCondition' | 'onUpdateCondition' | 'onUpdateConditionLogicalConnector' | 'onDeleteCondition'>> {
    data: TreeRuleType;
    isFirstGroup: boolean;
    onDeleteGroupRule?(groupRuleId: number): void;
}
/**
 * Component that represents a group rule within a decision tree structure. It encapsulates the logic and UI for managing
 * a group of conditions, including adding new conditions, updating existing ones,
 * and deleting the entire group if necessary.
 */
export declare const TreeRule: ({ dataTestId, data: { id: treeRuleId, logicConnector: groupLogicConnector, conditions }, isFirstGroup, onDeleteGroupRule, ...props }: TreeRuleProps) => JSX.Element;
export {};
