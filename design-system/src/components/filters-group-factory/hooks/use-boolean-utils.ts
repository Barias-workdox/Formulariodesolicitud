import { useCallback } from 'react';

import { useTranslation } from '@components/utils';

import type { Item } from '@components/list-factory/list-factory.interfaces';

type GetBooleanItemsOptions = {
  withCheckbox?: boolean;
};

type UseBooleanOptionsReturn = {
  getBooleanItems(options?: GetBooleanItemsOptions): Item[];
};

/**
 * Custom hook providing utilities for boolean-based lists/filters.
 */
export const useBooleanUtils = (): UseBooleanOptionsReturn => {
  const { t } = useTranslation();

  /**
   * Generates a list of items representing `true` and `false`.
   */
  const getBooleanItems = useCallback(
    ({ withCheckbox = true }: GetBooleanItemsOptions = { withCheckbox: true }): Item[] => [
      { id: 'true', label: t('boolean.true'), withCheckbox },
      { id: 'false', label: t('boolean.false'), withCheckbox },
    ],
    [t],
  );

  return { getBooleanItems };
};
