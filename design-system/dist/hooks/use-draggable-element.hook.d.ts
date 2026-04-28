import { RefObject } from 'react';
export type DragDirection = 'both' | 'horizontal' | 'vertical';
export interface UseDraggableElementParams {
    /**
     * A reference to the HTML element that should be resizable.
     * Can be null when dragging is disabled.
     */
    elementRef: RefObject<HTMLElement> | null;
    /**
     * Specifies the margin applied to the dynamic modal component relative to the viewport.
     */
    margin?: number;
    /**
     * Constrains the drag direction to horizontal, vertical, or both (default)
     */
    direction?: DragDirection;
    parent?: Window;
}
export interface UseDraggableElementReturn {
    handlePointerDown(event: React.PointerEvent | PointerEvent): void;
}
/**
 * A custom hook that provides functionality to make an element draggable within the viewport.
 *
 * This hook attaches pointer event handlers to enable dragging of an element referenced by `elementRef`.
 * It ensures the element remains within the boundaries of the window while being dragged.
 * The drag direction can be constrained to horizontal-only, vertical-only, or both directions.
 *
 * @returns An object containing a method to initialize the drag behavior.
 */
export declare const useDraggableElement: ({ elementRef, margin, direction, parent, }: UseDraggableElementParams) => UseDraggableElementReturn;
