import { themedStyled } from '@themes/utilities';

import type { SharedProps } from '@components/input/next/input.interfaces';

export const StyledRightColumn = themedStyled<'div', Pick<SharedProps, '$disabled'>>(
  'div',
  ({ $theme, $disabled }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: $theme.spacing.spacingXs,
    color: $disabled ? $theme.colors.neutralDepressed : $theme.colors.neutralStrong,
  }),
);
