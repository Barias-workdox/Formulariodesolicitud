import { themedStyled } from '@themes/utilities';

export const StyledSidebarHeader = themedStyled<
  'div',
  {
    $isCollapsed?: boolean;
  }
>('div', ({ $theme, $isCollapsed }) => ({
  display: 'flex',
  alignItems: $isCollapsed ? 'flex-start' : 'center',
  justifyContent: $isCollapsed ? 'center' : 'space-between',
  flexDirection: $isCollapsed ? 'column' : 'row',
  flexShrink: 0,
  gap: $theme.spacing.spacingMd,
  paddingBottom: $theme.spacing.spacingMd,
}));
