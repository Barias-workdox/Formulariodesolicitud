import { themedStyled } from '@themes/utilities';

/**
 * This component is used to display a title or header at the top of a popover menu.
 * It can contain any content, such as text or other React components, as its children.
 */
export const PopoverMenuTitle = themedStyled('div', ({ $theme }) => ({
  ...$theme.typography.ParagraphSmall,
  borderBottom: `1px solid ${$theme.colors.neutralSubtle}`,
  padding: `${$theme.spacing.spacingSm} ${$theme.spacing.spacingMd}`,
  color: $theme.colors.neutral,
  fontWeight: 500,
  lineHeight: 1,
}));
