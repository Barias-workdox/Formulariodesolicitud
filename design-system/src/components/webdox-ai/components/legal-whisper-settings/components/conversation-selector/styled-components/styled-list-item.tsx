import { themedStyled } from '@themes/utilities';

import {
  LIST_ITEM_HEIGHT,
  LIST_ITEM_HEIGHT_SELECTED,
} from '../../../legal-whisper-settings.constants';

export const StyledListItem = themedStyled<'div', { $isSelected: boolean }>(
  'div',
  ({ $theme, $isSelected }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: $theme.spacing.spacingXs,
    padding: `0 ${$theme.spacing.spacingMd}`,
    cursor: 'pointer',
    height: LIST_ITEM_HEIGHT,
    border: `1px solid ${$theme.colors.neutralSubtle}`,
    borderRadius: $theme.spacing.spacing2xs,

    ...($isSelected && {
      backgroundColor: $theme.colors.brandWashed,
      border: 'none',
      height: LIST_ITEM_HEIGHT_SELECTED,
    }),

    ...(!$isSelected && {
      ':hover': {
        backgroundColor: $theme.colors.brandBase,
        borderColor: $theme.colors.neutralDepressed,
      },
    }),
  }),
);
