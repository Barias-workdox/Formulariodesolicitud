import { themedStyled } from '@themes/utilities';

import type { SharedProps } from '../message-box.interfaces';

export const StyledTextareaContainer = themedStyled<'div', SharedProps>(
  'div',
  ({ $theme, $variant = 'default' }) => ({
    display: 'flex',
    flex: 1,
    minHeight: 0,
    overflow: 'hidden',
    padding: `${$theme.spacing.spacingMd} ${$theme.spacing.spacingXs}`,
    boxSizing: 'border-box',

    ...($variant === 'compact' && {
      padding: `${$theme.spacing.spacingSm} ${$theme.spacing.spacingXs}`,
    }),
  }),
);
