import { COMMON_HEIGHT_36, COMMON_HEIGHT_44 } from '@constants/common.constants';
import { themedStyled } from '@themes/utilities';

import type { ListItemSize, StyledRootProps } from './list-item.interfaces';
import type { TextVariant } from '@components/text';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const propertiesBySize: Record<
  ListItemSize,
  { height: string; label: TextVariant; details: TextVariant }
> = {
  md: {
    label: 'body',
    details: 'bodySmall',
    height: COMMON_HEIGHT_44,
  },
  sm: {
    label: 'body',
    details: 'bodySmall',
    height: COMMON_HEIGHT_36,
  },
};

export const styles = {
  textDetails: ({ theme, $isClickable, $isHovered, $disabled, $active }): StyleObject => ({
    color:
      $active && !$isHovered
        ? theme.colors.brandMedium
        : $isHovered && $isClickable && !$disabled
          ? theme?.colors.neutralSubdued
          : theme?.colors.neutralDepressed,
  }),
  labelContainer: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.spacingSm,
  }),
};

/** Function to get list item common styles. */
const getRootCommonStyles = ({
  $theme,
  $disabled,
  $size = 'md',
  $withBorderBottom,
}: StyledRootProps): StyleObject => {
  const verticalPadding = $size === 'md' ? $theme.spacing.spacingXs : $theme.spacing.spacing2xs;

  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: $theme.spacing.spacingXs,
    color: $theme.colors.neutralSubdued,
    padding: `${verticalPadding} ${$theme.spacing.spacingMd}`,
    backgroundColor: 'transparent',
    // Transparent border to be replaced by focused border in focus state.
    border: '1px solid transparent',
    borderBottom: `1px solid ${$withBorderBottom ? $theme.colors.neutralSubtle : 'transparent'}`,
    outline: 'none',
    minHeight: propertiesBySize[$size].height,
    boxSizing: 'border-box',

    ...($disabled && {
      color: $theme.colors.neutralDepressed,
      backgroundColor: $theme.colors.neutralSubtle,
    }),
  };
};

export const StyledListItemRoot = themedStyled<'li', StyledRootProps>('li', getRootCommonStyles);

/** Return de styles for active state */
const getActiveStyles = ({ $theme }: StyledRootProps): StyleObject => ({
  color: `${$theme.colors.brandMedium} !important`,
  backgroundColor: `${$theme.colors.brandSubtle} !important`,
});

export const StyledButtonRoot = themedStyled<'button', StyledRootProps>(
  'button',
  ({ $theme, $active, $disabled, $size, $withBorderBottom }) => ({
    width: '100%',
    cursor: 'not-allowed',
    ...getRootCommonStyles({ $theme, $disabled, $size, $withBorderBottom }),
    ...(!$disabled && {
      ...($active ? getActiveStyles({ $theme }) : {}),
      cursor: 'pointer',
      ':hover': {
        color: $theme.colors.neutral,
        backgroundColor: $theme.colors.neutralWashed,
      },
      ':focus': {
        border: `1px solid ${$theme.colors.brandSubdued}`,
      },
      ':active': getActiveStyles({ $theme }),
    }),
  }),
);

export const StyledListItemInner = themedStyled<'div', StyledRootProps>('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: $theme.spacing.spacingXs,
  overflow: 'hidden',
  flex: 1,
}));

export const StyledListItemInfo = themedStyled<'div', StyledRootProps>('div', () => ({
  flex: 1,
  overflow: 'hidden',
}));

export const StyledListItemIconWrap = themedStyled<'div', StyledRootProps>('div', () => ({
  display: 'grid',
  alignContent: 'center',
  flexShrink: 0,
}));

export const StyledListItemIconInner = themedStyled<'div', StyledRootProps>(
  'div',
  ({ $theme }) => ({
    display: 'flex',
    alignItems: 'center',
    columnGap: $theme.spacing.spacingXs,
  }),
);
