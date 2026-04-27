import { themedStyled } from '@themes/utilities';

export const MultipleAvatarsRoot = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacing2xs,
}));
