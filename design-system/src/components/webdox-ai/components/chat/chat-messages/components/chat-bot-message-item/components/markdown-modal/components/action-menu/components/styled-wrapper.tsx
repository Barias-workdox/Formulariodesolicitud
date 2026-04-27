import { themedStyled } from '@themes/utilities';

/** A styled div to wrap table actions. */
export const StyledWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: $theme.spacing.spacingXs,
}));
