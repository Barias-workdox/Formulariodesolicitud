import { NicPayloadType } from '../../../../utils/interfaces/nic.interface';
/**
 * Validate Peruvian National Identification Card (NIC) depending selected National Identification Kind.
 */
export declare const validatePERNic: ({ rawNic, nationalIdentificationKindCode, }: NicPayloadType) => boolean;
