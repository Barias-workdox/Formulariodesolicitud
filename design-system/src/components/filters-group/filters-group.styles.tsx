import { COMMON_HEIGHT_32 } from '@constants/common.constants';
import { getCustomScrollBarStyles } from '@themes/custom-scroll-bar';
import { themedStyled } from '@themes/utilities';

export const StyledRoot = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  overflow: 'hidden',
  gap: $theme.spacing.spacingXs,
  alignItems: 'flex-start',
}));

export const StyledFiltersWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  gap: $theme.spacing.spacingXs,
  overflowX: 'auto',
  ...getCustomScrollBarStyles($theme),
}));

export const StyledExtrasWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  gap: $theme.spacing.spacingXs,
  alignItems: 'center',
  height: COMMON_HEIGHT_32,
}));
