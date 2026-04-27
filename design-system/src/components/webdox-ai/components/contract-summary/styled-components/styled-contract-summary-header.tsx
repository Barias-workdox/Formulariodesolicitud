import { themedStyled } from '@themes/utilities';

export const StyledContractSummaryHeader = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: $theme.spacing.spacingXs,
}));
