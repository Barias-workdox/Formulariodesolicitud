import type { CarbonIconType } from '@carbon/icons-react';

export type UnknownDataType = 'unknown';

/**
 * Complex data types are data types that can have multiple values or a more complex structure.
 * we keep 'ref' here for backward compatibility.
 */
export type ComplexDataType = 'directory' | 'money' | 'ref';

export type PrimitiveDataType =
  | 'string'
  | 'text'
  | 'date'
  | 'list'
  | 'boolean'
  | 'number'
  | 'percentage'
  | 'email';

export type DataType = ComplexDataType | PrimitiveDataType | UnknownDataType;

export type DataTypeWithIcon = {
  icon: CarbonIconType;
};
