import type { PlanType } from '@components/webdox-ai/interfaces/webdox-ia-plans.interfaces';

export const AVAILABLE_PLANS_LIST = [
  {
    id: 'data_extraction',
    type: 'usage_status',
    resourceName: 'data_extraction',
    subscribedQuantity: 200,
    capturedUnits: 150,
    reservedUnits: 0,
    remaining: 50,
    usageStatus: 'active',
    expirationDate: '2026-12-12',
  },
  {
    id: '2',
    type: 'usage_status',
    resourceName: 'brain_companion',
    subscribedQuantity: 200,
    capturedUnits: 190,
    reservedUnits: 0,
    remaining: 10,
    usageStatus: 'low',
    expirationDate: '2026-12-12',
  },
  {
    id: 'legal_whisper',
    type: 'usage_status',
    resourceName: 'legal_whisper',
    subscribedQuantity: 200,
    capturedUnits: 200,
    reservedUnits: 0,
    remaining: 0,
    usageStatus: 'exhausted',
    expirationDate: '2026-12-12',
  },
] satisfies PlanType[];
