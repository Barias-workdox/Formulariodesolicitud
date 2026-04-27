import { useCallback, useState } from 'react';

import { ContentTypes } from '../filter-group-factory.constants';

import type { ItemId } from '..';
import type { FilterFactoryRawValues } from '../filters-group-factory.interfaces';

type GetUpdatedFilterRawValuesParams = {
  filterId: string;
  pathIds?: ItemId[];
  checkedIds?: ItemId[];
  date?: string | string[] | null;
  value?: string;
};

type UseFiltersGroupFactoryUtilsParams<T extends FilterFactoryRawValues = FilterFactoryRawValues> =
  {
    filtersRawValues: T[];
  };

type UseFiltersGroupFactoryUtilsReturn<T extends FilterFactoryRawValues = FilterFactoryRawValues> =
  {
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
export const useFiltersGroupFactoryUtils = <
  T extends FilterFactoryRawValues = FilterFactoryRawValues,
>({
  filtersRawValues,
}: UseFiltersGroupFactoryUtilsParams<T>): UseFiltersGroupFactoryUtilsReturn<T> => {
  const [visibleFiltersIds, setVisibleFiltersIds] = useState<string[]>(
    filtersRawValues.map(({ id }) => id),
  );

  /**
   * Adds a new filter ID to the visible list.
   */
  const showFilter = useCallback((id: string) => {
    setVisibleFiltersIds((oldValue) => [...oldValue, id]);
  }, []);

  /**
   * Removes a filter from the visible list.
   */
  const hideFilter = useCallback((filterId: string) => {
    setVisibleFiltersIds((oldValue) => oldValue.filter((id) => id !== filterId));
  }, []);

  /**
   * Checks if a filter with the given ID already exists in the raw values array.
   */
  const isFilterAlreadyPresent = useCallback(
    (filterId: string) => filtersRawValues.some(({ id }) => id === filterId),
    [filtersRawValues],
  );

  /**
   * Updates the raw state of a given filter, returning a new array of raw values.
   */
  const applyFilterUpdates = useCallback(
    ({ filterId, pathIds, checkedIds, date, value }: GetUpdatedFilterRawValuesParams): T[] => {
      const filtersRawValuesUpdated = filtersRawValues.map((currentFilter) => {
        if (filterId === currentFilter.id) {
          switch (currentFilter.type) {
            case ContentTypes.List: {
              return { ...currentFilter, pathIds, checkedIds };
            }
            case ContentTypes.Datepicker: {
              return { ...currentFilter, date };
            }
            case ContentTypes.String: {
              return { ...currentFilter, value };
            }
          }
        }

        return currentFilter;
      });

      return filtersRawValuesUpdated;
    },
    [filtersRawValues],
  );

  return {
    visibleFiltersIds,
    showFilter,
    hideFilter,
    isFilterAlreadyPresent,
    updateVisibleFiltersIds: setVisibleFiltersIds,
    applyFilterUpdates,
  };
};
