import { themedStyled } from '@themes/index';

export const StyledRadioDescriptionWithTextarea = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.spacing.spacingXs,
}));
