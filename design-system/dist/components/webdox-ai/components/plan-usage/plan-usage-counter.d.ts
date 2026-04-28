import { ReactNode } from 'react';
import { PlanUsageCounterType } from './plan-usage.types';
import { WithTestId } from '../../../../interfaces/common.interfaces';
/**
 * Component that renders the current plan counter status, and show additional
 * information of the current plan state and actions available
 */
export declare const UsagePlanCounter: ({ dataTestId, availablePlans, planName, }: WithTestId<PlanUsageCounterType>) => ReactNode;
