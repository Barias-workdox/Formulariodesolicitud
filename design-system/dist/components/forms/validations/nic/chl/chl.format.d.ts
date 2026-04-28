import { NicPayloadType } from '../../../../utils/interfaces/nic.interface';
/** Format CHL Rut with `.` and `-` */
export declare const formatCHLNic: ({ rawNic }: NicPayloadType) => string;
/**
 * Rule to clean raw CHL RUT into accepted format
 */
export declare const cleanCHLNic: ({ rawNic }: NicPayloadType) => string;
