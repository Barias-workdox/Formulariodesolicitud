import { themedStyled } from '@themes/utilities';

import type { SharedProps } from './collapsible-content.interfaces';

export const StyledRoot = themedStyled('div', ({ $theme }) => ({
  backgroundColor: $theme.colors.bgBase,
  borderColor: $theme.colors.neutralSubtle,
  borderStyle: 'solid',
  borderWidth: '1px',
}));

export const StyledHeader = themedStyled<'div', SharedProps>('div', ({ $theme, $isOpen }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  padding: $theme.spacing.spacingXs,
  justifyContent: 'space-between',
  borderBottom: $isOpen ? `1px solid ${$theme.colors.neutralSubtle}` : 'none',
  overflow: 'hidden',
  gap: $theme.spacing.spacingXs,
  backgroundColor: $theme.colors.neutralWashed,
}));

export const StyledActionIcons = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  gap: $theme.spacing.spacing2xs,
}));

export const StyledBody = themedStyled<'div', SharedProps>('div', ({ $height, $isOpen }) => ({
  overflow: 'hidden',
  transition: 'height 0.3s ease-in-out',
  height: $isOpen ? $height : '0px',
}));
