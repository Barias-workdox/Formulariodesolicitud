import { ReactElement } from 'react';
import { ContentTypes } from '../filter-group-factory.constants';
import { FilterFactoryProps } from './filter-factory';
import { FilterFactoryConfigContentMap } from '../filters-group-factory.interfaces';
export type FilterFactoryStringTypeProps = Omit<FilterFactoryProps, 'type'> & {
    content: FilterFactoryConfigContentMap[ContentTypes.String];
};
/**
 * Renders a string-based filter within a `FiltersGroup`. It allows users
 * to input text or choose from provided suggestions, if any.
 */
export declare const FilterFactoryStringType: ({ dataTestId, id, label, value, multi, startEnhancer, tooltipText, minWidth, maxWidth, focusOnShow, content, disabled, disabledReason, onFilterChange, hideVisibleFilter, }: FilterFactoryStringTypeProps) => ReactElement;
