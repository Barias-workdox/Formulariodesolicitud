import { ReactElement } from 'react';
import { TooltipNextSize } from '../tooltip-next.interfaces';
import { ZIndexType } from '../../../interfaces/common.interfaces';
import { StatefulTooltipProps } from 'baseui/tooltip';
export type StatefulTooltipNextProps = StatefulTooltipProps & {
    size?: TooltipNextSize;
    zIndex?: ZIndexType;
    hasPointerEventsEnabled?: boolean;
};
/**
 * A wrapper component around BaseUI's StatefulTooltip that supports size customization
 * and applies a rounded border radius.
 */
export declare const StatefulTooltipNext: ({ size, zIndex, overrides, hasPointerEventsEnabled, ...rest }: StatefulTooltipNextProps) => ReactElement;
