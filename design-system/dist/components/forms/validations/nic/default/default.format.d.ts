import { NicPayloadType } from '../../../../utils/interfaces/nic.interface';
/** Format default raw nic */
export declare const formatDefaultNic: ({ rawNic }: NicPayloadType) => string;
/** Clean raw default nic into accepted format */
export declare const cleanDefaultNic: ({ rawNic }: NicPayloadType) => string;
