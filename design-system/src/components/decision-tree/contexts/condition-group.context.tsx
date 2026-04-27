import { createContext } from 'react';

import type { ConditionType } from '../interfaces';

interface ConditionGroupContextValues {
  conditionGroup?: ConditionType;
  conditionGroupId?: ConditionType['id'];
  conditionGroupIndex?: number;
}

export const ConditionGroupContext = createContext<ConditionGroupContextValues>({});
