import { Item } from '../list-factory.interfaces';
/**
 * Retrieves the actual `Item` objects corresponding to each ID in `pathIds`.
 * This effectively returns the breadcrumb path from the root to the current level.
 */
export declare const getItemsTraversed: (root: Item[], pathIds: (string | number)[]) => Item[];
