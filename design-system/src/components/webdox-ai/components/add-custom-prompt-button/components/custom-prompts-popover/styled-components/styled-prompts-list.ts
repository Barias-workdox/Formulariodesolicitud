import { themedStyled } from '@themes/utilities';

export const StyledPromptsList = themedStyled('ul', ({ $theme }) => ({
  listStyle: 'none',
  margin: '0',
  padding: '0',
  background: $theme.colors.bgBase,
}));
