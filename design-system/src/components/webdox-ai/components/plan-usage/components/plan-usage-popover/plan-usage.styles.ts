import { themedStyled } from '@themes/utilities';

export const StyledPlanUsageContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '420px',
  padding: $theme.spacing.spacingSm,
  gap: $theme.spacing.spacingSm,
}));

export const StyledPlanUsageHeaderIcon = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  background: $theme.colors.positiveSubtle,
  borderRadius: $theme.borders.borderSm,
  height: '32px',
  width: '32px',
}));

export const StyledPlanUsageCloseButton = themedStyled('div', () => ({
  marginLeft: 'auto',
}));

export const StyledPlanUsageHeader = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: $theme.spacing.spacingSm,
}));

export const StyledPlanUsageTitle = themedStyled('div', () => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const StyledPlanUsageContent = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.spacing.spacingSm,
}));

export const StyledPlanUsageAction = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderTop: `1px solid ${$theme.colors.neutralSubtle}`,
  padding: `${$theme.spacing.spacingMd} 0`,
}));
