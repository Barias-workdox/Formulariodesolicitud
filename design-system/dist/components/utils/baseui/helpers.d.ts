import { Overrides as ThemeOverrides } from '../../../themes/theme.interfaces';
import { Overrides } from 'baseui/helpers/overrides';
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
export declare const mergeOverridesDeep: <T extends Overrides | ThemeOverrides>(...sources: T[]) => T;
