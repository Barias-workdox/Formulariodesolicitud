import { themedStyled } from '../../../../themes';

import type { StyleObject } from 'styletron-standard';

/** A simple reusable layout for Table actions section */
export const TableActionsLayout = themedStyled<'div', { $style?: StyleObject }>(
  'div',
  ({ $theme, $style = {} }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: $theme.spacing.spacingMd,
    ...$style,
  }),
);
