import { themedStyled } from '@themes/utilities';

/** A styled div to wrap a group of buttons. */
export const StyledButtonsContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingXs,
}));
