import { themedStyled } from '@themes/utilities';

export const StyledContainer = themedStyled<'div', { $fullHeight?: boolean }>(
  'div',
  ({ $theme, $fullHeight }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: $theme.spacing.spacingXs,
    paddingBottom: $theme.spacing.spacing3xl,

    ...($fullHeight && {
      height: '100%',
    }),
  }),
);
