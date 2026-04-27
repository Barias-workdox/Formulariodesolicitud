import { createContext } from 'react';

import type { PlanType } from '@components/webdox-ai/interfaces/webdox-ia-plans.interfaces';

export type PlanUsageContextValue = {
  availablePlans: PlanType[];
  isPlanUsageActive: boolean;
};

/**
 * A context for managing users plan status, availability and possible actions.
 */
export const PlanUsageContext = createContext<PlanUsageContextValue>({
  availablePlans: [],
  isPlanUsageActive: false,
});
