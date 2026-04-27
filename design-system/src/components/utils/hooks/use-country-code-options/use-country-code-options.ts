import { useMemo } from 'react';

import {
  sovereignCountryCodes,
  territoryCodes,
  nonUnSovereignCountryCodes,
  allCountryCodes,
  otherCodes,
  specialAreaCodes,
} from '../../constants/country-code.constants';
import { useCountriesTranslation } from '../../i18n';

import type { SortType } from '../../interfaces';
import type { CountryCodeOption, CountryCodeType } from '../../interfaces/country-code.interface';

export type TerritoryType = 'countries' | 'territories' | 'all' | 'specialAreas' | 'other';

export interface UseCountryCodeOptionsType {
  /**
   * Sort alphabetically ascending, descending or the order that are found in the supplied array.
   */
  sort?: SortType;
  /**
   * Filter by territory type: 'countries' (sovereign countries only), 'territories' (territories and dependencies only), or 'all' (both)
   */
  territoryType?: TerritoryType;
}

type SortOptionParam = Pick<CountryCodeOption, 'label'>;

/** All sort options for the country code options */
const allSortOptions: Record<SortType, (prev: SortOptionParam, next: SortOptionParam) => number> = {
  asc: ({ label: prevLabel }, { label: nextLabel }) => (prevLabel < nextLabel ? -1 : 1),
  desc: ({ label: prevLabel }, { label: nextLabel }) => (prevLabel > nextLabel ? -1 : 1),
};

/**
 * Get available country codes based on territory type filter
 */
const countryCodesMap: Record<TerritoryType, CountryCodeType[]> = {
  countries: [...sovereignCountryCodes, ...nonUnSovereignCountryCodes],
  territories: territoryCodes,
  all: allCountryCodes,
  specialAreas: specialAreaCodes,
  other: otherCodes,
};

/**
 * Hook used to fetch the country code options with i18n on the selected
 * locale by the app consumer
 */
export const useCountryCodeOptions = (
  /** Render the supplied country code options in the form control. If undefined, will render all codes available based on territoryType  */
  countryCodes?: CountryCodeType[],
  options?: UseCountryCodeOptionsType,
): CountryCodeOption[] => {
  const { sort, territoryType = 'countries' } = options ?? {};

  const { t } = useCountriesTranslation();

  const selectedSortMethod = useMemo(() => allSortOptions[sort], [sort]);

  const availableCountryCodes = useMemo(() => countryCodesMap[territoryType], [territoryType]);

  // If countryCodes is undefined, use all available codes based on territoryType
  const codesToProcess = useMemo(() => {
    if (countryCodes?.length) {
      // Filter the provided countryCodes according to territoryType
      const availableCodesForTerritoryType = countryCodesMap[territoryType];

      return countryCodes.filter((code) => availableCodesForTerritoryType.includes(code));
    }

    return availableCountryCodes;
  }, [countryCodes, territoryType, availableCountryCodes]);

  return useMemo(
    () =>
      codesToProcess
        // To avoid problems, it is better to remove the countries that do not exist in this project
        .filter((code) => allCountryCodes.includes(code))
        .map(
          (code): CountryCodeOption => ({
            id: code,
            label: t(code),
          }),
        )
        .sort((prev, next) => (selectedSortMethod ? selectedSortMethod(prev, next) : undefined)),
    [codesToProcess, t, selectedSortMethod],
  );
};
