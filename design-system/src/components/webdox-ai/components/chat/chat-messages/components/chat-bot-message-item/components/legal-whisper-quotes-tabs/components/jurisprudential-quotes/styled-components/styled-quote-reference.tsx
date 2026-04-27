import { themedStyled } from '@themes/utilities';

export const StyledQuoteReference = themedStyled('div', ({ $theme }) => ({
  backgroundColor: $theme.colors.brandWashed,
  padding: $theme.spacing.spacingXs,
  borderRadius: $theme.spacing.spacing2xs,
}));
