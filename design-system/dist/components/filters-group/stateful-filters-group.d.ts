import { PropsWithChildren } from 'react';
import { FilterProps } from '../filter/filter.interfaces';
export type StatefulFiltersGroupProps = PropsWithChildren<{
    /** A boolean to indicate whether any filter has been modified or has value. */
    isDirty?: boolean;
    /** Callback to execute when the "Clear All Filters" button is clicked. */
    onClearAllFilters?(): void;
}>;
/**
 * Component that manages a group of filters. It provides a context to manage the state
 * and logic related to these filters, including sorting, displaying extra filters, and clearing all filters.
 *
 * The component uses the `FiltersGroupProvider` to wrap its children and supply them with
 * the necessary context values and functions.
 *
 * `FiltersGroup` converts its children into a configuration array (`allFiltersConfig`)
 *  using `useMemo`, which is then passed to the provider for managing filter states.
 */
declare const StatefulFiltersGroup: {
    ({ children, isDirty, onClearAllFilters, }: StatefulFiltersGroupProps): JSX.Element;
    Filter: ({ overrides, ...rest }: FilterProps) => JSX.Element;
};
export { StatefulFiltersGroup };
