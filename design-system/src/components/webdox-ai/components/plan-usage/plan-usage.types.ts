import type {
  PlanName,
  PlanType,
} from '@components/webdox-ai/interfaces/webdox-ia-plans.interfaces';

export type PlanUsageCounterType = {
  planName: PlanName;
  availablePlans: PlanType[];
};
