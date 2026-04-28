import { EntityType, FetchingState } from '../entities-multiselect.types';
export interface IUseDocumentAttribute {
    options: {
        id: string;
        uuid: string;
        label: string;
    }[];
    isFetching: FetchingState;
    hasNextPage: boolean;
    peopleTotalElements?: number;
    companyTotalElements?: number;
    setSearch(value: string): void;
    fetchData(type: EntityType): Promise<void>;
    refetchData(params: {
        search: string;
    }): Promise<void>;
}
/**
 * Custom hook that simulates fetching a paginated list of entities (people and companies)
 * from a mock data source. Supports searching, infinite scrolling, and refetching.
 *
 * This hook is intended purely for Storybook logic demonstration purposes.
 * It serves as an example of how to manage the data required by the
 * `EntitiesMultiSelect` component in a real implementation.
 *
 * Features:
 * - Filters the entities based on a search string.
 * - Paginates results with a configurable `perPage` size.
 * - Separately tracks pages for people and companies.
 * - Simulates asynchronous fetching using `setTimeout`.
 * - Returns formatted options suitable for multi-select components.
 *
 */
export declare const useEntitiesDirectoryMockList: (perPage?: number) => IUseDocumentAttribute;
