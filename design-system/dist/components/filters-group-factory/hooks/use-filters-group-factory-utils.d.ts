import { ItemId } from '..';
import { FilterFactoryRawValues } from '../filters-group-factory.interfaces';
type GetUpdatedFilterRawValuesParams = {
    filterId: string;
    pathIds?: ItemId[];
    checkedIds?: ItemId[];
    date?: string | string[] | null;
    value?: string;
};
type UseFiltersGroupFactoryUtilsParams<T extends FilterFactoryRawValues = FilterFactoryRawValues> = {
    filtersRawValues: T[];
};
type UseFiltersGroupFactoryUtilsReturn<T extends FilterFactoryRawValues = FilterFactoryRawValues> = {
    /**
     * An array of filter IDs currently visible.
     */
    visibleFiltersIds: string[];
    /**
     * Checks if a given filter ID is already present in `filtersRawValues`.
     */
    isFilterAlreadyPresent(filterId: string): boolean;
    /**
     * Adds a new filter ID to the list of visible filters.
     */
    showFilter(id: string): void;
    /**
     * Removes a filter ID from the list of visible filters.
     */
    hideFilter(filterId: string): void;
    /**
     * Sets the entire array of visible filter IDs.
     */
    updateVisibleFiltersIds(ids: string[]): void;
    /**
     * Returns an updated array of filter raw values, applying new state
     * (pathIds, checkedIds, date, or value) to the matched filter ID.
     */
    applyFilterUpdates(params: GetUpdatedFilterRawValuesParams): T[];
};
/**
 * A custom hook that manages visibility and state for an array of filters in a `FiltersGroupFactory`.
 */
export declare const useFiltersGroupFactoryUtils: <T extends FilterFactoryRawValues = FilterFactoryRawValues>({ filtersRawValues, }: UseFiltersGroupFactoryUtilsParams<T>) => UseFiltersGroupFactoryUtilsReturn<T>;
export {};
