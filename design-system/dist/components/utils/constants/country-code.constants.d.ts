import { CountryCodeType } from '../interfaces';
/**
 * UN member states (ISO 3166-1 alpha-3, 193 countries)
 * https://www.un.org/en/about-us/member-states
 */
export declare const sovereignCountryCodes: CountryCodeType[];
/**
 * ISO-assigned sovereign states not in the UN (e.g., Vatican City)
 */
export declare const nonUnSovereignCountryCodes: CountryCodeType[];
/**
 * Dependencies, territories, and regions with ISO codes (not sovereign countries)
 */
export declare const territoryCodes: CountryCodeType[];
/**
 * Special areas of geographical interest (ISO 3166-1 alpha-3)
 */
export declare const specialAreaCodes: CountryCodeType[];
/**
 * Not officially assigned by ISO 3166-1 (e.g., placeholders, user-assigned codes)
 */
export declare const otherCodes: CountryCodeType[];
/**
 * All country codes combined (for backward compatibility with tests)
 */
export declare const allCountryCodes: CountryCodeType[];
