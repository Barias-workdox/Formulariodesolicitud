import { ReactNode } from 'react';
import { PlanUsagePopoverType } from './plan-usage.interface';
import { WithTestId } from '../../../../../../interfaces/common.interfaces';
/**
 * Popover component that shows additional information about the current user plan
 * And its current actions that are available.
 */
export declare const PlanUsagePopover: ({ dataTestId, planName, remainingRequests, totalRequests, handleClose, }: WithTestId<PlanUsagePopoverType>) => ReactNode;
