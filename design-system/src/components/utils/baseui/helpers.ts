import { mergeOverrides } from 'baseui';

import type { Overrides as ThemeOverrides } from '@themes/theme.interfaces';
import type { Overrides } from 'baseui/helpers/overrides';

/**
 * The `mergeOverridesDeep` function deeply merges multiple sets of overrides for Base Web components.
 * Base Web's `mergeOverrides` function is used to perform the actual merge for each pair of sources.
 * It's useful when you need to combine multiple sets of overrides, such as when you want to extend
 * or customize the styles or behaviors of Base Web components at various levels.
 *
 * @param sources - An array of sources to be deeply merged. The sources should be
 * overrides objects compatible with Base Web components.
 *
 * @example
 * ```
 * const baseOverrides = { Root: { style: { color: 'blue' } } };
 * const customOverrides = { Root: { style: { fontSize: '16px' } } };
 * const additionalOverrides = { Root: { style: { fontWeight: 'bold' } } };
 *
 * const mergedOverrides = mergeOverridesDeep(baseOverrides, customOverrides, additionalOverrides);
 * // mergedOverrides will be:
 * // { Root: { style: { color: 'blue', fontSize: '16px', fontWeight: 'bold' } } }
 * ```
 */
export const mergeOverridesDeep = <T extends Overrides | ThemeOverrides>(...sources: T[]): T => {
  const target = sources.shift() || {};
  const source = sources.shift();

  if (source && sources.length > 0) {
    return mergeOverrides(target, mergeOverridesDeep(source, ...sources)) as T;
  }

  if (source && (typeof source === 'object' || typeof source === 'function')) {
    return mergeOverrides(target, source) as T;
  }

  return target as T;
};
