import { ReactElement } from 'react';
import { FilterFactoryConfig, OnFilterChangeParams } from '../filters-group-factory.interfaces';
import { FilterProps } from '../../filter/filter.interfaces';
export type FilterFactoryProps = Omit<FilterProps, 'content'> & Pick<FilterFactoryConfig, 'id' | 'content'> & {
    focusOnShow?: boolean;
    onFilterChange(changes: OnFilterChangeParams): void;
    onSearchValueChange?(value: string): void;
    hideVisibleFilter?(filterId: string): void;
};
/**
 * Factory component that renders the appropriate filter type based on content configuration.
 * Acts as a dispatcher to route different filter types to their specific implementations.
 *
 * @remarks
 * Supported filter types:
 * - 'ContentTypes.List': Hierarchical item selection with drilldown navigation
 * - 'ContentTypes.String': Text input with search/autocomplete capabilities
 * - 'ContentTypes.Datepicker': Date range selection with calendar interface
 */
export declare const FilterFactory: (props: FilterFactoryProps) => ReactElement;
