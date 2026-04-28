import { PlanName, PlanType } from '../../interfaces/webdox-ia-plans.interfaces';
export type PlanUsageCounterType = {
    planName: PlanName;
    availablePlans: PlanType[];
};
