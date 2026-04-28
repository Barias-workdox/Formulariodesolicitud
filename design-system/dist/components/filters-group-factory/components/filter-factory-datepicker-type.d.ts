import { ReactElement } from 'react';
import { ContentTypes } from '../filter-group-factory.constants';
import { FilterFactoryProps } from './filter-factory';
import { FilterFactoryConfigContentMap } from '../filters-group-factory.interfaces';
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
export declare const FilterFactoryDatepickerType: ({ dataTestId, id, label, multi, startEnhancer, tooltipText, minWidth, maxWidth, focusOnShow, content, disabled, disabledReason, onFilterChange, hideVisibleFilter, }: FilterFactoryDatepickerTypeProps) => ReactElement;
