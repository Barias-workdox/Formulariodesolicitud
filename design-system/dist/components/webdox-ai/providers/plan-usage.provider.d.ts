import { PropsWithChildren } from 'react';
import { PlanType } from '../interfaces/webdox-ia-plans.interfaces';
import { WithZIndex } from '../../../interfaces/common.interfaces';
export type PlanUsageProviderProps = WithZIndex<PropsWithChildren<{
    availablePlans: PlanType[];
    isPlanUsageActive: boolean;
}>>;
/**
 * Provider for the component props PlanUsageCounter to handle plan status
 * across the AssistantController component
 */
export declare const PlanUsageProvider: ({ availablePlans, isPlanUsageActive, children, }: PlanUsageProviderProps) => JSX.Element;
