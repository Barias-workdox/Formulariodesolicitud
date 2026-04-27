import { themedStyled } from '@themes/utilities';

import type { MessageCardStylesConfiguration } from '@components/message-card/message-card.interfaces';

export const StyledRoot = themedStyled<'div', MessageCardStylesConfiguration>(
  'div',
  ({ $theme, $direction = 'row' }) => ({
    width: '100%',
    alignItems: $direction === 'row' ? 'center' : 'start',
    display: 'flex',
    flexDirection: $direction,
    gap: $theme.spacing.spacingXs,
  }),
);
