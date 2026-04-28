import { FieldSelectOptionType } from '../hooks';
import { DecisionTreeAction, RuleGroupType, TreePaginatedOptionsConfig } from '../interfaces';
import { CommonOption } from '../../select/next';
export type DataConfig<T extends CommonOption = CommonOption> = T[] | TreePaginatedOptionsConfig<T>;
export interface DecisionTreeContextValues {
    baseTestId: string;
    isDistributionModeEnabled?: boolean;
    rules: RuleGroupType[];
    users: DataConfig;
    groups: DataConfig;
    profiles: DataConfig;
    dynamicAttributes: DataConfig<FieldSelectOptionType>;
    workflowTemplates: DataConfig;
    onChange(params: DecisionTreeAction): void;
}
/**
 * The decision tree context creates a react context provider for the decision tree components.
 */
export declare const DecisionTreeContext: import('react').Context<DecisionTreeContextValues>;
