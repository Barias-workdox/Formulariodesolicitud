import { themedStyled } from '@themes/index';

export const StyledControlsWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.spacing.spacingMd,
  padding: `${$theme.spacing.spacingMd} ${$theme.spacing.spacingMd} ${$theme.spacing.spacingXl}`,
}));
