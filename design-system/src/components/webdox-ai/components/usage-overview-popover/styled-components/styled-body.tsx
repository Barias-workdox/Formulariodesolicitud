import { themedStyled } from '@themes/index';

export const StyledBody = themedStyled<'div', { $showNotification: boolean }>(
  'div',
  ({ $theme, $showNotification }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: $showNotification ? $theme.spacing.spacingLg : $theme.spacing.spacingMd,
    marginBottom: $theme.spacing.spacingMd,
  }),
);
