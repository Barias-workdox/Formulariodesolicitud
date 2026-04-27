import { useMemo } from 'react';

import { useTranslation } from '@components/utils';

import type { DataType, OperatorType } from '../interfaces';
import type { CommonOption } from '@components/select/next';

export type OperatorSelectOptionsType = CommonOption<OperatorType>;

type IUseOperatorOptionsParams = {
  dataType: DataType;
};

/**
 * Memorized select option values for the condition value **operator**
 *
 * The response is based in the condition **data type**
 */
export const useOperatorOptions = ({
  dataType,
}: IUseOperatorOptionsParams): OperatorSelectOptionsType[] => {
  const { t } = useTranslation();

  return useMemo(() => {
    switch (dataType) {
      case 'boolean':
      case 'string':
      case 'list':
        return [
          { id: '==', label: t('decisionTree.equals') },
          { id: '!=', label: t('decisionTree.notEquals') },
        ];

      case 'date':
      case 'numeric':
        return [
          { id: '==', label: t('decisionTree.equals') },
          { id: '!=', label: t('decisionTree.notEquals') },
          { id: '>', label: t('decisionTree.graterThan') },
          { id: '>=', label: t('decisionTree.graterOrEqual') },
          { id: '<', label: t('decisionTree.lessThan') },
          { id: '<=', label: t('decisionTree.lessOrEqual') },
        ];
    }
  }, [dataType, t]);
};
