import { themedStyled } from '@themes/utilities';

export const StyledRadioDescriptionContainer = themedStyled('span', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingXs,
  justifyContent: 'space-between',
}));
