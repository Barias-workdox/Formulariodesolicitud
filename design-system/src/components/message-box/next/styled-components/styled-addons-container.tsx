import { themedStyled } from '@themes/utilities';

import type { SharedProps } from '../message-box.interfaces';

export const StyledAddonsContainer = themedStyled<'div', SharedProps>('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: $theme.spacing.spacing2xs,
  gap: $theme.spacing.spacingXs,
}));
