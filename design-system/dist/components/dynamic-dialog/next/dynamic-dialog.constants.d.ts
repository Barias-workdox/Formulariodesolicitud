import { PlacementType } from '../../../interfaces/common.interfaces';
/**
 * Default dimensions for the dynamic dialog component
 */
export declare const DEFAULT_DIALOG_WIDTH = 500;
export declare const DEFAULT_DIALOG_HEIGHT = 700;
/**
 * Minimum dimensions for the dynamic dialog component
 */
export declare const MIN_DIALOG_WIDTH = 390;
export declare const MIN_DIALOG_HEIGHT = 430;
/**
 * Represents the thickness of the resize handle in the dynamic dialog component
 */
export declare const HANDLE_THICKNESS = "1px";
/**
 * Represents the thickness of the corner handle in the dynamic dialog component
 */
export declare const HANDLE_CORNER_THICKNESS = "16px";
/**
 * Transition animation for smooth dialog interactions
 */
export declare const DIALOG_TRANSITION = "all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)";
/**
 * Z-index values for different dialog states
 */
export declare const DIALOG_Z_INDEX: {
    readonly DEFAULT: 1000;
    readonly FULL_VIEWPORT: 1100;
    readonly TOOLTIP: 1200;
};
/**
 * Default placement for the dialog
 */
export declare const DEFAULT_PLACEMENT: PlacementType;
/**
 * Breakpoint for mobile responsive behavior
 */
export declare const MOBILE_BREAKPOINT: 768;
/**
 * Dialog header height
 */
export declare const DIALOG_HEADER_HEIGHT = 56;
