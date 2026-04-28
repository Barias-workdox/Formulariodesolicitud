import { Item } from '../list-factory.interfaces';
type NestedOptionId = Item['id'];
type OnChangeParams = {
    pathIds: NestedOptionId[];
    checkedIds: NestedOptionId[];
};
type UseListFactoryUtilsParams = {
    /**
     * The top-level array of items (potentially with nested sub-items).
     */
    root: Item[];
    /**
     * An array representing the current navigation path through the nested items.
     */
    pathIds: NestedOptionId[];
    /**
     * An array of IDs representing items that are currently selected (checked).
     */
    checkedIds: NestedOptionId[];
    /**
     * Current search query used to filter items at the current navigation level.
     */
    searchValue: string;
    /**
     * Callback function invoked whenever the list state changes.
     * Receives an object containing the current ID, path IDs, and checked IDs.
     */
    onChange(params: OnChangeParams): void;
};
/**
 * The return object from the `useListFactoryUtils` hook, providing all the necessary
 * state and event handlers to manage navigation and selection within a nested structure.
 */
export type UseListFactoryUtilsReturn = {
    /**
     * The list of items to render at the current navigation level,
     * filtered based on the current `searchValue`.
     */
    options: Item[];
    /**
     * Retrieves an array of items corresponding to each ID in `pathIds`,
     * effectively providing the breadcrumb trail from the root down to
     * the current navigation level.
     */
    getItemsTraversed(): Item[];
    /**
     * Handler for item click events. If the clicked item contains
     * nested `items`, it navigates deeper into that sub-level by
     * updating `pathIds`. If the item is a leaf node, it toggles
     * the item's checked state.
     */
    onOptionClick(params: {
        item: Item;
        multi?: boolean;
    }): void;
};
/**
 * A custom hook to manage a nested, hierarchical data structure,
 * supporting both navigation through multiple levels and
 * checkbox-based item selection at each level.
 */
export declare const useListFactoryUtils: ({ root, pathIds, checkedIds, searchValue, onChange, }: UseListFactoryUtilsParams) => UseListFactoryUtilsReturn;
export {};
