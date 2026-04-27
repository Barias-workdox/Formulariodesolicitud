import { DATA_TYPES_IDS } from '../constants/data-types.constant';

import type { DataType } from '../interfaces/data-types.interfaces';

/**
 * Utility function to check if a given id is a valid DataType.
 */
export const isValidDataType = (id: string): id is DataType => {
  return DATA_TYPES_IDS.includes(id as DataType);
};
