import { ActivityIcon } from './components';
import {
  ACTIVITY_ICON_CONTAINER_SIZE,
  TAIL_MARGIN_TOP,
} from './components/activity-icon/activity-icon.constants';

import type { ActivityType } from '@components/activity-timeline/activity-timeline.interfaces';
import type { StepOverrides } from 'baseui/progress-steps';
import type { StyleObject } from 'styletron-standard';

export interface GetOverridesParams {
  dataTestId: string;
  type: ActivityType;
}

/**
 * Get the step overrides customized by the Design System theme and kind.
 */
export const getOverrides = ({ dataTestId, type }: GetOverridesParams): StepOverrides => ({
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
      backgroundColor: 'transparent',
    }),
  },
  Tail: {
    style: (): StyleObject => ({
      marginTop: TAIL_MARGIN_TOP,
      height: '100%',
    }),
  },
  Icon: {
    component: () => (
      <ActivityIcon
        data-testid={`${dataTestId}--${type}-icon`}
        type={type}
      />
    ),
  },
});
