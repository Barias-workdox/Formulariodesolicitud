import type { OverrideParams } from './account-menu-button.interfaces';
import type { BackgroundIconProps } from '@components/background-icon/background-icon.interfaces';
import type { TextProps } from '@components/text';
import type { StyleOverrideProps } from '@themes/theme.interfaces';

/**
 * Returns style overrides for the BackgroundIcon component
 */
export const getBackgroundIconOverrides = ({
  isActive,
}: OverrideParams): BackgroundIconProps['overrides'] => ({
  Root: {
    style: ({ $theme }: StyleOverrideProps) => ({
      backgroundColor: isActive ? $theme.colors.neutralBase : $theme.colors.transparent,
      transition: `background-color 0.15s ease-out`,
    }),
  },
});

/**
 * Returns style overrides for the Text component
 */
export const textOverrides: TextProps['overrides'] = {
  Block: {
    style: ({ $theme }: StyleOverrideProps) => ({
      margin: `0 ${$theme.spacing.spacingXs} 0 ${$theme.spacing.spacingXs}`,
      color: 'inherit',
      lineHeight: '140%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }),
  },
};
