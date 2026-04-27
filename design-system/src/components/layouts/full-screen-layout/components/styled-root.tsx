import { themedStyled } from '@themes/utilities';

import type { StyleObject } from 'styletron-react';

export const StyledRoot = themedStyled<
  'div',
  { $hasElevation: boolean; $padding: StyleObject['padding'] }
>('div', ({ $hasElevation, $padding, $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: $padding ?? `${$theme.spacing.spacingMd} ${$theme.spacing.spacingXl}`,
  backgroundColor: $theme.colors.bgBase,
  margin: 0,
  gap: $theme.spacing.spacingMd,
  borderBottom: `${$hasElevation ? 3 : 1}px solid ${$theme.colors.neutralSubtle}`,
  /** 36px is the height of the `IconButton` in the start and end enhancer component */
  minHeight: '36px',
}));
