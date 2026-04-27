import {
  Boolean,
  Calendar,
  CharacterWholeNumber,
  DocumentUnknown,
  Email,
  List,
  Money,
  NotebookReference,
  TextAlignJustify,
  TextScale,
} from '@carbon/icons-react';

import type {
  ComplexDataType,
  DataType,
  DataTypeWithIcon,
  PrimitiveDataType,
  UnknownDataType,
} from '../interfaces/data-types.interfaces';
import type { FilterValue } from '@components/filter/filter.interfaces';

export const COMPLEX_DATA_TYPE = {
  directory: { icon: NotebookReference },
  ref: { icon: NotebookReference },
  money: { icon: Money },
} as const satisfies Record<ComplexDataType, DataTypeWithIcon>;

export const PRIMITIVE_DATA_TYPE = {
  string: { icon: TextScale },
  text: { icon: TextAlignJustify },
  email: { icon: Email },
  date: { icon: Calendar },
  list: { icon: List },
  boolean: { icon: Boolean },
  number: { icon: CharacterWholeNumber },
  percentage: { icon: CharacterWholeNumber },
} as const satisfies Record<PrimitiveDataType, DataTypeWithIcon>;

export const UNKNOWN_DATA_TYPE = { unknown: { icon: DocumentUnknown } } as const satisfies Record<
  UnknownDataType,
  DataTypeWithIcon
>;

export const DATA_TYPES = {
  ...COMPLEX_DATA_TYPE,
  ...PRIMITIVE_DATA_TYPE,
  ...UNKNOWN_DATA_TYPE,
} as const satisfies Record<DataType, DataTypeWithIcon>;

export const DATA_TYPES_IDS = Object.keys(DATA_TYPES) as readonly DataType[];

export const DATA_TYPE_OPTIONS_IDS = DATA_TYPES_IDS.flatMap<FilterValue>((id) => ({
  id,
  label: id,
})).filter(({ id }) => id !== 'unknown') as ReadonlyArray<FilterValue>;

export const COMPLEX_DATA_TYPE_IDS = Object.keys(COMPLEX_DATA_TYPE)
  .map((id) => id)
  .filter((id) => id !== 'unknown') as ReadonlyArray<ComplexDataType>;

export const PRIMITIVE_DATA_TYPE_IDS = Object.keys(PRIMITIVE_DATA_TYPE)
  .map((id) => id)
  .filter((id) => id !== 'unknown') as ReadonlyArray<PrimitiveDataType>;
