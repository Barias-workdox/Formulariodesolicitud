import { type PropsWithChildren, type ReactElement, useMemo } from 'react';

import { Text } from '@components/text';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useTranslation } from '@components/utils';

import { CleanAllFiltersButton } from './components/clean-all-filters-button';
import { CustomFilter } from './components/custom-filter';
import { ExtraFiltersIconButton } from './components/extra-filters-icon-button';
import { StyledExtrasWrapper, StyledFiltersWrapper, StyledRoot } from './filters-group.styles';

import type { FilterConfig } from './filters-group.interfaces';

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
const FiltersGroup = ({
  children,
  showClearAllFiltersButton,
  maxActiveFilters,
  activeFiltersCount = 0,
  disabledReason = '',
  allFiltersConfig,
  visibleFiltersId,
  addVisibleFilter,
  onClearAllFilters,
}: FiltersGroupProps): ReactElement => {
  const { t } = useTranslation();

  const hiddenFilters = useMemo(
    () => allFiltersConfig.filter(({ id }) => !visibleFiltersId.includes(id)),
    [allFiltersConfig, visibleFiltersId],
  );

  const maxActiveFiltersReached = Boolean(
    maxActiveFilters && activeFiltersCount >= maxActiveFilters,
  );

  const isDisabled = Boolean(disabledReason);
  const tooltipText = isDisabled
    ? disabledReason
    : maxActiveFiltersReached
      ? t('filtersGroup.maxActiveFiltersReached')
      : '';

  return (
    <StyledRoot>
      <StyledFiltersWrapper>{children}</StyledFiltersWrapper>
      <StyledExtrasWrapper>
        <ExtraFiltersIconButton
          hiddenFilters={hiddenFilters}
          disabled={isDisabled || maxActiveFiltersReached}
          tooltipText={tooltipText}
          addVisibleFilter={addVisibleFilter}
        />
        {maxActiveFilters && (
          <StatefulTooltipNext
            showArrow
            ignoreBoundary
            content={t('filtersGroup.activeFiltersCount', {
              count: activeFiltersCount,
              max: maxActiveFilters,
            })}
          >
            <Text
              variant="bodySmall"
              fontWeight="400"
              margin="0"
              padding="0"
              color={maxActiveFiltersReached ? 'negativeMedium' : 'neutralSubdued'}
            >
              {activeFiltersCount}/{maxActiveFilters}
            </Text>
          </StatefulTooltipNext>
        )}
        {showClearAllFiltersButton && !isDisabled && (
          <CleanAllFiltersButton onClearAllFilters={onClearAllFilters} />
        )}
      </StyledExtrasWrapper>
    </StyledRoot>
  );
};

FiltersGroup.Filter = CustomFilter;

export { FiltersGroup };
