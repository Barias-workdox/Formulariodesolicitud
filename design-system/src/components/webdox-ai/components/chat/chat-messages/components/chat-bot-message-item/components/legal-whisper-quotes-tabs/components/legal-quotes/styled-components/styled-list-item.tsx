import { themedStyled } from '@themes/utilities';

export const StyledListItem = themedStyled('li', ({ $theme }) => ({
  color: $theme.colors.neutralSubdued,
}));
