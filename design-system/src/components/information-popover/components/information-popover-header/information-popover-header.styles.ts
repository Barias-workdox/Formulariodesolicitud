import { themedStyled } from '@themes/utilities';

/** Styled div to be used as the root component for the Header. */
export const StyledRoot = themedStyled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
