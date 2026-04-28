import { PropsWithChildren, ReactElement } from 'react';
import { FilterConfig } from './filters-group.interfaces';
export type FiltersGroupProps = PropsWithChildren<{
    /** Reason for disabling the filters, shown as a tooltip element and all filters will be disabled */
    disabledReason?: string;
    /** Configuration for all filters. Used to determine filter properties such as label and id. */
    allFiltersConfig: FilterConfig[];
    /** A boolean indicating whether the "Clear All Filters" button should be shown. */
    showClearAllFiltersButton: boolean;
    /** The IDs of filters that are visible. */
    visibleFiltersId: FilterConfig['id'][];
    /** The maximum number of active filters. */
    maxActiveFilters?: number;
    /** The number of active filters. */
    activeFiltersCount?: number;
    /** A function to add a filter to the visible list by its ID. */
    addVisibleFilter(filterId: string): void;
    /** A function to clear all filters and reset them to their default state. */
    onClearAllFilters(): void;
}>;
/**
 * FiltersGroup component that renders a collection of filters with options to show extra filters
 * and clear all filters.
 */
declare const FiltersGroup: {
    ({ children, showClearAllFiltersButton, maxActiveFilters, activeFiltersCount, disabledReason, allFiltersConfig, visibleFiltersId, addVisibleFilter, onClearAllFilters, }: FiltersGroupProps): ReactElement;
    Filter: ({ overrides, ...rest }: import('../filter/filter.interfaces').FilterProps) => JSX.Element;
};
export { FiltersGroup };
