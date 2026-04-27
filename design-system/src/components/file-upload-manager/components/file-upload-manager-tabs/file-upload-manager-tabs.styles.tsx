import { themedStyled } from '@themes/utilities';

export const StyledTabLabel = themedStyled('span', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingXs,
  justifyContent: 'space-between',
  width: '100%',
}));
