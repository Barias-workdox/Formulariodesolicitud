import { type ReactElement, useMemo } from 'react';

import _ from 'lodash';

import { FiltersGroup } from '@components/filters-group';
import { checkNotEmptyValue } from '@utils/check-not-empty-value.util';
import { noop } from '@utils/noop';

import { FilterFactory } from './components/filter-factory';
import {
  getFilterRawValuesArray,
  getNonEmptyFiltersRawValues,
} from './utils/filters-group-factory.utils';

import type {
  FilterFactoryConfig,
  FilterFactoryRawValues,
  OnFilterChangeParams,
} from './filters-group-factory.interfaces';
import type { FiltersGroupProps } from '@components/filters-group';
import type { WithTestId } from '@interfaces/common.interfaces';

export type FiltersGroupFactoryProps<T extends string = string> = WithTestId &
  Omit<
    FiltersGroupProps,
    | 'allFiltersConfig'
    | 'showClearAllFiltersButton'
    | 'activeFiltersCount'
    | 'visibleFiltersId'
    | 'addVisibleFilter'
  > & {
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
export const FiltersGroupFactory = <T extends string = string>({
  dataTestId = 'filters-group',
  defaultRawValues,
  disabledReason,
  filtersConfig,
  visibleFiltersId = filtersConfig.map((filter) => filter.id),
  addVisibleFilter = noop,
  onFilterChange,
  onClearAllFilters,
  maxActiveFilters,
  hideVisibleFilter,
}: FiltersGroupFactoryProps<T>): ReactElement => {
  // Derive visible filter configurations from the IDs of visible filters (without disabled logic first).
  const baseVisibleFiltersConfig: FilterFactoryConfig<T>[] = useMemo(
    () =>
      filtersConfig
        .filter((filterConfig) => visibleFiltersId.includes(filterConfig.id))
        .filter(checkNotEmptyValue),
    [filtersConfig, visibleFiltersId],
  );

  /** Get the raw values for the visible filters. */
  const visibleFiltersRawValues = useMemo(
    () =>
      getFilterRawValuesArray(
        filtersConfig.filter((filter) => visibleFiltersId.includes(filter.id)),
      ),
    [filtersConfig, visibleFiltersId],
  );

  /** Get the raw values for ALL filters that have non-empty values (not just visible ones). */
  const nonEmptyFiltersRawValues = useMemo(
    () => getNonEmptyFiltersRawValues(defaultRawValues),
    [defaultRawValues],
  );

  /** Get IDs of filters that have non-empty values. */
  const nonEmptyFilterIds = useMemo(
    () => nonEmptyFiltersRawValues.map((filter) => filter.id),
    [nonEmptyFiltersRawValues],
  );

  /** Check if the maximum number of active filters has been reached. */
  const reachedMaxActiveFilters = maxActiveFilters && nonEmptyFilterIds.length >= maxActiveFilters;

  // Derive visible filter configurations with disabled logic applied.
  const visibleFiltersConfig: FilterFactoryConfig<T>[] = useMemo(
    () =>
      reachedMaxActiveFilters
        ? baseVisibleFiltersConfig.map((filterConfig) => ({
            ...filterConfig,
            disabled: !nonEmptyFilterIds.includes(filterConfig.id),
          }))
        : baseVisibleFiltersConfig,
    [baseVisibleFiltersConfig, reachedMaxActiveFilters, nonEmptyFilterIds],
  );

  // Determine if the current filter state differs from the default state.
  const isDirty = useMemo(
    () => !_.isEqual(defaultRawValues, visibleFiltersRawValues),
    [defaultRawValues, visibleFiltersRawValues],
  );

  // Prepare configurations for all filters to pass to the FiltersGroup.
  const allFiltersConfig = useMemo(
    () =>
      filtersConfig.map(({ id, label, startEnhancer, focusOnShow, aiGenerated }) => ({
        id,
        label,
        focusOnShow,
        startEnhancer,
        aiGenerated,
      })),
    [filtersConfig],
  );

  // Create filter components for each visible filter using FilterFactory.
  const children = useMemo(
    () =>
      visibleFiltersConfig.map((filterConfig) => (
        <FilterFactory
          dataTestId={dataTestId}
          key={filterConfig.id}
          disabled={Boolean(disabledReason)}
          disabledReason={disabledReason}
          {...filterConfig}
          onFilterChange={onFilterChange}
          hideVisibleFilter={hideVisibleFilter}
        />
      )),
    [dataTestId, disabledReason, visibleFiltersConfig, onFilterChange, hideVisibleFilter],
  );

  // Show clear all filters button when there are active filters or when state is dirty
  const showClearAllFiltersButton = isDirty || nonEmptyFilterIds.length > 0;

  return (
    <FiltersGroup
      disabledReason={disabledReason}
      showClearAllFiltersButton={showClearAllFiltersButton}
      visibleFiltersId={visibleFiltersId}
      allFiltersConfig={allFiltersConfig}
      addVisibleFilter={addVisibleFilter}
      onClearAllFilters={onClearAllFilters}
      maxActiveFilters={maxActiveFilters}
      activeFiltersCount={nonEmptyFilterIds.length}
    >
      {children}
    </FiltersGroup>
  );
};
