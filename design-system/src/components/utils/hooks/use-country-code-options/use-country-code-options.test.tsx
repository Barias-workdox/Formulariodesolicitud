import { renderHook } from '@test/test-utils';

import {
  sovereignCountryCodes,
  nonUnSovereignCountryCodes,
  territoryCodes,
  otherCodes,
  specialAreaCodes,
} from '../../constants/country-code.constants';

import { useCountryCodeOptions } from './use-country-code-options';

import type { UseCountryCodeOptionsType } from './use-country-code-options';
import type { CountryCodeType } from '../../interfaces/country-code.interface';

/** Reusable hook call */
const mockUseCountryCodeOptions = (
  countryCodes?: CountryCodeType[],
  options?: UseCountryCodeOptionsType,
) => renderHook(() => useCountryCodeOptions(countryCodes, options));

describe('useCountryCodeOptions hook - tests', () => {
  it('should render with sovereign countries if countryCodes is undefined and territoryType is default', () => {
    const { result } = mockUseCountryCodeOptions();

    const expectedCountries = [...sovereignCountryCodes, ...nonUnSovereignCountryCodes];

    expect(result.current).toHaveLength(expectedCountries.length);
  });

  it('should render with all territories if countryCodes is undefined and territoryType is territories', () => {
    const { result } = mockUseCountryCodeOptions(undefined, { territoryType: 'territories' });

    expect(result.current).toHaveLength(territoryCodes.length);
  });

  it('should render with all codes if countryCodes is undefined and territoryType is all', () => {
    const { result } = mockUseCountryCodeOptions(undefined, { territoryType: 'all' });

    const expectedAllCodes = [
      ...sovereignCountryCodes,
      ...nonUnSovereignCountryCodes,
      ...territoryCodes,
      ...otherCodes,
      ...specialAreaCodes,
    ];

    expect(result.current).toHaveLength(expectedAllCodes.length);
  });

  describe('territoryType filtering', () => {
    it('should filter to countries only when territoryType is "countries"', () => {
      const mixedCodes: CountryCodeType[] = ['USA', 'CHL', 'HKG', 'GIB'];

      const { result } = mockUseCountryCodeOptions(mixedCodes, { territoryType: 'countries' });

      const expectedCountries = ['USA', 'CHL'];

      expect(result.current.map(({ id }) => id)).toEqual(expectedCountries);
    });

    it('should filter to territories only when territoryType is "territories"', () => {
      const mixedCodes: CountryCodeType[] = ['USA', 'CHL', 'HKG', 'GIB'];

      const { result } = mockUseCountryCodeOptions(mixedCodes, { territoryType: 'territories' });

      const expectedTerritories = ['HKG', 'GIB'];

      expect(result.current.map(({ id }) => id)).toEqual(expectedTerritories);
    });

    it('should include all when territoryType is "all"', () => {
      const mixedCodes: CountryCodeType[] = ['USA', 'CHL', 'HKG', 'GIB'];

      const { result } = mockUseCountryCodeOptions(mixedCodes, { territoryType: 'all' });

      expect(result.current.map(({ id }) => id)).toEqual(mixedCodes);
    });

    it('should default to countries when territoryType is undefined', () => {
      const mixedCodes: CountryCodeType[] = ['USA', 'CHL', 'HKG', 'GIB'];

      const { result } = mockUseCountryCodeOptions(mixedCodes);

      const expectedCountries = ['USA', 'CHL'];

      expect(result.current.map(({ id }) => id)).toEqual(expectedCountries);
    });
  });
});
