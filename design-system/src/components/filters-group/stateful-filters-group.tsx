import { Children, useMemo } from 'react';
import type { PropsWithChildren, ReactElement } from 'react';

import { noop } from '@utils/noop';

import { CustomFilter } from './components/custom-filter';
import { FiltersGroup } from './filters-group';
import { FiltersGroupProvider, useFiltersGroupContext } from './filters-group.context';

import type { FilterConfig } from './filters-group.interfaces';
import type { FilterProps } from '@components/filter/filter.interfaces';

export type StatefulFiltersGroupProps = PropsWithChildren<{
  /** A boolean to indicate whether any filter has been modified or has value. */
  isDirty?: boolean;
  /** Callback to execute when the "Clear All Filters" button is clicked. */
  onClearAllFilters?(): void;
}>;

type WrapperProps = PropsWithChildren<{ allFiltersConfig: FilterConfig[] }>;

/**
 * Wrapper component that filters and sorts children based on visible filter IDs.
 */
const Wrapper = ({ children, allFiltersConfig }: WrapperProps): JSX.Element => {
  const { visibleFiltersId, showClearAllFiltersButton, addVisibleFilter, onClearAllFilters } =
    useFiltersGroupContext();

  const filters = useMemo(
    () =>
      Children.toArray(children).filter((child: ReactElement<FilterProps>) =>
        visibleFiltersId.includes(child.props.id),
      ),
    [children, visibleFiltersId],
  );

  return (
    <FiltersGroup
      allFiltersConfig={allFiltersConfig}
      visibleFiltersId={visibleFiltersId}
      showClearAllFiltersButton={showClearAllFiltersButton}
      addVisibleFilter={addVisibleFilter}
      onClearAllFilters={onClearAllFilters}
    >
      {filters}
    </FiltersGroup>
  );
};

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
const StatefulFiltersGroup = ({
  children,
  isDirty,
  onClearAllFilters = noop,
}: StatefulFiltersGroupProps): JSX.Element => {
  const allFiltersConfig: FilterConfig[] = useMemo(
    () =>
      Children.toArray(children).map(
        ({ props: { id, label, startEnhancer } }: ReactElement<FilterProps>): FilterConfig => ({
          id,
          label,
          startEnhancer,
        }),
      ),
    [children],
  );

  return (
    <FiltersGroupProvider
      isDirty={isDirty}
      allFiltersConfig={allFiltersConfig}
      onClearAllFilters={onClearAllFilters}
    >
      <Wrapper allFiltersConfig={allFiltersConfig}>{children}</Wrapper>
    </FiltersGroupProvider>
  );
};

StatefulFiltersGroup.Filter = CustomFilter;

export { StatefulFiltersGroup };
