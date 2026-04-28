import { ContentTypes } from '../filter-group-factory.constants';
import { FilterFactoryConfig, FilterFactoryConfigContent, FilterFactoryRawValues, FilterFactoryRawValuesMap } from '../filters-group-factory.interfaces';
import { PartialDeep } from 'type-fest';
/**
 * Returns default or current raw values for a filter’s content, based on the filter’s type.
 *
 * @returns Filter-specific raw values (e.g., `date`, `pathIds`, `checkedIds`, or `value`).
 *
 * @throws If the `type` is invalid or unsupported.
 */
export declare const getRawValuesByType: <T extends ContentTypes>({ type, content, }: {
    /** The filter type (`datepicker`, `list`, `string`). */
    type: T;
    /** Optional partial content if present, or `undefined` if default values are desired. */
    content?: PartialDeep<FilterFactoryConfigContent>;
}) => FilterFactoryRawValuesMap[T] | undefined;
/**
 * Constructs a single filter’s raw values object from its config. By default, it uses the config’s
 * current content. If `defaultValues` is `true`, returns default/empty values instead.
 *
 * @typeParam T - A subtype of `FilterFactoryConfig`.
 *
 * @returns A raw values object representing the filter’s state (e.g., selected date, selected IDs).
 */
export declare const getFilterRawValues: <T extends FilterFactoryConfig = FilterFactoryConfig>({ id, content }: T, { defaultValues, }?: {
    /** When `true`, it ignores the current content and returns default/empty state. */
    defaultValues?: boolean;
}) => FilterFactoryRawValues<T["id"]>;
/**
 * Maps an array of filter configurations into an array of raw values.
 * Optionally returns default/empty values if `defaultValues` is `true`.
 *
 * @returns An array of raw values for each filter.
 */
export declare const getFilterRawValuesArray: (filters: FilterFactoryConfig[], { defaultValues, }?: {
    /** When `true`, returns default/empty states for each filter. */
    defaultValues?: boolean;
}) => FilterFactoryRawValues[];
/**
 * Filters out any entries from a raw values array that are considered "empty."
 * An empty filter is defined as:
 *  - A `list` filter with `checkedIds` of length 0
 *  - A `datepicker` filter with `date` set to null
 *  - A `string` filter with an empty `value`
 *
 * @typeParam T - A string (or other type) identifying filter IDs.
 * @param filters - The raw values array to filter.
 * @returns A new array containing only non-empty filters.
 */
export declare const getNonEmptyFiltersRawValues: <T extends string = string>(filters: FilterFactoryRawValues<T>[]) => FilterFactoryRawValues<T>[];
/**
 * Returns a normalized value from a filter’s raw state based on its variant type.
 * For example, it can parse `boolean` or `number` from string-based filters,
 * or return the array of IDs for a list-based filter.
 *
 * @param filterRawValue - The raw values of a filter, including its variant type and value fields.
 * @returns The "normalized" or "typed" value that the filter represents, or `undefined` if invalid.
 */
export declare const normalizeFilterRawValue: (filterRawValue: FilterFactoryRawValues) => unknown;
