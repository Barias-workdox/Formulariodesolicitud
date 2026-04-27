import { themedStyled } from '@themes/utilities';

import type { LoadingWrapperOverlayedProps } from './loading-wrapper-overlayed';

type StyleOptions = Pick<LoadingWrapperOverlayedProps, '$backgroundColor' | '$opacity'>;

export const StyledContainer = themedStyled<'div', StyleOptions>(
  'div',
  ({ $theme, $backgroundColor, $opacity }) => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    inset: 0,
    '::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      opacity: $opacity,
      backgroundColor: $backgroundColor || $theme.colors.bgBase,
    },
  }),
);

export const StyledRelativeContainer = themedStyled('div', {
  position: 'relative',
});

export const StyledSpinnerContainer = themedStyled('span', () => ({
  zIndex: 1,
  height: 'auto',
}));
