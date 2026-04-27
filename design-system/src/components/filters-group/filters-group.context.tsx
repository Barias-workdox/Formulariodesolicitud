import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { PropsWithChildren } from 'react';

import {
  FILTERS_GROUP_CONTEXT_DEFAULT_VALUES,
  MIN_VISIBLE_FILTERS_NUMBER,
} from './filters-group.constants';

import type { FiltersGroupProps } from './filters-group';
import type { FilterConfig } from './filters-group.interfaces';
import type { StatefulFiltersGroupProps } from './stateful-filters-group';

export type FiltersGroupProviderProps = Pick<
  StatefulFiltersGroupProps,
  'isDirty' | 'onClearAllFilters'
> &
  PropsWithChildren<{
    allFiltersConfig: FilterConfig[];
  }>;

export type FiltersGroupContextType = Pick<
  FiltersGroupProps,
  'showClearAllFiltersButton' | 'visibleFiltersId' | 'addVisibleFilter' | 'onClearAllFilters'
>;

export const FiltersGroupContext = createContext<FiltersGroupContextType>(
  FILTERS_GROUP_CONTEXT_DEFAULT_VALUES,
);

/**
 * `FiltersGroupProvider` is a React context provider component that manages the state and logic
 * related to a group of filters. It provides context values such as the list of visible filters,
 * whether to show the "Clear All Filters" button, and functions to manipulate filter visibility.
 */
export const FiltersGroupProvider = ({
  allFiltersConfig,
  children,
  isDirty,
  onClearAllFilters,
}: FiltersGroupProviderProps): JSX.Element => {
  const defaultFilters = useMemo(
    () => allFiltersConfig.slice(0, MIN_VISIBLE_FILTERS_NUMBER).map(({ id }) => id),
    [allFiltersConfig],
  );

  const [visibleFiltersId, setVisibleFiltersId] = useState<FilterConfig['id'][]>(defaultFilters);

  const showClearAllFiltersButton: boolean = useMemo(
    () =>
      isDirty ||
      (allFiltersConfig.length > MIN_VISIBLE_FILTERS_NUMBER &&
        visibleFiltersId.length !== MIN_VISIBLE_FILTERS_NUMBER),
    [allFiltersConfig.length, isDirty, visibleFiltersId.length],
  );

  /**
   * Callback to add a filter to the visible list by its ID.
   */
  const addVisibleFilter: FiltersGroupContextType['addVisibleFilter'] = useCallback((filterId) => {
    setVisibleFiltersId((prevVisibleFilters) => [...prevVisibleFilters, filterId]);
  }, []);

  /**
   * Callback function that clears all currently visible filters.
   */
  const handleClearAllFilters: FiltersGroupContextType['onClearAllFilters'] = useCallback(() => {
    onClearAllFilters();
    setVisibleFiltersId(defaultFilters);
  }, [onClearAllFilters, defaultFilters]);

  return (
    <FiltersGroupContext.Provider
      value={{
        showClearAllFiltersButton,
        visibleFiltersId,
        addVisibleFilter,
        onClearAllFilters: handleClearAllFilters,
      }}
    >
      {children}
    </FiltersGroupContext.Provider>
  );
};

/**
 * This hook makes it easy to obtain the values from the filters group context
 */
export const useFiltersGroupContext = (): FiltersGroupContextType => {
  return useContext(FiltersGroupContext);
};
