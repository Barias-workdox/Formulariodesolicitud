import { themedStyled } from '@themes/utilities';

import {
  ANSWER_REFERENCES_HEIGHT_PX,
  ANSWER_REFERENCES_WIDTH_PX,
} from '../../../../../chat-messages.constants';

export const StyledRangeItem = themedStyled<'span', { $isActive: boolean; $disabled: boolean }>(
  'span',
  ({ $isActive, $disabled, $theme }) => ({
    ...$theme.typography.LabelSmall,
    padding: `0 ${$theme.spacing.spacing2xs}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: ANSWER_REFERENCES_WIDTH_PX,
    height: ANSWER_REFERENCES_HEIGHT_PX,
    boxSizing: 'border-box',
    borderRadius: $theme.spacing.spacing2xs,
    border: `solid 1px ${$theme.colors.neutralSubtle}`,
    color: $theme.colors.neutral,

    ...($isActive && {
      color: $theme.colors.neutralStrong,
      borderColor: $theme.colors.neutralStrong,
      backgroundColor: $theme.colors.brandSubtle,
    }),

    ...($disabled && {
      color: $theme.colors.neutralDepressed,
      borderColor: $theme.colors.neutralSubtle,
      backgroundColor: $theme.colors.neutralSubtle,
    }),

    ':hover': {
      ...(!$disabled &&
        !$isActive && {
          cursor: 'pointer',
          borderColor: $theme.colors.neutralDepressed,
          color: $theme.colors.neutral,
          backgroundColor: $theme.colors.brandWashed,
        }),
    },
  }),
);
