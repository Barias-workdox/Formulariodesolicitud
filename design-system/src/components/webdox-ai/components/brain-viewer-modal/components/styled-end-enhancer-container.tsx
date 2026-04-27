import { themedStyled } from '@themes/utilities';

/** A styled div to wrap a modal header end enhancer. */
export const StyledEndEnhancerContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingMd,
}));
