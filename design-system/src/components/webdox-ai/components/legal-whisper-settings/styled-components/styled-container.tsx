import { themedStyled } from '@themes/index';

export const StyledContainer = themedStyled('div', () => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
}));
