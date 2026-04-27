import type { NicPayloadType } from '../../../../utils/interfaces/nic.interface';

/** Clean raw MEX nic into accepted format */
export const cleanMEXNic = ({ rawNic }: NicPayloadType): string =>
  rawNic.replace(/[^0-9a-zA-ZñÑ&-\s.]/gi, '');
