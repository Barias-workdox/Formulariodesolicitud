import { createContext } from 'react';

import type { FieldSelectOptionType } from '../hooks';
import type { DecisionTreeAction, RuleGroupType, TreePaginatedOptionsConfig } from '../interfaces';
import type { CommonOption } from '@components/select/next';

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
export const DecisionTreeContext = createContext<DecisionTreeContextValues>({
  baseTestId: 'decision-tree',
  rules: [],
  users: [],
  groups: [],
  profiles: [],
  dynamicAttributes: [],
  workflowTemplates: [],
  onChange: () => {},
});
