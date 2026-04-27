import { useMemo } from 'react';

import { Avatar as BaseAvatar } from 'baseui/avatar';

import { StatefulTooltipNext } from '@components/tooltip-next';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { COMMON_HEIGHT_32 } from '@constants/common.constants';

import { getAvatarOverrides } from './avatar.overrides';
import { AvatarAnchor } from './avatar.styles';

import type { WithTestId } from '@interfaces/common.interfaces';
import type { DesignSystemColorType } from '@themes';
import type { AvatarOverrides, AvatarProps as BaseAvatarProps } from 'baseui/avatar';

// Avatar-specific size type with only supported sizes
export type AvatarSize = '24px' | '32px' | '40px';

export interface AvatarProps
  extends WithTestId, Pick<BaseAvatarProps, 'initials' | 'name' | 'overrides' | 'src'> {
  /** The background color of the avatar, limited to specific color options. */
  backgroundColor?: DesignSystemColorType;
  /** The size of the avatar. */
  size?: AvatarSize;
  /** Whether the avatar is disabled. */
  disabled?: boolean;
  showTooltip?: boolean;
  zIndex?: number;
}

/**
 * The `Avatar` component displays a user's avatar with customizable properties such as
 * background color, size, and optional disabled state.
 */
export const Avatar = ({
  'data-testid': dataTestId = 'avatar',
  backgroundColor = 'brandSubdued',
  disabled,
  size = COMMON_HEIGHT_32,
  initials,
  name = '',
  overrides,
  showTooltip = true,
  zIndex,
  src,
}: AvatarProps): JSX.Element => {
  const mergedOverrides: AvatarOverrides = useMemo(() => {
    const customOverrides = getAvatarOverrides({
      backgroundColor,
      disabled,
      'data-testid': dataTestId,
      size,
    });

    return mergeOverridesDeep(customOverrides, overrides);
  }, [backgroundColor, disabled, dataTestId, size, overrides]);

  const avatarComponent = (
    <BaseAvatar
      size={size}
      initials={initials}
      name={name}
      src={src}
      overrides={mergedOverrides}
    />
  );

  return showTooltip ? (
    <StatefulTooltipNext
      content={name}
      showArrow
      placement="bottom"
      zIndex={zIndex}
    >
      <AvatarAnchor>{avatarComponent}</AvatarAnchor>
    </StatefulTooltipNext>
  ) : (
    <>{avatarComponent}</>
  );
};
