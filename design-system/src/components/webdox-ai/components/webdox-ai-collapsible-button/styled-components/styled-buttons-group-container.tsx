import { themedStyled } from '@themes/utilities';

import type { DirectionType } from '../webdox-ai-collapsible-button.interfaces';

export const StyledButtonsGroupContainer = themedStyled<'div', { $direction: DirectionType }>(
  'div',
  ({ $theme, $direction }) => ({
    display: 'flex',
    flexDirection: $direction,
    gap: $theme.spacing.spacingMd,
    ...($direction === 'column' && {
      paddingBottom: $theme.spacing.spacingMd,
      paddingTop: $theme.spacing.spacingSm,
    }),
    ...($direction === 'row' && {
      paddingLeft: $theme.spacing.spacingMd,
      paddingRight: $theme.spacing.spacingSm,
    }),
  }),
);
