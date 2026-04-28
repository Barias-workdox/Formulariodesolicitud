import { NicPayloadType } from '../../../../utils/interfaces/nic.interface';
/**
 * Validate Colombian National Identification Card (NIC) depending selected National Identification Kind.
 */
export declare const validateCOLNic: ({ rawNic, nationalIdentificationKindCode, }: NicPayloadType) => boolean;
