import { useMemo } from 'react';

import { useTranslation } from '@components/utils';

import type { ObjectToEvalType } from '../interfaces';
import type { CommonOption } from '@components/select/next';

export type ObjectToEvalSelectOptionType = CommonOption<ObjectToEvalType>;

/** Memorized select option values for the condition value **object to eval*/
export const useObjectToEvalOptions = (): ObjectToEvalSelectOptionType[] => {
  const { t } = useTranslation();

  return useMemo(
    () => [
      { id: 'User', label: t('decisionTree.requester') },
      { id: 'WorkflowRequest', label: t('decisionTree.request') },
    ],
    [t],
  );
};
