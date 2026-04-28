import { StatefulTooltipProps } from './stateful-tooltip';
import { DesignSystemTheme } from '../../themes/theme.interfaces';
import { PopoverOverrides } from 'baseui/popover';
import { StyleObject } from 'styletron-standard';
/** Caption styles that should be used by every tooltip caption */
export declare const tooltipCaptionStyles: (theme: DesignSystemTheme) => StyleObject;
/** Overrides for the tooltip stateful popover */
export declare const tooltipCaptionOverridesStyles: (maxWidth?: string, innerStyles?: StyleObject, zIndex?: StatefulTooltipProps["zIndex"]) => PopoverOverrides;
