import type { AvatarProps, AvatarSize } from './avatar';
import type { WithTestId } from '@interfaces/common.interfaces';
import type { DesignSystemColorType, StyleOverrideProps } from '@themes/theme.interfaces';
import type { AvatarOverrides } from 'baseui/avatar';
import type { StyleObject } from 'styletron-react';

const avatarTextColorsMap = {
  peaceSubtle: 'peaceStrong',
  brandSubtle: 'brandMedium',
  powerSubtle: 'powerStrong',
  neutralSubtle: 'neutral',
  neutralWashed: 'neutral',
  powerWashed: 'power',
  /** @deprecated Use peaceSubtle instead */
  bgPeaceSubtle: 'textPeaceStrong',
  /** @deprecated Use brandSubtle instead */
  bgBrandSubtle: 'textBrandMedium',
  /** @deprecated Use powerSubtle instead */
  bgPowerSubtle: 'textPowerStrong',
  /** @deprecated Use neutralSubtle instead */
  bgNeutralSubtle: 'textNeutral',
  /** @deprecated Use neutralWashed instead */
  bgNeutralWashed: 'textNeutral',
  /** @deprecated Use powerWashed instead */
  bgPowerWashed: 'textPower',
} as const satisfies Partial<Record<DesignSystemColorType, DesignSystemColorType>>;

// Complete mapping for fontSize based on avatar size
export const avatarFontSizeMap: Record<AvatarSize, string> = {
  '40px': '16px',
  '32px': '14px',
  '24px': '12px',
};

/** Avatar overrides */
export const getAvatarOverrides = ({
  'data-testid': dataTestId,
  backgroundColor,
  disabled,
  size,
}: WithTestId & {
  backgroundColor: AvatarProps['backgroundColor'];
  disabled: boolean;
  size: AvatarSize;
}): AvatarOverrides => ({
  Root: {
    props: { 'data-testid': `${dataTestId}--root` },
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      backgroundColor: disabled
        ? $theme.colors.neutralDepressed
        : backgroundColor
          ? $theme.colors[backgroundColor]
          : undefined,
      flexShrink: 0,
    }),
  },
  Initials: {
    props: { 'data-testid': `${dataTestId}--initials` },
    style: ({ $theme }: StyleOverrideProps) => ({
      fontSize: avatarFontSizeMap[size],
      lineHeight: 'unset',
      fontWeight: 700,
      color:
        $theme.colors[
          (avatarTextColorsMap[backgroundColor as keyof typeof avatarTextColorsMap] ||
            'textBase') as keyof typeof $theme.colors
        ],
    }),
  },
});
