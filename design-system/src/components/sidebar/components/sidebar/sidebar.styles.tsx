import {
  SIDEBAR_COLLAPSED_WIDTH,
  SIDEBAR_EXPANDED_WIDTH,
  SIDEBAR_TRANSITION_DURATION,
  SIDEBAR_TRANSITION_PROPERTY,
  SIDEBAR_TRANSITION_TIMING_FUNCTION,
} from '@components/sidebar/sidebar.constants';
import { themedStyled } from '@themes/utilities';

export const StyledSidebar = themedStyled<
  'aside',
  {
    $isCollapsed?: boolean;
  }
>('aside', ({ $theme, $isCollapsed }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: `${$isCollapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_EXPANDED_WIDTH}px`,
  transitionProperty: SIDEBAR_TRANSITION_PROPERTY,
  transitionDuration: SIDEBAR_TRANSITION_DURATION,
  transitionTimingFunction: SIDEBAR_TRANSITION_TIMING_FUNCTION,
  overflow: 'hidden',
  boxSizing: 'border-box',
  willChange: 'width',
  backgroundColor: $theme.colors.bgBase,
  paddingTop: $theme.spacing.spacingMd,
  paddingBottom: $theme.spacing.spacingMd,
  paddingLeft: $theme.spacing.spacingMd,
}));

export const StyledSidebarFooter = themedStyled<
  'div',
  {
    $isCollapsed?: boolean;
    $isScrollable?: boolean;
  }
>('div', ({ $theme, $isCollapsed, $isScrollable }) => ({
  display: 'flex',
  justifyContent: 'end',
  flexShrink: 0,
  flexGrow: 1,
  overflowY: 'auto',
  overflowX: 'hidden',
  paddingTop: $isCollapsed ? $theme.spacing.spacingXs : $theme.spacing.spacingMd,
  gap: $isCollapsed ? $theme.spacing.spacingXs : $theme.spacing.spacingMd,
  flexDirection: 'column',
  boxShadow: $isScrollable ? $theme.elevations.sm.up : 'none',
}));

export const StyledSidebarContent = themedStyled<
  'div',
  {
    $isCollapsed?: boolean;
  }
>('div', ({ $theme }) => ({
  flexGrow: 1,
  overflowY: 'auto',
  height: '100%',
  overflowX: 'hidden',
  gap: $theme.spacing.spacingMd,
  display: 'flex',
  flexDirection: 'column',
  outline: 'none',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
}));
