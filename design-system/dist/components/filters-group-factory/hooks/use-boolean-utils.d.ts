import { Item } from '../../list-factory/list-factory.interfaces';
type GetBooleanItemsOptions = {
    withCheckbox?: boolean;
};
type UseBooleanOptionsReturn = {
    getBooleanItems(options?: GetBooleanItemsOptions): Item[];
};
/**
 * Custom hook providing utilities for boolean-based lists/filters.
 */
export declare const useBooleanUtils: () => UseBooleanOptionsReturn;
export {};
