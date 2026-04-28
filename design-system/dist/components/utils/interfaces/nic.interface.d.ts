import { CountryCodeType } from './country-code.interface';
import { nicDefaultTextsMap, nicDefaultValidationTextsMap } from '../../forms/validations/nic/default/default.i18n';
/** All national identification kind possible codes */
export type NationalIdentificationKindCode = 'DNI' | 'RUC' | 'CE' | 'PAS' | 'CI' | 'PEP';
export interface NicCountryPayloadType {
    countryCode?: CountryCodeType;
    nationalIdentificationKindCode?: NationalIdentificationKindCode;
}
export interface NicPayloadType extends NicCountryPayloadType {
    rawNic: string;
}
/** All NIC component texts that will be used in conjunction with i18n utils */
export type NicTextType = {
    label: string;
    placeholder: string;
    tooltip: string;
};
/** All NIC validation texts that will be used in conjunction with i18n utils */
export type NicValidationTextType = {
    validation: string;
};
export type NicTextsByNationalIdentificationKindCode = typeof nicDefaultTextsMap;
export type NicValidationsTextsByNationalIdentificationKindCode = typeof nicDefaultValidationTextsMap;
