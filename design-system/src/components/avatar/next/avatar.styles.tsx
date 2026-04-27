import { themedStyled } from '@themes/utilities';

export const AvatarAnchor = themedStyled('div', ({ $theme }) => ({
  width: 'fit-content',
  display: 'inline-block',
  border: 'none',
  background: 'none',
  padding: 0,
  margin: 0,
  textDecoration: 'none',
  color: 'inherit',
  font: 'inherit',
  borderRadius: '50%',
  ':focus-visible': {
    outline: `2px solid ${$theme.colors.neutralStrong}`,
    outlineOffset: '2px',
  },
}));
