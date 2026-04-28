import { CountryCodeType } from '../../../../utils/interfaces';
import { NicCountryPayloadType, NicTextType, NicValidationTextType } from '../../../../utils/interfaces/nic.interface';
export declare const allNicI18nTextsMap: Map<CountryCodeType | undefined, Map<import('../../../../utils/interfaces/nic.interface').NationalIdentificationKindCode | undefined, NicTextType>>;
export declare const allNicI18nValidationTextsMap: Map<CountryCodeType | undefined, Map<import('../../../../utils/interfaces/nic.interface').NationalIdentificationKindCode | undefined, NicValidationTextType>>;
/** Utility to get the selected text based on the countryCode and nationalIdentificationKindCode */
export declare const getNicI18nTexts: ({ countryCode, nationalIdentificationKindCode, }: NicCountryPayloadType) => NicTextType;
/** Utility to get the selected validation text based on the countryCode and nationalIdentificationKindCode */
export declare const getNicI18nValidationTexts: ({ countryCode, nationalIdentificationKindCode, }: NicCountryPayloadType) => NicValidationTextType;
/** Utility to return all selected NIC texts in the required locale by context */
export declare const useNicI18nTexts: (payload: NicCountryPayloadType) => NicTextType;
