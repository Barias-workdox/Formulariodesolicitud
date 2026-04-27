import { createContext } from 'react';

import { noop } from '@utils/noop';

import type { ConditionType, LogicConnectorType, TreeRuleType } from '../interfaces';

export interface TreeRuleContextValues {
  treeRule?: TreeRuleType;
  treeRuleId?: TreeRuleType['id'];
  treeRuleIndex?: number;
  onAddCondition(): void;
  onUpdateCondition(
    conditionId: number,
    body: Pick<ConditionType, 'value' | 'dataType' | 'objectToEval' | 'field' | 'operator'>,
  ): void;
  onUpdateConditionLogicalConnector(logicConnector: LogicConnectorType): void;
  onUpdateLogicConnector(logicConnector: LogicConnectorType): void;
  onDeleteCondition(conditionId: number): void;
  onDeleteGroupRule(): void;
}

export const TreeRuleContext = createContext<TreeRuleContextValues>({
  onAddCondition: noop,
  onUpdateCondition: noop,
  onUpdateConditionLogicalConnector: noop,
  onUpdateLogicConnector: noop,
  onDeleteCondition: noop,
  onDeleteGroupRule: noop,
});
