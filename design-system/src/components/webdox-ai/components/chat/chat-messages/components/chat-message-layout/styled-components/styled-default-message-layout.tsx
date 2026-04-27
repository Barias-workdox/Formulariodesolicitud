import { themedStyled } from '@themes/index';

import type { StyledMessageProps } from '../chat-message-layout';

export const StyledDefaultMessageLayout = themedStyled<'article', StyledMessageProps>(
  'article',
  ({ $maxWidth, $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: $maxWidth,
    width: 'fit-content',
    background: $theme.colors.bgBase,
    gap: $theme.spacing.spacingXs,
  }),
);
