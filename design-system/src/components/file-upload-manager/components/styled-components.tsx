import { themedStyled } from '@themes/utilities';

export const StyledFooterContainer = themedStyled('div', ({ $theme }) => ({
  backgroundColor: $theme.colors.brandWashed,
  position: 'sticky',
  bottom: 0,
  display: 'flex',
  justifyContent: 'flex-end',
  borderTop: `1px solid ${$theme.colors.neutralSubtle}`,
}));
