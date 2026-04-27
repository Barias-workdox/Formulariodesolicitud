import { themedStyled } from '@themes/index';

import type { StyledMessageProps } from '../chat-message-layout';

export const StyledPrimaryMessageLayout = themedStyled<'article', StyledMessageProps>(
  'article',
  ({ $theme, $maxWidth }) => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: $maxWidth,
    background: $theme.colors.bgBase,
    width: 'auto',
    gap: $theme.spacing.spacingXs,
  }),
);
