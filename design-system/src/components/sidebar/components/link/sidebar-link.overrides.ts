import {
  SIDEBAR_MEDIUM_TRANSITION_DURATION,
  SIDEBAR_FAST_TRANSITION_DURATION,
  SIDEBAR_TRANSITION_TIMING_FUNCTION_EASE_OUT,
} from '../../sidebar.constants';

import { TEXT_LINE_HEIGHT } from './sidebar-link.constants';

import type { OverrideParams } from './sidebar-link.interfaces';
import type { AvatarProps } from '@components/avatar';
import type { BackgroundIconProps } from '@components/background-icon/background-icon.interfaces';
import type { TextProps } from '@components/text';
import type { StyleOverrideProps } from '@themes/theme.interfaces';

/**
 * Returns style overrides for the BackgroundIcon component
 */
export const getBackgroundIconOverrides = ({
  isActive,
  isHovered,
}: OverrideParams): BackgroundIconProps['overrides'] => ({
  Root: {
    style: ({ $theme }: StyleOverrideProps) => ({
      borderRadius: $theme.spacing.spacingXs,
      backgroundColor: $theme.colors.neutralBase,
      transition: `background-color ${SIDEBAR_FAST_TRANSITION_DURATION} ${SIDEBAR_TRANSITION_TIMING_FUNCTION_EASE_OUT}`,
      ...(isHovered && {
        backgroundColor: $theme.colors.neutralBase,
        ...(isActive && {
          backgroundColor: $theme.colors.brandSubtle,
        }),
      }),
      ...(isActive &&
        !isHovered && {
          backgroundColor: $theme.colors.brandWashed,
        }),
    }),
  },
});

/**
 * Returns style overrides for the Avatar component and its Initials
 */
export const getAvatarOverrides = ({
  isActive,
  isHovered,
}: OverrideParams): AvatarProps['overrides'] => ({
  Root: {
    style: ({ $theme }: StyleOverrideProps) => ({
      borderRadius: $theme.spacing.spacingXl,
      backgroundColor: $theme.colors.brandSubtle,
      transition: `background-color ${SIDEBAR_FAST_TRANSITION_DURATION} ${SIDEBAR_TRANSITION_TIMING_FUNCTION_EASE_OUT}, color ${SIDEBAR_FAST_TRANSITION_DURATION} ${SIDEBAR_TRANSITION_TIMING_FUNCTION_EASE_OUT}`,
      ...(isHovered && {
        backgroundColor: $theme.colors.brand,
        color: $theme.colors.textBase,
        ...(isActive && {
          backgroundColor: $theme.colors.brand,
        }),
      }),
      ...(isActive &&
        !isHovered && {
          color: $theme.colors.textBase,
          backgroundColor: $theme.colors.brandSubdued,
        }),
    }),
  },
  Initials: {
    style: ({ $theme }: StyleOverrideProps) => ({
      color: $theme.colors.brandMedium,
      transition: `color ${SIDEBAR_FAST_TRANSITION_DURATION} ${SIDEBAR_TRANSITION_TIMING_FUNCTION_EASE_OUT}`,
      ...((isActive || isHovered) && {
        color: $theme.colors.textBase,
      }),
    }),
  },
});

/**
 * Returns style overrides for the Text component and its collapsed state.
 * When hideTextWhenCollapsed is false, text always uses expanded width (auto).
 */
export const getTextOverrides = ({
  isCollapsed,
  hideTextWhenCollapsed = true,
}: OverrideParams): TextProps['overrides'] => ({
  Block: {
    style: ({ $theme }: StyleOverrideProps) => ({
      margin: `0 ${$theme.spacing.spacingXs} 0 ${$theme.spacing.spacingXs}`,
      color: 'inherit',
      lineHeight: TEXT_LINE_HEIGHT,
      transition: `width ${SIDEBAR_MEDIUM_TRANSITION_DURATION} ${SIDEBAR_TRANSITION_TIMING_FUNCTION_EASE_OUT}, opacity ${SIDEBAR_FAST_TRANSITION_DURATION} ${SIDEBAR_TRANSITION_TIMING_FUNCTION_EASE_OUT}`,
      width: !isCollapsed || !hideTextWhenCollapsed ? 'auto' : '0',
      flex: '1 1 auto',
      minWidth: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }),
  },
});
