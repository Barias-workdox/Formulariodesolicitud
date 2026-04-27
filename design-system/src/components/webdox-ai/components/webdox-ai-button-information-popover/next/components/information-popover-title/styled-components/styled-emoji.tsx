import { themedStyled } from '@themes/utilities';

import type { StyleObject } from 'styletron-react';

export const StyledEmoji = themedStyled(
  'span',
  ({ $theme }): StyleObject => ({
    fontSize: $theme.typography.HeadingXSmall.fontSize,
  }),
);
