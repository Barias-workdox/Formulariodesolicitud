import { useMemo } from 'react';

import { useTranslation } from '@components/utils';

import type { ActionIdType } from '../interfaces';
import type { CommonOption } from '@components/select/next';

export type ActionSelectOptionsType = CommonOption<ActionIdType>;

/** Memorized select option values for the action **actionType*/
export const useActionOptions = (): ActionSelectOptionsType[] => {
  const { t } = useTranslation();

  return useMemo(
    () => [
      { id: 'assign_taker', label: t('decisionTree.assign') },
      { id: 'start_workflow', label: t('decisionTree.startWorkflow') },
    ],
    [t],
  );
};
