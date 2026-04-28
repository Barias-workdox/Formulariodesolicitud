import { PropsWithChildren } from 'react';
import { FiltersGroupProps } from './filters-group';
import { FilterConfig } from './filters-group.interfaces';
import { StatefulFiltersGroupProps } from './stateful-filters-group';
export type FiltersGroupProviderProps = Pick<StatefulFiltersGroupProps, 'isDirty' | 'onClearAllFilters'> & PropsWithChildren<{
    allFiltersConfig: FilterConfig[];
}>;
export type FiltersGroupContextType = Pick<FiltersGroupProps, 'showClearAllFiltersButton' | 'visibleFiltersId' | 'addVisibleFilter' | 'onClearAllFilters'>;
export declare const FiltersGroupContext: import('react').Context<FiltersGroupContextType>;
/**
 * `FiltersGroupProvider` is a React context provider component that manages the state and logic
 * related to a group of filters. It provides context values such as the list of visible filters,
 * whether to show the "Clear All Filters" button, and functions to manipulate filter visibility.
 */
export declare const FiltersGroupProvider: ({ allFiltersConfig, children, isDirty, onClearAllFilters, }: FiltersGroupProviderProps) => JSX.Element;
/**
 * This hook makes it easy to obtain the values from the filters group context
 */
export declare const useFiltersGroupContext: () => FiltersGroupContextType;
