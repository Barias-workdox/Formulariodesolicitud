import { themedStyled } from '@themes/index';

export const StyledSuccessMessageContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: $theme.spacing.spacingSm,
}));
