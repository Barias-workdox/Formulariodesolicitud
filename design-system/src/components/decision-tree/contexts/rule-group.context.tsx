import { createContext } from 'react';

import { noop } from '@utils/noop';

import type { RuleGroupType } from '../interfaces';

interface RuleGroupContextValues {
  ruleGroup?: RuleGroupType;
  ruleGroupId?: RuleGroupType['id'];
  ruleGroupIndex?: number;
  onAddRuleGroup(): void;
  onDeleteRuleGroup(ruleGroupId: RuleGroupType['id']): void;
}

export const RuleGroupContext = createContext<RuleGroupContextValues>({
  onAddRuleGroup: noop,
  onDeleteRuleGroup: noop,
});
