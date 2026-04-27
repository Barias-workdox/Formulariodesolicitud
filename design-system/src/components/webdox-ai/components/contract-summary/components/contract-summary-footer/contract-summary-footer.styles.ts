import { themedStyled } from '@themes/utilities';

export const StyledActionButtonsContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingXs,
}));

export const StyledContractSummaryFooter = themedStyled('section', () => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
