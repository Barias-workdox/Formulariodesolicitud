import { themedStyled } from '@themes/utilities';

export const StyledAddons = themedStyled('div', ({ $theme }) => ({
  padding: `${$theme.spacing.spacingMd} 0`,
  boxSizing: 'content-box',
}));
