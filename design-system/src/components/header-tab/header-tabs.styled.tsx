import { themedStyled } from '@themes/utilities';

import type { HeaderTabWrapperProps } from './header-tabs.interfaces';

export const HeaderTabWrapper = themedStyled<'div', HeaderTabWrapperProps>(
  'div',
  ({ $borderRadius, $theme, $isDisabled = false }) => ({
    // only border bottom left and right
    borderTop: `1px solid ${$theme.colors.neutralSubtle}`,
    borderLeft: `1px solid ${$theme.colors.neutralSubtle}`,
    borderRight: `1px solid ${$theme.colors.neutralSubtle}`,
    borderRadius: `${$theme.borders[$borderRadius]} ${$theme.borders[$borderRadius]} 0 0`,
    backgroundColor: $isDisabled ? $theme.colors.neutralWashed : $theme.colors.bgBase,
  }),
);
