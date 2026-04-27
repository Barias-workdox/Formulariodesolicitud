import { themedStyled } from '@themes/utilities';

import type { StyledMessageProps } from '../chat-message-layout';

export const StyledTertiaryMessageLayout = themedStyled<'article', StyledMessageProps>(
  'article',
  ({ $theme, $maxWidth }) => ({
    maxWidth: $maxWidth,
    alignSelf: 'end',
    background: $theme.colors.brandWashed,
    borderRadius: `${$theme.spacing.spacingXs} ${$theme.spacing.spacingXs} 0 ${$theme.spacing.spacingXs}`,
    padding: $theme.spacing.spacingXs,
    gap: $theme.spacing.spacingMd,
  }),
);
