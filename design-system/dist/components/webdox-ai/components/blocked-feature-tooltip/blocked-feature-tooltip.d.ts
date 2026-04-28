import { PropsWithChildren } from 'react';
import { WithZIndex } from '../../../../interfaces/common.interfaces';
export type BlockedFeatureTooltipProps = PropsWithChildren<WithZIndex<{
    isBlocked: boolean;
}>>;
/**
 * Component to display a tooltip with information about blocked features.
 * It wraps its children and shows a tooltip when the feature is blocked.
 */
export declare const BlockedFeatureTooltip: ({ children, isBlocked, zIndex, }: BlockedFeatureTooltipProps) => JSX.Element;
