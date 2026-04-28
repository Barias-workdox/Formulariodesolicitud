import { DropResult } from '@hello-pangea/dnd';
interface UseDragEnd {
    /**
     * A callback that receives DropResult and manage order of the list of elements.
     *
     * Use callback if exists to update the list on the component that uses this hook.
     */
    onDragEnd<T>(result: DropResult): T[];
    /**
     * A callback that removes an item from the list of elements.
     *
     * Use callback if exists to update the list on the component that uses this hook.
     */
    onRemoveElement<T>(index: number): T[];
}
/**
 * Hook to manage Drag End event for DraggableRowsTable using `@hello-pangea/dnd`.
 *
 * @param elementsList - List of items that should be sorted.
 */
export declare function useDragEnd<T>(elementsList: T[]): UseDragEnd;
export {};
