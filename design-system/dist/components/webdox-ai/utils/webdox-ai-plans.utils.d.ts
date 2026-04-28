import { PlanName, PlanType, WebdoxAIUsageStatus } from '../interfaces/webdox-ia-plans.interfaces';
export type GetWebdoxAIUsageStatusParams = {
    remainingRequests: number;
    totalRequests: number;
};
export type UsagePlanDataReturnType = Pick<PlanType, 'usageStatus' | 'capturedUnits' | 'reservedUnits'> & {
    remainingRequests: number;
    totalRequests: number;
};
/**
 * Returns the overall usage state of a WebdoxAI plan.
 * The status can be:
 * - 'depleted' when there are no requests left
 * - 'low' when usage exceeds 80% of the plan
 * - 'normal' for healthy remaining usage
 */
export declare const getWebdoxAIUsageStatus: ({ remainingRequests, totalRequests, }: GetWebdoxAIUsageStatusParams) => WebdoxAIUsageStatus;
/**
 * Checks whether a specific WebdoxAI plan exists within a user's available plans.
 */
export declare const isUsagePlanFound: (availablePlans: PlanType[], planName: PlanName) => boolean;
/**
 * Return the specific plan matching the resourceName plan;
 */
export declare const findPlanByName: (availablePlans: PlanType[], planName: PlanName) => PlanType | undefined;
/**
 * Checks if a specific plan has enough remaining credits.
 * It will return false if plan is not found in the list
 */
export declare const planHasCredits: (availablePlans: PlanType[] | undefined, planName: PlanName, requiredCredits?: number) => boolean;
/**
 * Returns the key usage data for a specific plan, including remaining and total requests.
 * Provides a safe fallback of 0 value if the plan is not found.
 */
export declare const getUsagePlanData: (availablePlans: PlanType[] | undefined, planName: PlanName) => UsagePlanDataReturnType;
