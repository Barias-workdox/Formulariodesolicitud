import { Link } from 'react-router-dom';

import { COMMON_HEIGHT_36, COMMON_HEIGHT_56, type CommonHeight } from '@constants/common.constants';
import { themedStyled } from '@themes/utilities';

import type { MenuItemSize } from '@components/navigation-menu/navigation-menu.interfaces';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

/** Returns the styles for menu items based on their size. */
const getMenuItemStylesBySize = ({
  $theme,
}: {
  $theme: DesignSystemTheme;
}): Record<MenuItemSize, Pick<StyleObject, 'height' | 'padding'>> => ({
  default: {
    height: COMMON_HEIGHT_36,
    padding: `0 ${$theme.spacing.spacingXs}`,
  },
  large: {
    height: COMMON_HEIGHT_56,
    padding: `0 ${$theme.spacing.spacingXl}`,
  },
});

export const menuItemHeightBySize: Record<MenuItemSize, CommonHeight> = {
  default: '36px',
  large: '56px',
};

export const menuItemPaddingBySize: Record<MenuItemSize, string> = {
  default: '36px',
  large: '56px',
};

/**
 * Returns the styles for the focus state of a menu item.
 */
const getFocusStyles = (theme: DesignSystemTheme): StyleObject => ({
  outline: `2px solid ${theme.colors.neutralStrong}`,
  outlineOffset: '-2px',
  borderRadius: theme.borders.borderSm,
});

export const StyledLink = themedStyled<
  typeof Link,
  {
    $disabled: boolean;
    $isFocused: boolean;
    $size: MenuItemSize;
  }
>(Link, ({ $theme, $isFocused, $size, $disabled }) => {
  const { height, padding } = getMenuItemStylesBySize({ $theme })[$size];

  return {
    height,
    padding,
    display: 'flex',
    alignItems: 'center',
    cursor: $disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    boxSizing: 'border-box',
    outline: 'none',
    ...($isFocused && {
      ...getFocusStyles($theme),
    }),
    ...($disabled && { backgroundColor: $theme.colors.bgBase }),
    ...(!$disabled && {
      ':hover': { backgroundColor: $theme.colors.brandWashed },
    }),
  };
});
