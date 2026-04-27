import { themedStyled } from '@themes/utilities';

export const StyledWrapper = themedStyled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  flexDirection: 'column',
  maxWidth: '300px',
  textAlign: 'center',
  margin: 'auto',
});

export const StyledLink = themedStyled('a', {
  textDecoration: 'none',
});
