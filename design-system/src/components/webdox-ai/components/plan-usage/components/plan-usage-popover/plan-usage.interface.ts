import type { PlanName } from '@components/webdox-ai/interfaces/webdox-ia-plans.interfaces';

export interface PlanUsagePopoverType {
  planName?: PlanName;
  remainingRequests: number;
  totalRequests: number;
  handleClose(): void;
}
