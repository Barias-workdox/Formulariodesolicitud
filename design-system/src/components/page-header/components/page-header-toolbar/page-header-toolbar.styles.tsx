import { COMMON_HEIGHT_32 } from '@constants/common.constants';
import { themedStyled } from '@themes/utilities';

export const StyledToolbar = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  overflow: 'hidden',
  flexWrap: 'wrap',
  gap: $theme.spacing.spacingXs,

  [$theme.mediaQuery.medium]: {
    flexWrap: 'nowrap',
  },
}));

export const StyledFiltersWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'none',
  flex: 1,
  overflow: 'hidden',
  alignItems: 'center',

  [$theme.mediaQuery.medium]: {
    display: 'flex',
  },
}));

export const StyledOptionsWrapper = themedStyled('div', ({ $theme }) => ({
  gap: $theme.spacing.spacingXs,
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  flexShrink: 0,
}));

export const StyledItemsCounterWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: COMMON_HEIGHT_32,
  padding: `0 ${$theme.spacing.spacingMd}`,
  backgroundColor: $theme.colors.neutralBase || $theme.colors.neutralWashed,
  borderRadius: $theme.spacing.spacing2xs,
  flexShrink: 0,
}));

export const StyledMobileFilterWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  overflow: 'hidden',

  [$theme.mediaQuery.medium]: {
    display: 'none',
  },
}));
