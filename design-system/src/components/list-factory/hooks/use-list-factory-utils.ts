import { useCallback, useMemo } from 'react';

import { includesStringNormalized } from '@components/utils/strings/text.utils';

import * as listFactoryUtils from '../utils/list-factory.utils';

import type { Item } from '@components/list-factory/list-factory.interfaces';

type NestedOptionId = Item['id'];

type OnChangeParams = {
  pathIds: NestedOptionId[];
  checkedIds: NestedOptionId[];
};

type UseListFactoryUtilsParams = {
  /**
   * The top-level array of items (potentially with nested sub-items).
   */
  root: Item[];

  /**
   * An array representing the current navigation path through the nested items.
   */
  pathIds: NestedOptionId[];

  /**
   * An array of IDs representing items that are currently selected (checked).
   */
  checkedIds: NestedOptionId[];

  /**
   * Current search query used to filter items at the current navigation level.
   */
  searchValue: string;

  /**
   * Callback function invoked whenever the list state changes.
   * Receives an object containing the current ID, path IDs, and checked IDs.
   */
  onChange(params: OnChangeParams): void;
};

/**
 * The return object from the `useListFactoryUtils` hook, providing all the necessary
 * state and event handlers to manage navigation and selection within a nested structure.
 */
export type UseListFactoryUtilsReturn = {
  /**
   * The list of items to render at the current navigation level,
   * filtered based on the current `searchValue`.
   */
  options: Item[];

  /**
   * Retrieves an array of items corresponding to each ID in `pathIds`,
   * effectively providing the breadcrumb trail from the root down to
   * the current navigation level.
   */
  getItemsTraversed(): Item[];

  /**
   * Handler for item click events. If the clicked item contains
   * nested `items`, it navigates deeper into that sub-level by
   * updating `pathIds`. If the item is a leaf node, it toggles
   * the item's checked state.
   */
  onOptionClick(params: { item: Item; multi?: boolean }): void;
};

/**
 * A custom hook to manage a nested, hierarchical data structure,
 * supporting both navigation through multiple levels and
 * checkbox-based item selection at each level.
 */
export const useListFactoryUtils = ({
  root,
  pathIds = [],
  checkedIds = [],
  searchValue,
  onChange,
}: UseListFactoryUtilsParams): UseListFactoryUtilsReturn => {
  /**
   * Determines the current "leaf" array of items to render based on `pathIds`.
   * It traverses the `root` items using the IDs in `pathIds` to find the
   * appropriate nested level.
   */
  const leafItems = useMemo(
    () =>
      pathIds.reduce((arr, id): Item[] => {
        return arr.find((item) => item.id === id)?.items || [];
      }, root),
    [pathIds, root],
  );

  /**
   * Filters the `leafItems` based on the `searchValue`. If a search string
   * is provided, it includes only items whose labels contain the search substring.
   * Additionally, it maps each item to include a `checked` property indicating
   * whether the item is currently selected.
   */
  const options = useMemo(() => {
    return leafItems.reduce((acc, item) => {
      if (item.kind === 'group') {
        const groupItems = (item.items || [])
          .filter(({ label }) => !searchValue || includesStringNormalized(label, searchValue))
          .map((groupItem) => ({
            ...groupItem,
            checked: checkedIds.includes(groupItem.id),
          }));

        acc.push({ ...item, items: groupItems });
      } else if (!searchValue || includesStringNormalized(item.label, searchValue)) {
        acc.push({ ...item, checked: checkedIds.includes(item.id) });
      }

      return acc;
    }, [] as Item[]);
  }, [leafItems, searchValue, checkedIds]);

  /**
   * Handles click events on items. If the clicked item contains nested `items`,
   * it navigates deeper by adding the item's ID to `pathIds` and resets `checkedIds`.
   * Otherwise, it toggles the item's checked state. The `multi` parameter allows
   * for multiple selections if set to `true`.
   */
  const handleOptionClick: UseListFactoryUtilsReturn['onOptionClick'] = useCallback(
    ({ item: { id, items }, multi = false }): void => {
      if (items?.length > 0) {
        const updatedPathIds = [...pathIds, id];

        // Reset the checked IDs when navigating to a new path
        const updatedCheckedIds: NestedOptionId[] = [];

        onChange({
          pathIds: updatedPathIds,
          checkedIds: updatedCheckedIds,
        });
      } else {
        const updatedCheckedIds = checkedIds.includes(id)
          ? checkedIds.filter((o) => o !== id)
          : multi
            ? [...checkedIds, id]
            : [id];

        onChange({
          pathIds,
          checkedIds: updatedCheckedIds,
        });
      }
    },
    [pathIds, checkedIds, onChange],
  );

  /**
   * Retrieves the items corresponding to each ID in `pathIds`,
   * providing the breadcrumb trail from the root to the current level.
   */
  const getItemsTraversed = useCallback(
    () => listFactoryUtils.getItemsTraversed(root, pathIds),
    [pathIds, root],
  );

  return {
    options,
    onOptionClick: handleOptionClick,
    getItemsTraversed,
  };
};
