import { ReactElement } from 'react';
import { ContentTypes } from '../filter-group-factory.constants';
import { FilterFactoryProps } from './filter-factory';
import { FilterFactoryConfigContentMap } from '../filters-group-factory.interfaces';
export type FilterFactoryListTypeProps = Omit<FilterFactoryProps, 'type'> & {
    content: FilterFactoryConfigContentMap[ContentTypes.List];
};
/**
 * A filter component that displays hierarchical or flat lists with interactive selection.
 * Supports both single and multi-select modes, path-based navigation (drilldown),
 * and search functionality. Integrates with FiltersGroup for unified filter management.
 *
 * @remarks
 * - Maintains internal state for search queries and navigation paths
 * - Automatically adjusts label based on current navigation level
 * - Handles complex item structures with recursive depth calculation
 */
export declare const FilterFactoryListType: ({ dataTestId, id, label, value, multi, startEnhancer, tooltipText, minWidth, maxWidth, focusOnShow, content, disabled, disabledReason, onFilterChange, hideVisibleFilter, }: FilterFactoryListTypeProps) => ReactElement;
