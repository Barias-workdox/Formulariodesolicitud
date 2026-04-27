import { themedStyled } from '@themes/utilities';

export const StyledContainer = themedStyled<'div', { $withBorder?: boolean }>(
  'div',
  ({ $theme, $withBorder }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: $theme.spacing.spacingXs,
    gap: $theme.spacing.spacingXs,
    width: 'fit-content',
    border: $withBorder ? `1px solid ${$theme.colors.neutralSubtle}` : 'none',
  }),
);

export const StyledWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: $theme.spacing.spacingXs,
  border: `1px solid ${$theme.colors.neutralSubtle}`,
}));

export const StyledButtonsContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  gap: $theme.spacing.spacingXs,
}));
