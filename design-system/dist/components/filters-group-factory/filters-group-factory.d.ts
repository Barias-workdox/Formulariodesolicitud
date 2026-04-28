import { ReactElement } from 'react';
import { FilterFactoryConfig, FilterFactoryRawValues, OnFilterChangeParams } from './filters-group-factory.interfaces';
import { FiltersGroupProps } from '../filters-group';
import { WithTestId } from '../../interfaces/common.interfaces';
export type FiltersGroupFactoryProps<T extends string = string> = WithTestId & Omit<FiltersGroupProps, 'allFiltersConfig' | 'showClearAllFiltersButton' | 'activeFiltersCount' | 'visibleFiltersId' | 'addVisibleFilter'> & {
    disabledReason?: string;
    defaultRawValues: FilterFactoryRawValues<T>[];
    filtersConfig: FilterFactoryConfig<T>[];
    maxActiveFilters?: number;
    visibleFiltersId?: FiltersGroupProps['visibleFiltersId'];
    addVisibleFilter?: FiltersGroupProps['addVisibleFilter'];
    onFilterChange(changes: OnFilterChangeParams<T>): void;
    hideVisibleFilter?(filterId: string): void;
};
/**
 * Factory component for creating and managing a group of filters. It leverages the `FiltersGroup` component
 * to provide context and layout, and utilizes the `FilterFactory` to instantiate individual filters
 * based on provided configurations.
 */
export declare const FiltersGroupFactory: <T extends string = string>({ dataTestId, defaultRawValues, disabledReason, filtersConfig, visibleFiltersId, addVisibleFilter, onFilterChange, onClearAllFilters, maxActiveFilters, hideVisibleFilter, }: FiltersGroupFactoryProps<T>) => ReactElement;
