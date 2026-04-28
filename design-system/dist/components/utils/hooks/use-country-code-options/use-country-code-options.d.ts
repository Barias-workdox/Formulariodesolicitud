import { SortType } from '../../interfaces';
import { CountryCodeOption, CountryCodeType } from '../../interfaces/country-code.interface';
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
/**
 * Hook used to fetch the country code options with i18n on the selected
 * locale by the app consumer
 */
export declare const useCountryCodeOptions: (
/** Render the supplied country code options in the form control. If undefined, will render all codes available based on territoryType  */
countryCodes?: CountryCodeType[], options?: UseCountryCodeOptionsType) => CountryCodeOption[];
