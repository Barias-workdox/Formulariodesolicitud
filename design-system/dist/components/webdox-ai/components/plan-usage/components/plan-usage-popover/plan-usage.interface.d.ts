import { PlanName } from '../../../../interfaces/webdox-ia-plans.interfaces';
export interface PlanUsagePopoverType {
    planName?: PlanName;
    remainingRequests: number;
    totalRequests: number;
    handleClose(): void;
}
