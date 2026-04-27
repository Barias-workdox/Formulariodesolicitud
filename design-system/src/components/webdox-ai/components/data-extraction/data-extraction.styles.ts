import { themedStyled } from '@themes/utilities';

export const StyledDataExtractionContainer = themedStyled('div', ({ $theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: `${$theme.spacing.spacingSm}`,
}));
