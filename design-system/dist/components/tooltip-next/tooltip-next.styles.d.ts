import { TooltipNextSize } from './tooltip-next.interfaces';
import { ZIndexType } from '../../interfaces/common.interfaces';
import { PopoverOverrides } from 'baseui/tooltip';
type GetOverridesParams = {
    size: TooltipNextSize;
    zIndex?: ZIndexType;
    hasPointerEventsEnabled?: boolean;
};
/**
 * Generates custom style overrides for the StatefulTooltip component based on the provided size.
 *
 * This function allows customization of the tooltip's arrow, body, and inner content styles
 * by applying theme-based styles and size-specific paddings and typography.
 */
export declare const getOverrides: ({ size, zIndex, hasPointerEventsEnabled, }: GetOverridesParams) => PopoverOverrides;
export {};
