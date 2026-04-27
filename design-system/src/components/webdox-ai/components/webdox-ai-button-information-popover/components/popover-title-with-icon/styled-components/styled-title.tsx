import { themedStyled } from '@themes/utilities';

import type { StyleObject } from 'styletron-react';

/** Styled component to wrap the popover title. */
export const StyledTitle = themedStyled(
  'span',
  ({ $theme }): StyleObject => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: $theme.spacing.spacingXs,
  }),
);
