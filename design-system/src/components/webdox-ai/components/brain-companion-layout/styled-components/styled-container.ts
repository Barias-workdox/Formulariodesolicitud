import { themedStyled } from '@themes/index';

export const StyledContainer = themedStyled('div', () => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  overflow: 'hidden',
  height: '100%',
}));
