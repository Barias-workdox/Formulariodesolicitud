import { StyleOverride } from '../../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-standard';
export declare const CollapsibleBoxHeaderContainer: import('styletron-react').StyletronComponent<"div", {
    $expanded: boolean;
    $headerOverrides: StyleOverride<object>;
}>;
export declare const SectionContainer: import('styletron-react').StyletronComponent<"div", {}>;
export declare const CollapsibleBoxIconContainer: import('styletron-react').StyletronComponent<"div", {}>;
/** Default styles for the title */
export declare const textStyles: (headerOverrides: StyleOverride<object>) => StyleObject;
