import { useMemo } from 'react';

import { useTranslation } from '@components/utils';

import { getGroupConditionDataType } from '../utils/decision-tree.utils';

import type { DataType, ObjectToEvalType, FieldIdType } from '../interfaces';
import type { CommonOption } from '@components/select/next';

type IUseValueOptionsParams = {
  objectToEval?: ObjectToEvalType;
  field?: FieldIdType;
  groups: CommonOption[];
  profiles: CommonOption[];
  dataType: DataType;
  dynamicAttributes: CommonOption[];
};

/** Memorized select option values for the condition **value** field */
export const useValueOptions = ({
  objectToEval,
  field,
  groups,
  profiles,
  dataType,
  dynamicAttributes,
}: IUseValueOptionsParams): CommonOption[] => {
  const { t } = useTranslation();

  return useMemo(() => {
    const groupConditionDataType = getGroupConditionDataType({
      objectToEval,
      field,
      dataType,
    });

    if (groupConditionDataType === 'profiles') {
      return profiles;
    }

    if (groupConditionDataType === 'groups') {
      return groups;
    }

    if (groupConditionDataType === 'booleanAttributes') {
      return [
        { id: 'true', label: t('decisionTree.true') },
        { id: 'false', label: t('decisionTree.false') },
      ];
    }

    if (groupConditionDataType === 'dynamicAttributes') {
      const foundAttribute = dynamicAttributes.find(
        ({ id: dynamicAttributeId }) => field === dynamicAttributeId,
      );

      return foundAttribute?.options ?? [];
    }

    return [];
  }, [dataType, dynamicAttributes, field, groups, objectToEval, profiles, t]);
};
