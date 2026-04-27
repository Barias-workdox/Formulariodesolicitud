import { SEARCH_MAX_WIDTH, SEARCH_MIN_WIDTH } from '@components/page-header/page-header.constants';
import { themedStyled } from '@themes/utilities';

type StyledWrapperParams = {
  $isOpen?: boolean;
};

export const DesktopStyledWrapper = themedStyled<'div', StyledWrapperParams>(
  'div',
  ({ $theme, $isOpen }) => ({
    width: '100%',
    maxWidth: $isOpen ? SEARCH_MAX_WIDTH : SEARCH_MIN_WIDTH,
    display: 'none',
    transition: 'max-width 0.25s ease-in-out',

    [$theme.mediaQuery['large']]: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
);

export const MobileStyledWrapper = themedStyled<'div', StyledWrapperParams>(
  'div',
  ({ $theme }) => ({
    display: 'flex',

    [$theme.mediaQuery['large']]: {
      display: 'none',
    },
  }),
);
