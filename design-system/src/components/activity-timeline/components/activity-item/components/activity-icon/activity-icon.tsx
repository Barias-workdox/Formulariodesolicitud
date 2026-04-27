import { BackgroundIcon } from '@components/background-icon';

import { defaultIconConfig, iconsByActivity } from './activity-icon.constants';

import type {
  ActivityType,
  IconConfigurationType,
} from '@components/activity-timeline/activity-timeline.interfaces';

export interface ActivityIconProps {
  'data-testid'?: string;
  type: ActivityType;
}

/**
 * A component for displaying an icon associated with a specific
 * activity type.
 */
export const ActivityIcon = ({
  type,
  'data-testid': dataTestId = 'activity-icon',
}: ActivityIconProps): JSX.Element => {
  const configIcon: IconConfigurationType = iconsByActivity[type] || defaultIconConfig;

  return (
    <BackgroundIcon
      data-testid={dataTestId}
      {...configIcon}
    />
  );
};
