import type { Item } from '../list-factory.interfaces';

/**
 * Retrieves the actual `Item` objects corresponding to each ID in `pathIds`.
 * This effectively returns the breadcrumb path from the root to the current level.
 */
export const getItemsTraversed = (root: Item[], pathIds: (string | number)[]): Item[] => {
  const pathItems: Item[] = [];
  let current: Item[] | undefined = root;

  pathIds.forEach((pathId, index) => {
    const found = current?.find(({ id }) => id === pathId);
    if (found) {
      pathItems[index] = found;
      current = found.items;
    }
  });

  return pathItems;
};
