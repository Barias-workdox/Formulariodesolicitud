import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactElement } from 'react';

import { FiltersGroup } from '@components/filters-group';
import { ListFactory } from '@components/list-factory';
import { useListFactoryUtils } from '@components/list-factory/hooks/use-list-factory-utils';
import { getItemsTraversed } from '@components/list-factory/utils/list-factory.utils';

import { ContentTypes } from '../filter-group-factory.constants';

import type { FilterFactoryProps } from './filter-factory';
import type { FilterFactoryConfigContentMap } from '@components/filters-group-factory/filters-group-factory.interfaces';
import type { Item } from '@components/list-factory/list-factory.interfaces';

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
export const FilterFactoryListType = ({
  dataTestId = 'filters-group__list-filter',
  id,
  label,
  value,
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
}: FilterFactoryListTypeProps): ReactElement => {
  const [searchValue, setSearchValue] = useState('');
  const [pathIds, setPathIds] = useState(content.pathIds);

  /**
   * Synchronizes the internal pathIds state with content.pathIds from props.
   */
  useEffect(() => {
    setPathIds((oldPathIds) =>
      JSON.stringify(oldPathIds) !== JSON.stringify(content.pathIds) ? content.pathIds : oldPathIds,
    );
  }, [content.pathIds]);

  const items = useMemo(
    () => (content.type === ContentTypes.List ? content.items : []),
    [content.type, content.items],
  );

  const checkedIds = useMemo(
    () => (content.type === ContentTypes.List && content.checkedIds) || [],
    [content.type, content.checkedIds],
  );

  /**
   * Recursively counts the depth of the filter's item tree.
   * Used to determine if the filter is in a path-based view (drilling down multiple levels).
   */
  const countPathLength = useCallback((node: Item[], count = 0): number => {
    // Find the first item with children to continue traversal
    const nodeItems = node.find(({ items }) => items?.length)?.items || [];

    // If there are child items, increment the count and recurse
    return nodeItems.length > 0 ? countPathLength(nodeItems, count + 1) : count;
  }, []);

  // The total depth of the item tree for this filter.
  const pathLength = useMemo(() => countPathLength(items), [items, countPathLength]);

  // Determines if we are currently showing a path-based level (instead of checkboxes).
  const isPath = useMemo(
    () => checkedIds.length === 0 && pathIds.length < pathLength,
    [checkedIds.length, pathIds.length, pathLength],
  );

  // Determine the label based on the current navigation path
  const labelByPath =
    (pathLength > 0 && pathIds.length > 0 && getItemsTraversed(items, pathIds).at(-1)?.label) ||
    label;

  // Determine if the filter has interactions based on initial states
  const hasInteractions = pathIds.length > 0 || checkedIds.length > 0;

  const { onSearchValueChange } = content;

  /**
   * Updates the search input value and triggers the optional external callback.
   */
  const handleSearchValueChange = useCallback(
    (value: string) => {
      setSearchValue(value);
      onSearchValueChange?.(value);
    },
    [onSearchValueChange],
  );

  /**
   * Resets the filter state to its initial values, removing any path navigation
   * and cleared selections. Also resets the search value.
   */
  const handleReset = useCallback(() => {
    onFilterChange({ filterId: id, type: ContentTypes.List, pathIds: [], checkedIds: [] });
    handleSearchValueChange('');
    hideVisibleFilter?.(id);
  }, [id, onFilterChange, handleSearchValueChange, hideVisibleFilter]);

  /**
   * Effect to clear the search value when the navigation path changes.
   * This ensures that search input doesn't persist when navigating to a different path in the filter.
   */
  useEffect(() => {
    handleSearchValueChange('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathIds]);

  const { options, onOptionClick } = useListFactoryUtils({
    root: items,
    pathIds,
    checkedIds,
    searchValue,
    onChange: ({ pathIds, checkedIds }) =>
      onFilterChange({ filterId: id, type: ContentTypes.List, pathIds, checkedIds }),
  });

  // Builds the content node (ListFactory) with the correct props for the current path/level.
  const contentNode = useMemo(() => {
    const { isFiltrable, paginationProps } = content;
    // Determine if the current level in the hierarchy is filtrable.
    const _isFiltrable = Array.isArray(isFiltrable) ? isFiltrable[pathIds.length] : isFiltrable;

    return (
      <ListFactory
        data-testid={`${dataTestId}__list`}
        isFiltrable={_isFiltrable}
        searchValue={searchValue}
        items={options}
        multi={multi}
        minWidth={minWidth}
        maxWidth={maxWidth}
        paginationProps={paginationProps}
        onItemClick={onOptionClick}
        onSearchValueChange={handleSearchValueChange}
      />
    );
  }, [
    dataTestId,
    content,
    multi,
    minWidth,
    maxWidth,
    pathIds.length,
    searchValue,
    options,
    onOptionClick,
    handleSearchValueChange,
  ]);

  return (
    <FiltersGroup.Filter
      data-testid={`${dataTestId}--${id}`}
      key={id}
      id={id}
      label={labelByPath}
      value={value}
      multi={!isPath && multi}
      hasInteractions={hasInteractions}
      startEnhancer={startEnhancer}
      tooltipText={tooltipText}
      minWidth={minWidth}
      maxWidth={maxWidth}
      initialIsOpen={focusOnShow}
      content={contentNode}
      onClear={handleReset}
      disabled={disabled}
      disabledReason={disabledReason}
    />
  );
};
