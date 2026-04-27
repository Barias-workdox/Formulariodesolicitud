import type { ProgressBarProps } from '@components/progress';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

/** gets the overrides for the progress bar */
export const getProgressBarOverrides = ({
  completed,
}: {
  completed: boolean;
}): ProgressBarProps['overrides'] => ({
  BarContainer: {
    style: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  BarProgress: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      backgroundColor: completed ? $theme.colors.positive : $theme.colors.brand,
    }),
  },
});
