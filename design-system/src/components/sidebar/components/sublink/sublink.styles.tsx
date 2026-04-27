import { themedStyled } from '@themes/utilities';

import type { DesignSystemTheme } from '@themes/theme.interfaces';

const MIN_WIDTH = '240px';

export const Root = themedStyled<'div', { $top: number; $left: number }>(
  'div',
  ({ $theme, $top, $left }: { $theme: DesignSystemTheme; $top: number; $left: number }) => ({
    position: 'fixed',
    top: `${$top}px`,
    left: `${$left}px`,
    border: `1px solid ${$theme.colors.neutralSubtle}`,
    borderRadius: $theme.spacing.spacing2xs,
    boxShadow: $theme.elevations.md.down,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: $theme.colors.bgBase,
    zIndex: 1000,
    minWidth: MIN_WIDTH,
  }),
);

export const Header = themedStyled('div', ({ $theme }: { $theme: DesignSystemTheme }) => ({
  padding: $theme.spacing.spacingXs,
  borderBottom: `1px solid ${$theme.colors.neutralSubtle}`,
}));

export const MenuItemWrapper = themedStyled('div', () => ({
  display: 'contents',
}));
