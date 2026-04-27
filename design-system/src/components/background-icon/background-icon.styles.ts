import { themedStyled } from '@themes/utilities';

import type { StyledRootProps } from './background-icon.interfaces';

/**
 * Styled component used to create the root element of the BackgroundIcon component.
 */
export const StyledRoot = themedStyled<'div', StyledRootProps>(
  'div',
  ({ $backgroundColor, $disabled, $shape, $size, $theme, $isClickable }) => ({
    background: $disabled ? $theme.colors.neutralSubtle : $theme.colors[$backgroundColor],
    padding: 0,
    width: $size,
    height: $size,
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: $theme.borders.borderSm,
    ...($shape === 'round' && {
      borderRadius: '50%',
    }),
    ...($isClickable &&
      !$disabled && {
        cursor: 'pointer',
      }),
  }),
);
