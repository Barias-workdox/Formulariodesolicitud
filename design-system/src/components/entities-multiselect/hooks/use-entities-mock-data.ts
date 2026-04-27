import { useState, useMemo, useCallback } from 'react';

import { MOCK_ENTITIES } from '../entities-multiselect.constants';

import type { EntityType, FetchingState } from '../entities-multiselect.types';

export interface IUseDocumentAttribute {
  options: { id: string; uuid: string; label: string }[];
  isFetching: FetchingState;
  hasNextPage: boolean;
  peopleTotalElements?: number;
  companyTotalElements?: number;
  setSearch(value: string): void;
  fetchData(type: EntityType): Promise<void>;
  refetchData(params: { search: string }): Promise<void>;
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
export const useEntitiesDirectoryMockList = (perPage = 5): IUseDocumentAttribute => {
  const [pagePeople, setPagePeople] = useState(1);
  const [pageCompanies, setPageCompanies] = useState(1);
  const [isFetching, setIsFetching] = useState<FetchingState>(null);
  const [search, setSearch] = useState('');

  /** --- Filtered base data --- */
  const filteredEntities = useMemo(() => {
    const normalizedSearch = search?.toLowerCase().trim() ?? '';

    if (!normalizedSearch) return MOCK_ENTITIES;

    return MOCK_ENTITIES.filter((entity) => entity.label.toLowerCase().includes(normalizedSearch));
  }, [search]);

  const people = filteredEntities.filter((e) => e.type === 'people');
  const companies = filteredEntities.filter((e) => e.type === 'company');

  const totalPeoplePages = Math.ceil(people.length / perPage);
  const totalCompanyPages = Math.ceil(companies.length / perPage);

  /** --- Combined paginated data --- */

  const data = useMemo(() => {
    const loadedPeople = people.slice(0, pagePeople * perPage);
    const loadedCompanies = companies.slice(0, pageCompanies * perPage);

    return [...loadedPeople, ...loadedCompanies];
  }, [pagePeople, pageCompanies, people, companies, perPage]);

  const hasNextPage = pagePeople < totalPeoplePages || pageCompanies < totalCompanyPages;

  /** --- Fetch next page for specific type --- */
  const fetchData = useCallback(
    async (type: EntityType) => {
      // prevent overlapping fetches
      if (isFetching) return;

      // determine whether this type still has pages left
      const canFetchPeople = type === 'people' && pagePeople < totalPeoplePages;
      const canFetchCompanies = type === 'company' && pageCompanies < totalCompanyPages;

      // if there’s nothing to fetch, just exit early
      if (!canFetchPeople && !canFetchCompanies) return;

      setIsFetching(type);

      await new Promise((res) => setTimeout(res, 1000));

      if (canFetchPeople) {
        setPagePeople((prev) => prev + 1);
      }

      if (canFetchCompanies) {
        setPageCompanies((prev) => prev + 1);
      }

      setIsFetching(null);
    },
    [isFetching, pagePeople, pageCompanies, totalPeoplePages, totalCompanyPages],
  );

  /** --- Refetch both entities from start --- */
  const refetchData = useCallback(
    async (params: { search: string }) => {
      const { search } = params;

      if (isFetching) return;

      setIsFetching('all');

      setPagePeople(1);
      setPageCompanies(1);

      await new Promise((res) => setTimeout(res, 1500));

      setIsFetching(null);
      setSearch(search);
    },
    [isFetching],
  );

  /** --- Build formatted options --- */
  const options = useMemo(
    () =>
      data.map((entity) => ({
        id: String(entity.id),
        uuid: String(entity.id),
        label: String(entity.label),
        type: String(entity.type),
        isValidated: entity.isValidated ?? true,
      })),
    [data],
  );

  return {
    options,
    setSearch,
    isFetching,
    hasNextPage,
    fetchData,
    peopleTotalElements: people.length,
    companyTotalElements: companies.length,
    refetchData,
  };
};
