import type { NicPayloadType } from '../../../../utils/interfaces/nic.interface';

/** Format default raw nic */
export const formatDefaultNic = ({ rawNic }: NicPayloadType): string => rawNic;

/** Clean raw default nic into accepted format */
export const cleanDefaultNic = ({ rawNic }: NicPayloadType): string =>
  rawNic.replace(/[^0-9a-zA-Z-.]/gi, '');
