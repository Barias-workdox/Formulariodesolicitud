import { useMemo } from 'react';
import type { ReactElement } from 'react';

import { ProgressBar as BaseProgressBar } from 'baseui/progress-bar';

import { mergeOverridesDeep } from '@components/utils/baseui/helpers';

import { getProgressBarOverrides } from './progress-bar.overrides';

import type { ProgressBarProps as BaseProgressBarProps, Size } from 'baseui/progress-bar';

export interface ProgressBarProps extends Omit<
  BaseProgressBarProps,
  | 'infinite'
  | 'showLabel'
  | 'size'
  | 'steps'
  | 'successValue'
  | 'maxValue'
  | 'minValue'
  | 'getProgressLabel'
> {
  completed: boolean;
  /** If set to true, there’s and infinite loading animation. */
  infinite?: boolean;
  /** If set to false, label is hidden and `getProgressLabel` is ignored. */
  showLabel?: boolean;
  /** Defines the size (thickness) of the progress bar. */
  size?: Size;
  /** Renders a sectional progress bar. Value should be set to a positive number larger than one. */
  steps?: number;
  /** A custom completion value. Should be replaced by maxValue prop. */
  successValue?: number;
  /** Maximum possible value. */
  maxValue?: number;
  /** Minimum possible value. */
  minValue?: number;
  /** The function that returns a progress bar label to display. */
  getProgressLabel?(value: number, maxValue: number, minValue: number): React.ReactNode;
}

/** Styled ProgressBar component */
export const ProgressBar = ({
  completed,
  value,
  successValue = 100,
  infinite = false,
  showLabel = false,
  size = 'medium',
  steps = 1,
  maxValue = 100,
  minValue = 0,
  getProgressLabel,
  overrides,
  ...rest
}: ProgressBarProps): ReactElement => {
  const mergedOverrides = useMemo(() => {
    const baseOverrides = getProgressBarOverrides({ completed });

    return mergeOverridesDeep(baseOverrides, overrides);
  }, [completed, overrides]);

  return (
    <BaseProgressBar
      {...rest}
      value={value}
      getProgressLabel={getProgressLabel}
      successValue={successValue}
      infinite={infinite}
      showLabel={showLabel}
      size={size}
      steps={steps}
      maxValue={maxValue}
      minValue={minValue}
      overrides={mergedOverrides}
    />
  );
};
