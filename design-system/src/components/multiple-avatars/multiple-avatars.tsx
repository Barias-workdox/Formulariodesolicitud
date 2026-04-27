import { Avatar } from '@components/avatar';
import { AvatarAnchor } from '@components/avatar/avatar.styles';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { COMMON_HEIGHT_32 } from '@constants/common.constants';

import { MAX_AVATAR_COUNT } from './multiple-avatars.constants';
import { getAvatarCounterOverrides } from './multiple-avatars.overrides';
import { MultipleAvatarsRoot } from './multiple-avatars.styles';

import type { AvatarProps } from '@components/avatar';
import type { WithTestId } from '@interfaces/common.interfaces';
import type { DesignSystemColorType } from '@themes';

export type MultipleAvatarsVariant = 'default' | 'brain' | 'groups' | 'companies';

export interface MultipleAvatarsProps
  extends WithTestId, Pick<AvatarProps, 'zIndex' | 'showTooltip' | 'size'> {
  /** An array of avatar objects, each containing a name and optionally background color and initials. */
  avatars: (Pick<AvatarProps, 'name'> &
    Partial<Pick<AvatarProps, 'backgroundColor' | 'initials'>>)[];
  /** The variant style of the avatars, defaulting to 'default'. */
  variant?: MultipleAvatarsVariant;
}

/** Generates a string representing the number of additional avatars beyond the maximum allowed. */
export const getAvatarCounter = (avatarNumber: number): string => {
  return `+${avatarNumber > MAX_AVATAR_COUNT ? MAX_AVATAR_COUNT : avatarNumber}`;
};

const multipleAvatarsVariantMap: Record<MultipleAvatarsVariant, DesignSystemColorType> = {
  default: 'brand',
  companies: 'power',
  groups: 'neutral',
  brain: 'powerSubdued',
};

/**
 * The MultipleAvatars component displays a group of avatars, with an optional tooltip showing the names
 * of additional avatars if they exceed a certain count.
 */
export const MultipleAvatars = ({
  avatars,
  'data-testid': dataTestId = 'multiple-avatars',
  variant = 'default',
  size = COMMON_HEIGHT_32,
  zIndex,
  showTooltip = true,
}: MultipleAvatarsProps): JSX.Element => {
  // Return nothing if no avatars exist
  if (avatars.length === 0) {
    return null;
  }

  const [firstAvatar, ...restAvatars] = avatars;

  const { length: restAvatarsLength } = restAvatars;

  const counterComponent = (
    <Avatar
      data-testid={`${dataTestId}-counter`}
      initials={getAvatarCounter(restAvatarsLength)}
      size={size}
      zIndex={zIndex}
      overrides={getAvatarCounterOverrides({ variant })}
      showTooltip={false}
    />
  );

  return (
    <MultipleAvatarsRoot>
      <Avatar
        {...firstAvatar}
        data-testid={`${dataTestId}-index-1`}
        backgroundColor={multipleAvatarsVariantMap[variant]}
        size={size}
        zIndex={zIndex}
        showTooltip={showTooltip}
      />
      {restAvatarsLength > 0 &&
        (showTooltip ? (
          <StatefulTooltipNext
            zIndex={zIndex}
            showArrow
            placement="bottom"
            content={restAvatars.map(({ name }, index) => (
              <span key={`${name}-${index}`}>
                {name}
                <br />
              </span>
            ))}
          >
            <AvatarAnchor>{counterComponent}</AvatarAnchor>
          </StatefulTooltipNext>
        ) : (
          counterComponent
        ))}
    </MultipleAvatarsRoot>
  );
};
