import type { PropsWithChildren } from 'react';

import { PlanUsageContext } from '../contexts/plan-usage.context';

import type { PlanType } from '@components/webdox-ai/interfaces/webdox-ia-plans.interfaces';
import type { WithZIndex } from '@interfaces/common.interfaces';

export type PlanUsageProviderProps = WithZIndex<
  PropsWithChildren<{
    availablePlans: PlanType[];
    isPlanUsageActive: boolean;
  }>
>;

/**
 * Provider for the component props PlanUsageCounter to handle plan status
 * across the AssistantController component
 */
export const PlanUsageProvider = ({
  availablePlans,
  isPlanUsageActive,
  children,
}: PlanUsageProviderProps): JSX.Element => {
  return (
    <PlanUsageContext.Provider value={{ availablePlans, isPlanUsageActive }}>
      {children}
    </PlanUsageContext.Provider>
  );
};
