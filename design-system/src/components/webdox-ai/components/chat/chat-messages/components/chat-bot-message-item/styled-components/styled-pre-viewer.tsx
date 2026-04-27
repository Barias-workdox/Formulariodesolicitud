import { themedStyled } from '@themes/utilities';

/** A styled pre with wrapped text */
export const StyledPreViewer = themedStyled('pre', ({ $theme }) => ({
  ...$theme.typography.ParagraphSmall,
  backgroundColor: $theme.colors.neutralWashed,
  padding: $theme.spacing.spacingSm,
  margin: 0,
  ':has(*) code': {
    border: 'none',
    backgroundColor: 'transparent',
    padding: 0,
    color: $theme.colors.neutralSubdued,
  },
}));
