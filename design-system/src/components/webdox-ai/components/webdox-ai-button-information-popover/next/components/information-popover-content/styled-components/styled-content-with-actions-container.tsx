import { themedStyled } from '@themes/utilities';

import type { StyleObject } from 'styletron-react';

export const StyledContentWithActionsContainer = themedStyled(
  'div',
  ({ $theme }): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    gap: $theme.spacing.spacingMd,
  }),
);
