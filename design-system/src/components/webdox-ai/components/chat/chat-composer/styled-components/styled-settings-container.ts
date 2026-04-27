import { themedStyled } from '@themes/utilities';

export const StyledSettingsContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  width: '100%',
  gap: $theme.spacing.spacingXs,
}));
