import { themedStyled } from '@themes/utilities';

import type { FooterActionsWrapperProps, FooterWrapperProps } from './footer.interfaces';

export const FooterWrapper = themedStyled<'div', FooterWrapperProps>(
  'div',
  ({ $borderRadius, $theme, $padding = 'spacingSm', $gap = 'spacingXs', $isDisabled = false }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: $theme.spacing.spacingXs,
    gap: $theme.spacing.spacingSm,
    // only border bottom left and right
    borderBottom: `1px solid ${$theme.colors.neutralSubtle}`,
    borderLeft: `1px solid ${$theme.colors.neutralSubtle}`,
    borderRight: `1px solid ${$theme.colors.neutralSubtle}`,
    borderRadius: `0 0 ${$theme.borders[$borderRadius]} ${$theme.borders[$borderRadius]}`,
    backgroundColor: $isDisabled ? $theme.colors.neutralWashed : $theme.colors.bgBase,
    [$theme.mediaQuery.extrasmall]: {
      gap: $theme.spacing[$gap],
      padding: $theme.spacing[$padding],
    },
  }),
);

export const FooterActionsWrapper = themedStyled<'div', FooterActionsWrapperProps>(
  'div',
  ({ $theme, $gap = 'spacingXs' }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    gap: $theme.spacing.spacingXs,
    [$theme.mediaQuery.extrasmall]: {
      gap: $theme.spacing[$gap],
      flexDirection: 'row',
    },
  }),
);
