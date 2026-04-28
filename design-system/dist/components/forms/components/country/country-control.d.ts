import { SelectControlProps } from '../select';
import { TerritoryType } from '../../../utils/hooks/use-country-code-options';
import { CountryCodeType, SortType } from '../../../utils/interfaces';
export type CountryControlProps = Omit<SelectControlProps, 'options'> & {
    /** Render the supplied country code options in the form control. If undefined, will render all codes available  */
    countryCodes?: CountryCodeType[];
    sort?: SortType;
    /** Filter by territory type: 'countries' (sovereign countries only), 'territories' (territories and dependencies only), or 'all' (both) */
    territoryType?: TerritoryType;
    name: string;
};
/**
 * Component that implement a form control select wrapped on controller provided by react hook form,
 * with all countries as options
 *
 * Usage examples:
 * - For countries only: territoryType="countries"
 * - For territories only: territoryType="territories" with countryCodes like ['HKG', 'GIB', 'BMU']
 * - For all: territoryType="all"
 * - For special areas: territoryType="specialAreas"
 * - For other: territoryType="other"
 * - Default: territoryType="countries"
 */
export declare const CountryControl: ({ countryCodes, sort, territoryType, ...rest }: CountryControlProps) => JSX.Element;
