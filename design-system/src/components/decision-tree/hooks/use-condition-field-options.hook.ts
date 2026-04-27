import { useMemo } from 'react';

import { List } from '@carbon/icons-react';

import { useTranslation } from '@components/utils';

import { getDynamicAttributeIcon } from '../utils/decision-tree.utils';

import type { DataType, ObjectToEvalType, FieldIdType } from '../interfaces';
import type { CarbonIconType } from '@carbon/icons-react';
import type { CommonOption } from '@components/select/next';

export type FieldSelectOptionType = CommonOption<FieldIdType> & {
  dataType?: DataType;
  options?: CommonOption[];
  icon?: CarbonIconType;
};

type IUseFieldOptionsParams = {
  objectToEval?: ObjectToEvalType;
  dynamicAttributes: FieldSelectOptionType[];
};

/**
 * Memorized select option values for the condition value **field**
 *
 * The response depends whether the selected option from **object to eval**
 * is the user or the request.
 */
export const useFieldOptions = ({
  objectToEval,
  dynamicAttributes,
}: IUseFieldOptionsParams): FieldSelectOptionType[] => {
  const { t } = useTranslation();

  return useMemo(() => {
    if (objectToEval === 'User') {
      return [
        { id: 'group_ids', label: t('decisionTree.profile'), dataType: 'string', Icon: List },
        { id: 'job_ids', label: t('decisionTree.group'), dataType: 'string', Icon: List },
      ];
    }

    if (objectToEval === 'WorkflowRequest') {
      return dynamicAttributes.map(({ dataType, ...dynamicAttribute }) => ({
        dataType,
        icon: getDynamicAttributeIcon(dataType),
        ...dynamicAttribute,
      }));
    }

    return [];
  }, [dynamicAttributes, objectToEval, t]);
};
