import { themedStyled } from '@themes/utilities';

export const StyledListItems = themedStyled('ul', ({ $theme }) => ({
  paddingLeft: $theme.spacing.spacingXl,
  listStyleType: 'disc',
}));
