import { useCallback } from 'react';

import { DATA_TYPES, DATA_TYPES_IDS } from '../constants/data-types.constant';

import { useDataTypeTranslation } from './use-data-type-translation.hook';

import type { DataType } from '../interfaces/data-types.interfaces';
import type { CarbonIconType } from '@carbon/icons-react';

export type DataTypeOption = {
  id: DataType;
  label: string;
  description: string;
  icon: CarbonIconType;
};

export interface UseDataTypesReturn<T> {
  getDataTypeOptionById(dataType: { id: DataType }): T;
  getAllDataTypeOptions(): T[];
}

type UseDataTypesHook = {
  <T>(props: { formatter(option: DataTypeOption): T }): UseDataTypesReturn<T>;
  (): UseDataTypesReturn<DataTypeOption>;
};

/**
 * Hook to get data type options with i18n support.
 */
export const useDataTypes: UseDataTypesHook = <T>(props?: {
  formatter?(option: DataTypeOption): T;
}) => {
  const { t } = useDataTypeTranslation();
  const formatter = props?.formatter;

  /**
   * Get data type option by id.
   */
  const getDataTypeOptionById = useCallback(
    ({ id }: { id: DataType }) => {
      const baseOption = {
        id,
        label: t(`dataTypes.${id}.label`, { defaultValue: id, ignoreErrors: true }),
        description: t(`dataTypes.${id}.description`, { defaultValue: '', ignoreErrors: true }),
        icon: DATA_TYPES[id].icon,
      } satisfies DataTypeOption;

      if (formatter) {
        return formatter(baseOption);
      }

      return baseOption;
    },
    [t, formatter],
  );

  /**
   * Get all data type options.
   */
  const getAllDataTypeOptions = useCallback(() => {
    return DATA_TYPES_IDS.map((id) => getDataTypeOptionById({ id }));
  }, [getDataTypeOptionById]);

  return { getDataTypeOptionById, getAllDataTypeOptions };
};
