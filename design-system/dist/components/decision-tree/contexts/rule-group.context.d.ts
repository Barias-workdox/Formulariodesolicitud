import { RuleGroupType } from '../interfaces';
interface RuleGroupContextValues {
    ruleGroup?: RuleGroupType;
    ruleGroupId?: RuleGroupType['id'];
    ruleGroupIndex?: number;
    onAddRuleGroup(): void;
    onDeleteRuleGroup(ruleGroupId: RuleGroupType['id']): void;
}
export declare const RuleGroupContext: import('react').Context<RuleGroupContextValues>;
export {};
