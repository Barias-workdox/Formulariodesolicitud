import { RefObject } from 'react';
import { ResizeDirection } from '../../interfaces/resizable-element.interfaces';
export interface UseResizableElementParams {
    /**
     * A reference to the HTML element that should be resizable.
     */
    elementRef: RefObject<HTMLElement>;
    /**
     * Specifies the margin applied to the dynamic modal component relative to the viewport.
     */
    margin?: number;
    /**
     * Specifies the minimum width of the element.
     */
    minWidth?: number;
    /**
     * Specifies the minimum height of the element.
     */
    minHeight?: number;
}
export interface UseResizableElementReturn {
    /**
     * Handles the resizing of the referenced element based on the provided resize directions.
     *
     * @param event - The pointer event that initiated the resize action.
     * @param direction - An array of directions indicating which edges of the element to resize (`top`, `right`, `bottom`, `left`).
     */
    handleResize(event: React.PointerEvent, direction: ResizeDirection[]): void;
}
/**
 * A custom hook that provides functionality to make an element resizable in specified directions.
 *
 * The hook allows resizing of the referenced element by dragging its edges or corners.
 * The resizing is constrained by the window boundaries and optional `minWidth`, `minHeight`, `maxWidth`, and `maxHeight` CSS styles of the element.
 *
 * @returns An object containing a function to handle the resizing logic.
 */
export declare const useResizableElement: ({ elementRef, margin, minWidth, minHeight, }: UseResizableElementParams) => UseResizableElementReturn;
