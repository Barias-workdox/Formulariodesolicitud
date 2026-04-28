import { NicPayloadType } from '../../../../utils/interfaces/nic.interface';
/**
 * Validate ECU National Identification Card (NIC) depending selected National Identification Kind.
 */
export declare const validateECUNic: ({ rawNic, nationalIdentificationKindCode, }: NicPayloadType) => boolean;
