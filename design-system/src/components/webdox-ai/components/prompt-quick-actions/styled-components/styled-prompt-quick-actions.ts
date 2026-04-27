import { themedStyled } from '@themes/utilities';

import {
  QUICK_ACTION_LIST_CONTAINER_HEIGHT,
  QUICK_ACTION_LIST_ITEM_HEIGHT,
  QUICK_ACTION_LIST_CONTAINER_WIDTH,
  QUICK_ACTION_LIST_ITEM_TOOLTIP_WIDTH,
  QUICK_ACTION_MENU_WIDTH,
} from '../prompt-quick-actions.constants';

export const StyledQuickActionsMenu = themedStyled('div', ({ $theme }) => {
  return {
    background: $theme.colors.bgBase,
    border: `1px solid ${$theme.colors.neutralSubtle}`,
    borderRadius: $theme.borders.radius200,
    boxShadow: $theme.lighting.shadow400,
    minWidth: QUICK_ACTION_MENU_WIDTH,
    overflow: 'hidden',
    fontFamily: $theme.typography.font300.fontFamily,
  };
});

export const StyledHeader = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${$theme.spacing.spacingMd} ${$theme.spacing.spacingSm} ${$theme.spacing.spacingSm} ${$theme.spacing.spacingSm}`,
  borderBottom: `1px solid ${$theme.colors.neutralSubtle}`,
}));

export const StyledHeaderTitle = themedStyled('span', ({ $theme }) => ({
  color: $theme.colors.neutralSubdued,
  fontSize: $theme.typography.font100.fontSize,
  fontWeight: 300,
  letterSpacing: '1px',
  textTransform: 'uppercase',
}));

export const StyledHeaderCount = themedStyled('span', ({ $theme }) => ({
  color: $theme.colors.brand,
  fontSize: $theme.typography.font100.fontSize,
  fontWeight: 300,
  letterSpacing: '1px',
  textTransform: 'uppercase',
}));

export const StyledFooter = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${$theme.spacing.spacingXs} ${$theme.spacing.spacingMd}`,
  backgroundColor: $theme.colors.neutralWashed,
  borderTop: `1px solid ${$theme.colors.neutralSubtle}`,
  fontSize: $theme.typography.ParagraphSmall.fontSize,
  color: $theme.colors.neutralSubdued,
}));

export const StyledFooterItem = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: $theme.spacing.spacing2xs,
}));

export const StyledQuickActionsList = themedStyled('div', () => ({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: QUICK_ACTION_LIST_CONTAINER_HEIGHT,
  width: QUICK_ACTION_LIST_CONTAINER_WIDTH,
  overflowY: 'auto',
  scrollbarWidth: 'thin',
}));

export const StyledQuickActionsItem = themedStyled<'div', { $isActive?: boolean }>(
  'div',
  ({ $theme, $isActive }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: `${$theme.spacing.spacingXs}`,
    minHeight: QUICK_ACTION_LIST_ITEM_HEIGHT,
    padding: `${$theme.spacing.spacingXs} ${$theme.spacing.spacingMd}`,
    cursor: 'pointer',
    backgroundColor: $isActive ? $theme.colors.neutralBase : 'transparent',
    color: $theme.colors.neutral,
    transition: 'background-color 0.2s ease',
  }),
);

export const StyledTooltip = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.spacing.spacingSm,
  width: QUICK_ACTION_LIST_ITEM_TOOLTIP_WIDTH,
  padding: `${$theme.spacing.spacing2xs}`,
}));
