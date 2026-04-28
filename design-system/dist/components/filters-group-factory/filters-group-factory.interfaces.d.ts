import { ContentTypes } from './filter-group-factory.constants';
import { FilterProps } from '../filter/filter.interfaces';
import { Item, ListFactoryPaginationProps } from '../list-factory/list-factory.interfaces';
type IdentificationType = 'chile-rut';
export type FilterFactoryContentTypeVariant = 'text' | 'number' | 'email' | 'boolean' | IdentificationType;
export type ItemId = Item['id'];
/**
 * Defines the raw values for each filter type. This is the shape of data
 * that the filter is responsible for storing, which can be used to
 * restore the filter’s state or persist it (e.g., in local storage).
 */
export type FilterFactoryRawValuesMap = {
    list: {
        pathIds: ItemId[];
        checkedIds: ItemId[];
    };
    string: {
        value: string;
    };
    datepicker: {
        date: string | string[] | null;
    };
};
/**
 * The complete event payload object emitted when the user changes the filter’s value.
 *
 * Depending on the filter type (`list`, `datepicker`, or `string`), different fields will be present.
 */
export type OnFilterChangeParams<T extends string = string> = {
    filterId: T;
} & {
    [K in ContentTypes]: {
        type: K;
    } & FilterFactoryRawValuesMap[K];
}[ContentTypes];
/**
 * Represents the raw value stored for a specific filter. This extends
 * `FilterFactoryRawValuesMap` with an additional `id` field that
 * uniquely identifies the filter.
 *
 * @typeparam T - A generic type that indicates the filter’s ID type.
 */
export type FilterFactoryRawValues<T extends string = string> = {
    id: T;
} & {
    [K in ContentTypes]: {
        type: K;
        typeVariant?: FilterFactoryContentTypeVariant;
    } & FilterFactoryRawValuesMap[K];
}[ContentTypes];
/**
 * Specifies the configuration for each content type within the filter.
 * Each content type has distinct properties relevant to its functionality.
 */
export type FilterFactoryConfigContentMap = {
    list: {
        type: ContentTypes.List;
        typeVariant?: FilterFactoryContentTypeVariant;
        items: Item[];
        /**
         * Indicates if the list is "filtrable" (i.e., if it supports sub-filters
         * or search). Could be a boolean or an array of booleans if multiple sub-filters exist.
         */
        isFiltrable?: boolean | boolean[];
        /**
         * Props for configuring pagination behavior in the list.
         * This includes properties like `isFetchingNextPage` to indicate if the next page is being fetched,
         * and `onPageEnd` to handle the event when the user reaches the end of the list.
         */
        paginationProps?: ListFactoryPaginationProps;
        /**
         * Callback function triggered when the search value changes.
         * This allows the parent component to react to changes in the search input,
         * such as filtering the list items based on the new search value.
         */
        onSearchValueChange?(value: string): void;
    } & FilterFactoryRawValuesMap[ContentTypes.List];
    datepicker: {
        type: ContentTypes.Datepicker;
        /**
         * Indicates if the datepicker supports a range of dates
         * (i.e., `start` and `end`).
         */
        range?: boolean;
        minDate?: Date;
        maxDate?: Date;
    } & FilterFactoryRawValuesMap[ContentTypes.Datepicker];
    string: {
        type: ContentTypes.String;
        typeVariant?: Exclude<FilterFactoryContentTypeVariant, 'boolean'>;
        /**
         * Optional array of suggestions to assist users with predefined inputs.
         */
        suggestions?: string[];
    } & FilterFactoryRawValuesMap[ContentTypes.String];
};
/**
 * Union type that represents the content configuration for any filter type.
 * It picks one of the three possible configurations from `FilterFactoryConfigContentMap`.
 */
export type FilterFactoryConfigContent = {
    [K in ContentTypes]: FilterFactoryConfigContentMap[K];
}[ContentTypes];
/**
 * Describes the overall configuration for a filter in the system. It
 * extends the base `FilterProps` from a standard filter component
 * library, except for the `content` prop which is overridden by the
 * filter factory definition.
 *
 * @typeparam T - Represents the filter’s identifier type (defaulting to `string`).
 */
export type FilterFactoryConfig<T extends string = string> = Omit<FilterProps, 'content'> & {
    id: T;
    content: FilterFactoryConfigContent;
    focusOnShow?: boolean;
    aiGenerated?: boolean;
};
export {};
