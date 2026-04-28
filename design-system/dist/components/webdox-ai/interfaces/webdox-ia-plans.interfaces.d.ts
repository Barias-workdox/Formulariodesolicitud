export type PlanName = 'legal_whisper' | 'brain_companion' | 'data_extraction';
export type WebdoxAIUsageStatus = 'active' | 'low' | 'exhausted' | 'unlimited';
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
