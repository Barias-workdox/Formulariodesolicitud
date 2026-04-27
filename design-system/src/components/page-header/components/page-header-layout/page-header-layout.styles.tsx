import { themedStyled } from '@themes/utilities';

export const StyledRoot = themedStyled<'header', { $showBorder: boolean }>(
  'header',
  ({ $theme, $showBorder }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: $theme.spacing.spacingMd,
    backgroundColor: $theme.colors.bgBase,
    ...($showBorder && {
      borderBottom: `1px solid ${$theme.colors.neutralSubtle}`,
      paddingBottom: $theme.spacing.spacingMd,
    }),
  }),
);

export const StyledTitleWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingMd,
}));

export const StyledLeftColumn = themedStyled('div', ({ $theme }) => ({
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingXs,
}));
