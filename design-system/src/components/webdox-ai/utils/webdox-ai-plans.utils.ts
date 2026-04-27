import type {
  PlanName,
  PlanType,
  WebdoxAIUsageStatus,
} from '@components/webdox-ai/interfaces/webdox-ia-plans.interfaces';

export type GetWebdoxAIUsageStatusParams = {
  remainingRequests: number;
  totalRequests: number;
};

export type UsagePlanDataReturnType = Pick<
  PlanType,
  'usageStatus' | 'capturedUnits' | 'reservedUnits'
> & {
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
export const getWebdoxAIUsageStatus = ({
  remainingRequests,
  totalRequests,
}: GetWebdoxAIUsageStatusParams): WebdoxAIUsageStatus => {
  if (remainingRequests === 0) {
    return 'exhausted';
  }
  if (remainingRequests <= totalRequests * 0.2) {
    return 'low';
  }

  return 'active';
};

/**
 * Checks whether a specific WebdoxAI plan exists within a user's available plans.
 */
export const isUsagePlanFound = (availablePlans: PlanType[], planName: PlanName): boolean =>
  availablePlans.some((plan) => plan.resourceName === planName) ? true : false;

/**
 * Return the specific plan matching the resourceName plan;
 */
export const findPlanByName = (
  availablePlans: PlanType[],
  planName: PlanName,
): PlanType | undefined => availablePlans.find((plan) => plan.resourceName === planName);

/**
 * Checks if a specific plan has enough remaining credits.
 * It will return false if plan is not found in the list
 */
export const planHasCredits = (
  availablePlans: PlanType[] = [],
  planName: PlanName,
  requiredCredits = 1,
): boolean => {
  const currentPlan = findPlanByName(availablePlans, planName);

  if (!currentPlan) return false;

  return currentPlan.remaining >= requiredCredits;
};

/**
 * Returns the key usage data for a specific plan, including remaining and total requests.
 * Provides a safe fallback of 0 value if the plan is not found.
 */
export const getUsagePlanData = (
  availablePlans: PlanType[] = [],
  planName: PlanName,
): UsagePlanDataReturnType => {
  const currentPlan = findPlanByName(availablePlans, planName);

  return {
    usageStatus: currentPlan?.usageStatus,
    capturedUnits: currentPlan?.capturedUnits ?? 0,
    reservedUnits: currentPlan?.reservedUnits ?? 0,
    remainingRequests: currentPlan?.remaining ?? 0,
    totalRequests: currentPlan?.subscribedQuantity ?? 0,
  };
};
