import type { ReactNode } from 'react';

import { ACTIVITY_ICON_CONTAINER_SIZE, TAIL_MARGIN_TOP } from '../../constants';

import type { StepOverrides } from 'baseui/progress-steps';
import type { StyleObject } from 'styletron-standard';

type GetOverridesParams = {
  indicator: ReactNode;
};

/** Get the step overrides customized by the Design System theme and kind */
export const getOverrides = ({ indicator }: GetOverridesParams): StepOverrides => ({
  Title: {
    style: ({ $theme }): StyleObject => ({
      paddingBottom: $theme.spacing.spacingXs,
    }),
  },
  Description: {
    style: ({ $theme }): StyleObject => ({
      marginBottom: $theme.spacing.spacing2xs,
    }),
  },
  IconContainer: {
    style: ({ $theme }): StyleObject => ({
      marginLeft: $theme.spacing.spacingMd,
      marginRight: $theme.spacing.spacingMd,
      height: ACTIVITY_ICON_CONTAINER_SIZE,
      width: ACTIVITY_ICON_CONTAINER_SIZE,
    }),
  },
  Tail: {
    style: (): StyleObject => ({
      marginTop: TAIL_MARGIN_TOP,
      height: '100%',
    }),
  },
  Icon: {
    component: () => <>{indicator}</>,
  },
});
