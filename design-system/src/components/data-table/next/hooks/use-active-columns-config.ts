import { useMemo } from 'react';

import { useResponsiveProps } from '@utils/use-responsive-props.util';

import { getActiveColumnsConfigWithUserCustomizations } from '../utils/data-table.utils';

import type { ActiveColumn, ColumnConfig } from '..';

type UseActiveColumnsConfigParams<T extends ColumnConfig> = {
  activeColumns: ActiveColumn[];
  allColumnsConfig: T[];
};

type UseActiveColumnsConfigReturn<T> = {
  columnsConfig: T[];
};

/**
 * Hook to get the active columns configuration.
 */
export const useActiveColumnsConfig = <T extends ColumnConfig>({
  activeColumns,
  allColumnsConfig,
}: UseActiveColumnsConfigParams<T>): UseActiveColumnsConfigReturn<T> => {
  const columnsConfig = useMemo(
    () => getActiveColumnsConfigWithUserCustomizations(activeColumns, allColumnsConfig),
    [activeColumns, allColumnsConfig],
  );

  const noFixedColumnsConfig = useMemo(
    () => columnsConfig.map((column) => ({ ...column, isFixed: false })),
    [columnsConfig],
  );

  const responsiveColumnsConfig = (useResponsiveProps(
    {
      large: columnsConfig,
      extralarge: columnsConfig,
      medium: noFixedColumnsConfig,
      small: noFixedColumnsConfig,
      extrasmall: noFixedColumnsConfig,
    },
    columnsConfig,
  ) ?? []) as T[];

  return { columnsConfig: responsiveColumnsConfig };
};
