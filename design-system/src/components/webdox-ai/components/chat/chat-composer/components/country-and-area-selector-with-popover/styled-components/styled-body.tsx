import { themedStyled } from '@themes/index';

export const StyledBody = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: $theme.spacing.spacingXs,
  borderLeft: `1px solid ${$theme.colors.neutralSubtle}`,
  borderRight: `1px solid ${$theme.colors.neutralSubtle}`,
}));
