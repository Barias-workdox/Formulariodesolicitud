import { ContentTypes } from '../filter-group-factory.constants';

import type {
  FilterFactoryConfig,
  FilterFactoryConfigContent,
  FilterFactoryRawValues,
  FilterFactoryRawValuesMap,
} from '../filters-group-factory.interfaces';
import type { PartialDeep } from 'type-fest';

/**
 * Returns default or current raw values for a filter’s content, based on the filter’s type.
 *
 * @returns Filter-specific raw values (e.g., `date`, `pathIds`, `checkedIds`, or `value`).
 *
 * @throws If the `type` is invalid or unsupported.
 */
export const getRawValuesByType = <T extends ContentTypes>({
  type,
  content,
}: {
  /** The filter type (`datepicker`, `list`, `string`). */
  type: T;
  /** Optional partial content if present, or `undefined` if default values are desired. */
  content?: PartialDeep<FilterFactoryConfigContent>;
}): FilterFactoryRawValuesMap[T] | undefined => {
  switch (type) {
    case ContentTypes.Datepicker: {
      const { date = null } = (content as FilterFactoryRawValuesMap[ContentTypes.Datepicker]) || {};

      return { date } as FilterFactoryRawValuesMap[T];
    }
    case ContentTypes.List: {
      const { pathIds = [], checkedIds = [] } =
        (content as FilterFactoryRawValuesMap[ContentTypes.List]) || {};

      return { pathIds, checkedIds } as FilterFactoryRawValuesMap[T];
    }
    case ContentTypes.String: {
      const { value = '' } = (content as FilterFactoryRawValuesMap[ContentTypes.String]) || {};

      return { value } as FilterFactoryRawValuesMap[T];
    }
    default: {
      throw new Error(`Invalid filter type: ${type}`);
    }
  }
};

/**
 * Constructs a single filter’s raw values object from its config. By default, it uses the config’s
 * current content. If `defaultValues` is `true`, returns default/empty values instead.
 *
 * @typeParam T - A subtype of `FilterFactoryConfig`.
 *
 * @returns A raw values object representing the filter’s state (e.g., selected date, selected IDs).
 */
export const getFilterRawValues = <T extends FilterFactoryConfig = FilterFactoryConfig>(
  { id, content }: T,
  {
    defaultValues,
  }: {
    /** When `true`, it ignores the current content and returns default/empty state. */
    defaultValues?: boolean;
  } = {},
): FilterFactoryRawValues<T['id']> => {
  return {
    id,
    type: content.type,
    ...(getRawValuesByType({
      type: content.type,
      content: defaultValues ? undefined : content,
    }) as FilterFactoryRawValuesMap[typeof content.type]),
  } as FilterFactoryRawValues<T['id']>;
};

/**
 * Maps an array of filter configurations into an array of raw values.
 * Optionally returns default/empty values if `defaultValues` is `true`.
 *
 * @returns An array of raw values for each filter.
 */
export const getFilterRawValuesArray = (
  filters: FilterFactoryConfig[],
  {
    defaultValues,
  }: {
    /** When `true`, returns default/empty states for each filter. */
    defaultValues?: boolean;
  } = {},
): FilterFactoryRawValues[] => {
  return filters.map((filter) => getFilterRawValues(filter, { defaultValues }));
};

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
export const getNonEmptyFiltersRawValues = <T extends string = string>(
  filters: FilterFactoryRawValues<T>[],
): FilterFactoryRawValues<T>[] => {
  return filters.filter((filter) => {
    if (filter.type === ContentTypes.List) {
      return filter.checkedIds.length > 0;
    }

    if (filter.type === ContentTypes.Datepicker) {
      if (filter.date === null) return false;

      if (Array.isArray(filter.date)) return filter.date.length > 0;

      if (typeof filter.date === 'string') return filter.date.trim() !== '';

      return false;
    }

    if (filter.type === ContentTypes.String) {
      return filter.value !== '';
    }

    return true;
  });
};

/**
 * Returns a normalized value from a filter’s raw state based on its variant type.
 * For example, it can parse `boolean` or `number` from string-based filters,
 * or return the array of IDs for a list-based filter.
 *
 * @param filterRawValue - The raw values of a filter, including its variant type and value fields.
 * @returns The "normalized" or "typed" value that the filter represents, or `undefined` if invalid.
 */
export const normalizeFilterRawValue = (filterRawValue: FilterFactoryRawValues): unknown => {
  switch (filterRawValue.type) {
    case ContentTypes.String: {
      const { value, typeVariant } = filterRawValue;

      if (typeVariant === 'number') {
        const num = Number(value);

        return Number.isNaN(num) ? undefined : num;
      }

      if (typeVariant === 'boolean') {
        return value === 'true';
      }

      return value;
    }

    case ContentTypes.List: {
      const { checkedIds, typeVariant } = filterRawValue;

      if (typeVariant === 'number') {
        return checkedIds.map((id) => Number(id)).filter((num) => !Number.isNaN(num));
      }

      if (typeVariant === 'boolean') {
        return checkedIds.map((id) => id === 'true');
      }

      return checkedIds;
    }

    case ContentTypes.Datepicker: {
      const { date } = filterRawValue;

      return date;
    }
  }
};
