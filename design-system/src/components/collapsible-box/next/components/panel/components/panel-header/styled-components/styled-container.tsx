import { themedStyled } from '@themes/utilities';

export const StyledContainer = themedStyled<
  'div',
  { $expanded: boolean; $neutralWashedHeader: boolean; $isOverlay: boolean }
>('div', ({ $theme, $expanded, $neutralWashedHeader, $isOverlay }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  padding: $theme.spacing.spacingXs,
  justifyContent: 'space-between',
  borderBottom: $expanded ? `1px solid ${$theme.colors.neutralSubtle}` : 'none',
  overflow: 'hidden',
  gap: $theme.spacing.spacingXs,
  backgroundColor: $neutralWashedHeader ? $theme.colors.neutralWashed : $theme.colors.bgBase,
  ...($isOverlay && {
    border: `1px dashed ${$theme.colors.brand}`,
    backgroundColor: $theme.colors.brandWashed,
  }),
}));
