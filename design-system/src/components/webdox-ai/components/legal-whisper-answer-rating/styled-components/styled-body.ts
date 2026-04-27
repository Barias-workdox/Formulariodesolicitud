import { themedStyled } from '@themes/index';

export const StyledBody = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  overflowX: 'hidden',
  flex: 1,
  padding: `${$theme.spacing.spacing3xl} ${$theme.spacing.spacingXl}`,
  gap: $theme.spacing.spacingMd,
}));
