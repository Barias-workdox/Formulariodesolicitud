import { createContext } from 'react';

import type { ActionType } from '../interfaces';

interface ActionGroupContextValue {
  actionGroup?: ActionType;
  actionGroupId?: ActionType['id'];
  actionGroupIndex?: number;
}

export const ActionGroupContext = createContext<ActionGroupContextValue>({});
