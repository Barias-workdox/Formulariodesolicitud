import { themedStyled } from '@themes/index';

export const StyledContainer = themedStyled('div', () => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
}));
