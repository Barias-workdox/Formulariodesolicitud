import { themedStyled } from '@themes/utilities';

import { LIST_ITEM_HEIGHT } from '../conversation-selector-with-popover.constants';

export const StyledListItem = themedStyled<'div', { $isLast: boolean; $isSelected: boolean }>(
  'div',
  ({ $theme, $isLast, $isSelected }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: $theme.spacing.spacingXs,
    padding: `0 ${$theme.spacing.spacingMd}`,
    cursor: 'pointer',
    height: LIST_ITEM_HEIGHT,

    ...($isSelected && {
      backgroundColor: $theme.colors.brandWashed,
    }),

    ...(!$isSelected && {
      ':hover': {
        backgroundColor: $theme.colors.brandBase,
      },
    }),

    ...(!$isLast && {
      borderBottom: `1px solid ${$theme.colors.neutralSubtle}`,
    }),
  }),
);
