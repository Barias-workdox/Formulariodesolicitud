import { ActionButtonStyleParams } from './webdox-ai-document-viewer-wrapper.interfaces';
import { ButtonOverrides } from 'baseui/button';
export declare const StyledContainer: import('styletron-react').StyletronComponent<"div", {}>;
export declare const StyledButtonsContainer: import('styletron-react').StyletronComponent<"div", {}>;
export declare const SelectionPositionNode: import('styletron-react').StyletronComponent<"span", {
    $top: number;
    $left: number;
}>;
/** Get Button Overrides */
export declare const getButtonOverrides: ({ $isFirstChild, $isLastChild, }?: ActionButtonStyleParams) => ButtonOverrides;
