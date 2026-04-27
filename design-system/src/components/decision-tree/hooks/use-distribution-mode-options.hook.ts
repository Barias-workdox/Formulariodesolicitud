import { useMemo } from 'react';

import { useTranslation } from '@components/utils';

import type { DistributionModeType } from '../interfaces';
import type { CommonOption } from '@components/select/next';

export type DistributionModeSelectOptionsType = CommonOption<DistributionModeType>;

/** Memorized select option values for the action **actionType*/
export const useDistributionModeOptions = (): DistributionModeSelectOptionsType[] => {
  const { t } = useTranslation();

  return useMemo(
    () => [
      { id: 'disabled', label: t('decisionTree.distributionModeOptions.disabled') },
      {
        id: 'global_sequential',
        label: t('decisionTree.distributionModeOptions.globalSequential'),
      },
    ],
    [t],
  );
};
