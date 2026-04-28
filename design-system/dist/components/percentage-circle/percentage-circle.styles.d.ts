import { IColors } from './percentage-circle';
import { StyleObject } from 'styletron-react';
/**
 * Created the circle outline and the second inner circle, also theirs background colors.
 * The area between the circles will be the empty fill bar
 */
export declare const circleContainerStyles: (colors: IColors, size: string) => StyleObject;
/**
 * Adds styles to the fill bar, with color and percentage
 *
 * @param fill - a value between 1 and 100, indicating the percentage of the area filled.
 */
export declare const fillRotationStyles: (fill: number, colors: IColors) => StyleObject;
/**
 * Controls the inner section of the progress circle. Add styles for texts that will be written here
 */
export declare const innerTextStyles: (colors: IColors) => StyleObject;
/**
 * This one renders styles for less or equal than 50% and greater than 50%. There is a subtlety
 * required in order to render style correctly
 */
export declare const innerFillContainerStyles: (percentage: number) => StyleObject;
/**
 * Render styles for percentage greater than 50%. It will use the same styles of the less than 50%
 * fill bar
 */
export declare const fillRotationFiftyPercentStyles: (colors: IColors) => StyleObject;
/**
 * Generates the styles for the text within the circle.
 */
export declare const getTextStyles: (color: string) => StyleObject;
