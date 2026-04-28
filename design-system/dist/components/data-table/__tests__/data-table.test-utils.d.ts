import { VirtualItem } from '@tanstack/react-virtual';
/**
 * Creates a list of virtual items metadata for testing virtualization logic.
 *
 * This utility mimics the output structure of virtual items as produced by @tanstack/react-virtual.
 * It generates an array of objects representing the metadata for visible items in a virtualized list,
 * including their key, index, start and end positions, size, and lane.
 *
 * @param count - The number of virtual items to create (i.e., the number of visible items in the virtualized window).
 * @returns An array of virtual item metadata objects, matching the shape expected from @tanstack/react-virtual.
 */
export declare const createVirtualItems: (count: number) => VirtualItem[];
