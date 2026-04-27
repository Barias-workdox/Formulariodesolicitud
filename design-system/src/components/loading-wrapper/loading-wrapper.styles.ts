import { themedStyled } from '@themes/utilities';

export const StyledContainer = themedStyled<'div', { $overrides: object }>(
  'div',
  ({ $theme, $overrides }) => ({
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    ...($theme?.spacing ? { gap: $theme.spacing.spacingXs } : {}),
    ...($overrides || {}),
  }),
);

export const StyledSpinnerContainer = themedStyled<'div', { $overrides: object }>(
  'div',
  ({ $overrides }) => ({
    ...($overrides || {}),
  }),
);
