import { themedStyled } from '@themes/utilities';

export const StyledDragHandlerContainer = themedStyled('button', ({ $theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: `${$theme.spacing.spacing2xs}`,
  border: 'none',
  outline: 'none',
  backgroundColor: $theme.colors.bgBase,

  ':hover': {
    cursor: 'pointer',
    backgroundColor: $theme.colors.neutralWashed,
  },

  ':active': {
    cursor: 'default',
    backgroundColor: $theme.colors.neutralSubtle,
  },
}));
