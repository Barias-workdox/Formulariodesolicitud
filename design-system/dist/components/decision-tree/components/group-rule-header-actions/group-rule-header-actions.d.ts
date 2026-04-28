import { WithTestId } from '../../../../interfaces/common.interfaces';
export type GroupRuleHeaderActionsProps = WithTestId<{
    isGroupRuleValid: boolean;
    disabledAdd: boolean;
    onDelete(): void;
    onAddGroup(): void;
}>;
/**
 * Component that provides visual indicators and actions for a group rule, indicating whether
 * the rule is valid and allowing users to delete the rule.
 */
export declare const GroupRuleHeaderActions: ({ dataTestId, isGroupRuleValid, disabledAdd, onDelete, onAddGroup, }: GroupRuleHeaderActionsProps) => JSX.Element;
