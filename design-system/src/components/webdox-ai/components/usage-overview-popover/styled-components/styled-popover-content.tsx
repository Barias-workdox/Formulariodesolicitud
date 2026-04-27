import { themedStyled } from '@themes/index';

export const StyledPopoverContent = themedStyled('div', ({ $theme }) => ({
  width: '100%',
  maxWidth: '420px',
  boxSizing: 'border-box',
  padding: $theme.spacing.spacingXs,
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.spacing.spacingXs,
}));
