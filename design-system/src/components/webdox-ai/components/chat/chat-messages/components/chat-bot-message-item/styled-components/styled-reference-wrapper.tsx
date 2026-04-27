import { themedStyled } from '@themes/utilities';

/** An special text with unique styles used by the message's references  */
export const StyledReferenceWrapper = themedStyled('span', ({ $theme }) => ({
  background: $theme.colors.bgBase,
  color: $theme.colors.brand,
  cursor: 'pointer',
  padding: $theme.spacing.spacing2xs,
  width: 'max-content',
  ...$theme.typography.ParagraphSmall,
}));
