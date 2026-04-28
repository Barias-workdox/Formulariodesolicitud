import { PopoverOverrides } from 'baseui/popover';
import { StyleObject } from 'styletron-react';
type GetPopoverOverridesParams = {
    zIndex?: StyleObject['zIndex'];
};
/**
 * Generates a set of style overrides for Popover components.
 */
export declare const getPopoverOverrides: ({ zIndex, }?: GetPopoverOverridesParams) => PopoverOverrides;
export declare const StyledWrapper: import('styletron-react').StyletronComponent<"div", {}>;
export {};
