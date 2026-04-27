import type { ReactElement } from 'react';

import { BackgroundIcon } from '@components/background-icon';
import { COMMON_HEIGHT_32, COMMON_HEIGHT_44 } from '@constants/common.constants';
import { useResponsiveProps } from '@utils/use-responsive-props.util';

import type { BackgroundIconProps } from '@components/background-icon/background-icon.interfaces';

export type PageHeaderBackgroundIconProps = Pick<
  BackgroundIconProps,
  'Icon' | 'backgroundColor' | 'iconColor'
>;

/**
 * A component to render a responsive background icon for the header.
 */
export const PageHeaderBackgroundIcon = (props: PageHeaderBackgroundIconProps): ReactElement => {
  const responsiveProps = useResponsiveProps<Partial<BackgroundIconProps>>(
    { large: { size: COMMON_HEIGHT_44 } },
    { size: COMMON_HEIGHT_32 },
  );

  return (
    <BackgroundIcon
      shape="square"
      {...props}
      {...responsiveProps}
    />
  );
};
