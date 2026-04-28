import { PlanType } from '../interfaces/webdox-ia-plans.interfaces';
export type PlanUsageContextValue = {
    availablePlans: PlanType[];
    isPlanUsageActive: boolean;
};
/**
 * A context for managing users plan status, availability and possible actions.
 */
export declare const PlanUsageContext: import('react').Context<PlanUsageContextValue>;
