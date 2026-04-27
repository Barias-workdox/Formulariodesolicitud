import {
  SIDEBAR_FAST_TRANSITION_DURATION,
  SIDEBAR_TRANSITION_TIMING_FUNCTION_EASE_OUT,
} from '../../sidebar.constants';

import { COMMON_FONT_WEIGHT_SEMIBOLD } from './sidebar-link.constants';

import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

type StyleParams = {
  isAvatar: boolean;
  isActive: boolean;
  isHovered: boolean;
  isDisabled: boolean;
  isCollapsed: boolean;
};

/**
 * Styles for the SidebarLink component using the useCss pattern
 */
export const styles = {
  rootStyles: (
    theme: DesignSystemTheme,
    { isAvatar, isActive, isHovered, isDisabled, isCollapsed }: StyleParams,
  ): StyleObject => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.colors.neutralSubdued,
    borderRadius: isAvatar
      ? !isCollapsed
        ? `${theme.spacing.spacingXl} ${theme.spacing.spacingXs}`
        : theme.spacing.spacingXl
      : theme.spacing.spacingXs,
    backgroundColor: theme.colors.transparent,
    transition: `background-color ${SIDEBAR_FAST_TRANSITION_DURATION} ${SIDEBAR_TRANSITION_TIMING_FUNCTION_EASE_OUT}, color ${SIDEBAR_FAST_TRANSITION_DURATION} ${SIDEBAR_TRANSITION_TIMING_FUNCTION_EASE_OUT}, width ${SIDEBAR_FAST_TRANSITION_DURATION} ${SIDEBAR_TRANSITION_TIMING_FUNCTION_EASE_OUT}`,
    width: !isCollapsed ? '100%' : 'fit-content',
    ...(isHovered && {
      backgroundColor: theme.colors.neutralBase,
      color: theme.colors.neutralMedium,
      fontWeight: COMMON_FONT_WEIGHT_SEMIBOLD,
    }),
    ...(isActive && {
      fontWeight: COMMON_FONT_WEIGHT_SEMIBOLD,
      backgroundColor: theme.colors.brandWashed,
      color: theme.colors.brandMedium,
      ...(isHovered && {
        backgroundColor: theme.colors.brandSubtle,
        color: theme.colors.brandMedium,
      }),
    }),
    ...(isDisabled && {
      opacity: 0.5,
      pointerEvents: 'none',
    }),
    ':focus-visible': {
      outlineOffset: '-2px',
      outline: `2px solid ${theme.colors.neutral}`,
    },
  }),
  chevronStyles: (theme: DesignSystemTheme): StyleObject => ({
    marginRight: theme.spacing.spacingXs,
  }),
};
