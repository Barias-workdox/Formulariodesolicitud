import { themedStyled } from '@themes/utilities';

import type { StyleObject } from 'styletron-react';

export const StyledActionsContainer = themedStyled(
  'div',
  ({ $theme }): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    gap: $theme.spacing.spacingXs,
  }),
);
