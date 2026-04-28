import { CountryCodeType } from '../../utils/interfaces';
export interface HeaderFlagProps {
    countryCode: CountryCodeType;
    label?: string;
}
/**
 * Header flag component.
 */
declare const HeaderFlag: ({ countryCode, label }: HeaderFlagProps) => JSX.Element;
export { HeaderFlag };
