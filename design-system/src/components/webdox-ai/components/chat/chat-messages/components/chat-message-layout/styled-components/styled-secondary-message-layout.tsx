import { themedStyled } from '@themes/utilities';

import type { StyledMessageProps } from '../chat-message-layout';

export const StyledSecondaryMessageLayout = themedStyled<'article', StyledMessageProps>(
  'article',
  ({ $theme, $maxWidth }) => ({
    maxWidth: $maxWidth,
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'end',
    background: $theme.colors.peaceWashed,
    borderRadius: `${$theme.spacing.spacingXs} ${$theme.spacing.spacingXs} 0 ${$theme.spacing.spacingXs}`,
    padding: $theme.spacing.spacingXs,
    gap: $theme.spacing.spacingMd,
  }),
);
