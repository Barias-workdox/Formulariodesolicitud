import { InputControlProps } from '../input';
import { CountryCodeType } from '../../../utils/interfaces';
export interface PhoneControlProps extends InputControlProps {
    /** Used to map country specific standardized texts */
    countryCode?: CountryCodeType;
}
/**
 * Component that implement a form control phone number wrapped on controller provided
 * by react hook form. It allows the consumer to provide a country code and get specific
 * standardized texts, but they can also be overrode by supplying them directly
 */
export declare const PhoneControl: ({ countryCode, ...rest }: PhoneControlProps) => JSX.Element;
