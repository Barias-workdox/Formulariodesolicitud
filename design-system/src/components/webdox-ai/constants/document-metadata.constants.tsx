import type { DataType } from '../interfaces';

export enum MetadataKeyName {
  Counterparty = 'counterparty',
  Party = 'party',
  Amount = 'amount',
  EndDate = 'endDate',
  StartDate = 'startDate',
  ContractType = 'contractType',
}

export const RIGHT_ALIGNED_DATA_TYPES: DataType[] = ['money'];

export const DEFAULT_CURRENCY = '$';
