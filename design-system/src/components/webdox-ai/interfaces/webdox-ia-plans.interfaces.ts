/* List of available types of feature usage plans */
export type PlanName = 'legal_whisper' | 'brain_companion' | 'data_extraction';

/* Status Type for the specific plan current state */
export type WebdoxAIUsageStatus = 'active' | 'low' | 'exhausted' | 'unlimited';

/* Plan Types */
export type PlanType = {
  id: string;
  type: string;
  resourceName: PlanName;
  subscribedQuantity: number;
  capturedUnits: number;
  reservedUnits: number;
  remaining: number;
  usageStatus?: WebdoxAIUsageStatus;
  expirationDate: string;
};
