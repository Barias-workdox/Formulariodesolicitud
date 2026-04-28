import { DimensionData, ResizeData } from '../../../interfaces/resizable-element.interfaces';
export interface CalculateNewDimensionsParams {
    /** The HTML element being resized. */
    element: HTMLElement;
    /** Initial data including dimensions, position, and direction of resizing. */
    data: ResizeData;
    /** Change in X coordinate from the starting point. */
    deltaX: number;
    /** Change in Y coordinate from the starting point. */
    deltaY: number;
    /** The margin of the element from the viewport boundary. */
    margin?: number;
    /** The minimum width of the element. */
    minWidth?: number;
    /** The minimum height of the element. */
    minHeight?: number;
}
/**
 * Calculates the new dimensions and position of the element during resizing.
 *
 * @returns The calculated new dimensions and position of the element.
 */
export declare const calculateNewDimensions: ({ data, deltaX, deltaY, element, margin, minWidth: minWidthProp, minHeight: minHeightProp, }: CalculateNewDimensionsParams) => DimensionData;
