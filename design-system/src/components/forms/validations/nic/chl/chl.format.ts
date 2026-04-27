import type { NicPayloadType } from '../../../../utils/interfaces/nic.interface';

/** Format CHL Rut with `.` and `-` */
export const formatCHLNic = ({ rawNic }: NicPayloadType): string => {
  let result = `${rawNic.slice(-4, -1)}-${rawNic.substr(rawNic.length - 1)}`;
  for (let i = 4; i < rawNic.length; i += 3) {
    result = rawNic.slice(-3 - i, -i) + '.' + result;
  }

  return result.toUpperCase();
};

/**
 * Rule to clean raw CHL RUT into accepted format
 */
export const cleanCHLNic = ({ rawNic }: NicPayloadType): string =>
  rawNic.replace(/[^0-9kK]/gi, '').toUpperCase();
