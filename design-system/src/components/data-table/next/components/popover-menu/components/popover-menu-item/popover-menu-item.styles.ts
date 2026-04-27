import { themedStyled } from '@themes/utilities';

export const StyledPopoverMenuItemButton = themedStyled('button', ({ $theme }) => ({
  ...$theme.typography.ParagraphSmall,
  display: 'flex',
  alignItems: 'center',
  height: 'auto',
  gap: $theme.spacing.spacingXs,
  textAlign: 'left',
  cursor: 'pointer',
  width: '100%',
  border: 'none',
  backgroundColor: 'transparent',
  outline: 'none',
  lineHeight: 1,
  padding: `${$theme.spacing.spacingSm} ${$theme.spacing.spacingMd}`,
  color: $theme.colors.neutralSubdued,
  ':hover': {
    backgroundColor: $theme.colors.neutralBase,
    color: $theme.colors.neutralMedium,
  },
  ':disabled': {
    color: $theme.colors.neutralDepressed,
    cursor: 'not-allowed',
  },
}));
