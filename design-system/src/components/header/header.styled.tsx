import { themedStyled } from '@themes/utilities';

import type { HeaderSectionProps, HeaderWrapperProps } from './header.interfaces';

export const HeaderWrapper = themedStyled<'div', HeaderWrapperProps>(
  'div',
  ({ $borderRadius, $theme, $padding = 'spacingSm', $gap = 'spacingXs', $isDisabled = false }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: $theme.spacing[$padding],
    gap: $theme.spacing[$gap],
    // only border top left and right
    borderTop: `1px solid ${$theme.colors.neutralSubtle}`,
    borderLeft: `1px solid ${$theme.colors.neutralSubtle}`,
    borderRight: `1px solid ${$theme.colors.neutralSubtle}`,
    borderRadius: `${$theme.borders[$borderRadius]} ${$theme.borders[$borderRadius]} 0 0 `,
    backgroundColor: $isDisabled ? $theme.colors.neutralWashed : $theme.colors.bgBase,
  }),
);

export const HeaderSection = themedStyled<'div', HeaderSectionProps>(
  'div',
  ({ $theme, $gap = 'spacingXs' }) => ({
    alignItems: 'center',
    display: 'flex',
    gap: $theme.spacing[$gap],
  }),
);
