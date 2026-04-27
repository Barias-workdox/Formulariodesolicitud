import { useMemo } from 'react';

import { Skeleton as BaseSkeleton } from 'baseui/skeleton';

import { mergeOverridesDeep } from '@components/utils/baseui/helpers';

import { getSkeletonOverrides } from './skeleton.overrides';

import type { SkeletonProps as BaseSkeletonProps, SkeletonOverrides } from 'baseui/skeleton/types';

export interface SkeletonProps extends BaseSkeletonProps {
  'data-testid'?: string;
}

/**
 * Skeleton component used for displaying loading state.
 */
export const Skeleton = ({
  'data-testid': dataTestId = 'design-system-skeleton',
  overrides,
  ...rest
}: SkeletonProps): JSX.Element => {
  const mergedOverrides: SkeletonOverrides = useMemo(() => {
    const baseOverrides = getSkeletonOverrides({ dataTestId });

    return mergeOverridesDeep(baseOverrides, overrides);
  }, [dataTestId, overrides]);

  return (
    <BaseSkeleton
      {...rest}
      overrides={mergedOverrides}
    />
  );
};
