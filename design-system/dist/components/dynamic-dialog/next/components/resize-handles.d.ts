import { ReactElement, RefObject } from 'react';
interface ResizeHandlesProps {
    containerRef: RefObject<HTMLDivElement>;
    disabled?: boolean;
}
/**
 * Resize handles for the DynamicDialog
 */
export declare const ResizeHandles: ({ containerRef, disabled, }: ResizeHandlesProps) => ReactElement | null;
export {};
