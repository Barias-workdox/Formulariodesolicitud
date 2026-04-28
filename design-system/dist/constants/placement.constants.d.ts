import { PlacementType } from '../interfaces/common.interfaces';
import { StyleObject } from 'styletron-react';
/**
 * Defines the margin value for the placement of elements in the UI.
 */
export declare const PLACEMENT_MARGIN = 16;
export declare const PLACEMENT_MARGIN_PX = "16px";
/**
 * Defines the possible placement values for positioning elements in the UI.
 */
export declare const PLACEMENT: {
    readonly TOP_RIGHT: "topRight";
    readonly TOP_LEFT: "topLeft";
    readonly BOTTOM_RIGHT: "bottomRight";
    readonly BOTTOM_LEFT: "bottomLeft";
};
export declare const POSITION_BY_PLACEMENT: Record<PlacementType, Pick<StyleObject, 'top' | 'bottom' | 'right' | 'left'>>;
