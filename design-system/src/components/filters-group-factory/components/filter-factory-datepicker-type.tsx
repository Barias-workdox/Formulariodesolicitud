import { useCallback, useMemo } from 'react';
import type { ReactElement } from 'react';

import { Calendar } from '@components/calendar';
import { FiltersGroup } from '@components/filters-group';
import { dateWithoutTimezoneOffset, getIsoDateOnly } from '@components/utils/strings/date.utils';

import { ContentTypes } from '../filter-group-factory.constants';
import { useDateFilterUtils } from '../hooks/use-date-filter-utils';

import type { FilterFactoryProps } from './filter-factory';
import type { DateValue } from '@components/calendar/calendar.interfaces';
import type { FilterValue } from '@components/filter/filter.interfaces';
import type { FilterFactoryConfigContentMap } from '@components/filters-group-factory/filters-group-factory.interfaces';

export type FilterFactoryDatepickerTypeProps = Omit<FilterFactoryProps, 'type' | 'value'> & {
  content: FilterFactoryConfigContentMap[ContentTypes.Datepicker];
};

/**
 * Renders a datepicker filter within a `FiltersGroup`. It uses the `Calendar` component
 * to allow single-date or range-based filtering.
 *
 * @remarks
 * - When a date change is triggered, the new value is propagated to the parent filter factory via `onFilterChange`.
 * - Provides a reset handler to clear the filter selection.
 */
export const FilterFactoryDatepickerType = ({
  dataTestId = 'filters-group-factory__datepicker-filter',
  id,
  label,
  multi,
  startEnhancer,
  tooltipText,
  minWidth,
  maxWidth,
  focusOnShow,
  content,
  disabled,
  disabledReason = '',
  onFilterChange,
  hideVisibleFilter,
}: FilterFactoryDatepickerTypeProps): ReactElement => {
  const { getValueLabel } = useDateFilterUtils();

  const { range, date: dateString, minDate, maxDate } = content;
  const valueLabel = getValueLabel(dateString);
  const value: FilterValue[] = valueLabel ? [{ id, label: valueLabel }] : undefined;

  /**
   * Invoked when the user changes the filter value.
   * Notifies the parent filter factory of the new filter value and updates state accordingly.
   *
   * @param date - The selected date or date range from the `Calendar`.
   */
  const handleFilterChange = useCallback(
    ({ date }: { date: DateValue }): void => {
      const dateString = Array.isArray(date)
        ? date.map(getIsoDateOnly)
        : date
          ? getIsoDateOnly(date)
          : null;

      onFilterChange({ filterId: id, type: ContentTypes.Datepicker, date: dateString });
    },
    [id, onFilterChange],
  );

  /**
   * Resets the filter state to its initial values by clearing any date selection.
   */
  const handleReset = useCallback(() => {
    onFilterChange({ filterId: id, type: ContentTypes.Datepicker, date: null });
    hideVisibleFilter?.(id);
  }, [id, onFilterChange, hideVisibleFilter]);

  /**
   * Renders a node containing the Calendar component configured for datepicker filtering.
   * Converts ISO date strings without timezone offsets (yyyy-mm-dd) to Date objects.
   */
  const contentNode = useMemo(() => {
    const value = Array.isArray(dateString)
      ? dateString.map((str) => dateWithoutTimezoneOffset(str))
      : dateString
        ? dateWithoutTimezoneOffset(dateString)
        : null;

    return (
      <Calendar
        dataTestId={`${dataTestId}__calendar`}
        value={value}
        range={range}
        minDate={minDate}
        maxDate={maxDate}
        onChange={handleFilterChange}
      />
    );
  }, [dataTestId, dateString, maxDate, minDate, range, handleFilterChange]);

  return (
    <FiltersGroup.Filter
      data-testid={`${dataTestId}-${id}`}
      key={id}
      id={id}
      label={label}
      value={value}
      multi={multi}
      startEnhancer={startEnhancer}
      tooltipText={tooltipText}
      minWidth={minWidth}
      maxWidth={maxWidth}
      initialIsOpen={focusOnShow}
      content={contentNode}
      popoverProps={{ minWidth: 'min-content' }}
      onClear={handleReset}
      disabled={disabled}
      disabledReason={disabledReason}
    />
  );
};
