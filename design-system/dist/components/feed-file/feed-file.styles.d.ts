import { DesignSystemColorType } from '../../themes/theme.interfaces';
import { PopoverOverrides } from 'baseui/popover';
import { StyleObject } from 'styletron-react';
/**
 * Styled container used to wrap and display a list of `FeedFile` components
 */
export declare const StyledFeedFileContainer: import('styletron-react').StyletronComponent<"ul", {}>;
export declare const StyledFeedFile: import('styletron-react').StyletronComponent<"li", {
    $backgroundColor?: DesignSystemColorType;
}>;
export declare const StyledFeedFileInfo: import('styletron-react').StyletronComponent<"div", {}>;
export declare const StyledFeedFileName: import('styletron-react').StyletronComponent<"div", {}>;
export declare const StyledPathAndNameContainer: import('styletron-react').StyletronComponent<"div", {}>;
export declare const StyledPathContainer: import('styletron-react').StyletronComponent<"div", {}>;
export declare const StyledNameContainer: import('styletron-react').StyletronComponent<"div", {}>;
export declare const styles: {
    documentNameStyles: ($theme: any) => StyleObject;
};
/**
 * Generates overrides for the body style of a file tooltip component.
 */
export declare const feedFileTooltipOverrides: () => PopoverOverrides;
