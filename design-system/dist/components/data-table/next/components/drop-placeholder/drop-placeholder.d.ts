import { MutableRefObject, ReactElement } from 'react';
import { DroppableProvided } from '@hello-pangea/dnd';
type DropPlaceholderProps = {
    containerRef?: MutableRefObject<HTMLDivElement | null>;
    listRef?: MutableRefObject<HTMLDivElement | null>;
    sourceIndex?: number;
    destinationIndex?: number;
    dropProvided: DroppableProvided;
};
/**
 * A component that displays a drop placeholder during drag and drop operations.
 *
 * It receives the necessary props including the container and list references, source and destination indices,
 * and the `DroppableProvided` object provided by `@hello-pangea/dnd`.
 * It calculates the position and dimensions of the placeholder based on the source and destination indices
 * and applies the updated styles to a fixed-position element with dashed border and specified colors.
 * The position and dimensions of the placeholder are updated when scrolling occurs.
 */
export declare const DropPlaceholder: ({ containerRef, listRef, sourceIndex, destinationIndex, dropProvided, }: DropPlaceholderProps) => ReactElement;
export {};
