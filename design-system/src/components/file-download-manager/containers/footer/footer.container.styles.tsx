import { themedStyled } from '@themes/utilities';

export const StyledFooterContainer = themedStyled('div', ({ $theme }) => ({
  backgroundColor: $theme.colors.brandBase,
  position: 'sticky',
  bottom: 0,
  display: 'flex',
  justifyContent: 'flex-end',
  borderTop: `1px solid ${$theme.colors.neutralSubtle}`,
  borderRadius: `0 0 ${$theme.borders.borderSm} ${$theme.borders.borderSm}`,
}));
