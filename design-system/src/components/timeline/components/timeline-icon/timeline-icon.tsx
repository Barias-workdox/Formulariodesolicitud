import type { ReactElement } from 'react';

import { BackgroundIcon, type BackgroundIconProps } from '@components/background-icon';

import { defaultIconConfig } from '../../constants';

export type TimelineIconProps = Omit<BackgroundIconProps, 'shape'>;

/** Component that render an icon that could be used as a indicator on a timeline step */
export const TimelineIcon = ({
  'data-testid': dataTestId = 'timeline-icon',
  ...rest
}: TimelineIconProps): ReactElement => {
  return (
    <BackgroundIcon
      data-testid={dataTestId}
      {...defaultIconConfig}
      {...rest}
    />
  );
};
