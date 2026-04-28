import { PlanUsageContextValue } from '../contexts/plan-usage.context';
/**
 * Custom hook to access the plan usage context.
 * Ensures that the component calling this hook is wrapped inside a PlanUsageProvider
 */
export declare const usePlanUsage: () => PlanUsageContextValue;
