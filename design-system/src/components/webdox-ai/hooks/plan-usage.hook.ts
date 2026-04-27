import { useContext } from 'react';

import { PlanUsageContext } from '../contexts/plan-usage.context';

import type { PlanUsageContextValue } from '../contexts/plan-usage.context';

/**
 * Custom hook to access the plan usage context.
 * Ensures that the component calling this hook is wrapped inside a PlanUsageProvider
 */
export const usePlanUsage = (): PlanUsageContextValue => {
  const context = useContext(PlanUsageContext);

  if (!context) {
    throw new Error('usePlanUsage must be used within a PlanUsageProvider');
  }

  return context;
};
