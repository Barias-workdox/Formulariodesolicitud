import type { MultipleAvatarsVariant } from './multiple-avatars';
import type { DesignSystemColorType } from '@themes';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { AvatarOverrides } from 'baseui/avatar';
import type { StyleObject } from 'styletron-react';

const multipleAvatarsCounterVariantMap: Record<
  MultipleAvatarsVariant,
  { backgroundColor: DesignSystemColorType; textColor: DesignSystemColorType }
> = {
  brain: {
    backgroundColor: 'powerSubtle',
    textColor: 'powerStrong',
  },
  default: {
    backgroundColor: 'brandSubtle',
    textColor: 'brandMedium',
  },
  companies: {
    backgroundColor: 'powerWashed',
    textColor: 'powerMedium',
  },
  groups: {
    backgroundColor: 'neutralWashed',
    textColor: 'neutralMedium',
  },
};

/** Multiple Avatars overrides */
export const getAvatarCounterOverrides = ({
  variant = 'default',
}: {
  variant: MultipleAvatarsVariant;
}): AvatarOverrides => {
  const { backgroundColor, textColor } = multipleAvatarsCounterVariantMap[variant];

  return {
    Root: {
      style: ({ $theme }: StyleOverrideProps): StyleObject => ({
        backgroundColor: $theme.colors[backgroundColor],
      }),
    },
    Initials: {
      style: ({ $theme }: StyleOverrideProps) => ({
        color: $theme.colors[textColor],
      }),
    },
  };
};
