import type { Items } from 'baseui/menu';
import type { Options } from 'baseui/select';

/**
 * Get the index of an item in an array of items.
 */
export const getItemIndex = (
  items: Items | Options = [],
  id: string | number,
): number | undefined => {
  const index = Array.isArray(items) ? items.findIndex((item) => item.id === id) : undefined;

  return index;
};
