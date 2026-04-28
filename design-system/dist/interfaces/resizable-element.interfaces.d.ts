import { RESIZE_DIRECTIONS } from '../constants/resizable-element.constants';
export type ResizeDirection = (typeof RESIZE_DIRECTIONS)[keyof typeof RESIZE_DIRECTIONS];
/**
 * Represents the data needed to resize an element.
 */
export interface ResizeData {
    initialX: number;
    initialY: number;
    initialWidth: number;
    initialHeight: number;
    initialLeft: number;
    initialTop: number;
    direction: ResizeDirection[];
}
/**
 * Represents the data needed to resize an element.
 */
export interface DimensionData {
    width: number;
    height: number;
    left: number;
    top: number;
}
