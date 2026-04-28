import { CountryCodeType } from '../../../../utils/interfaces';
import { NicPayloadType } from '../../../../utils/interfaces/nic.interface';
export declare const allRawNicValidationMap: Map<CountryCodeType | undefined, {
    validateRawNic(payload: NicPayloadType): boolean;
}>;
/** Controller utility to validate any National Identification Card (NIC) by a countryCode & a National Identification Kind. */
export declare const validateRawNic: ({ rawNic, countryCode, nationalIdentificationKindCode, }: NicPayloadType) => boolean;
