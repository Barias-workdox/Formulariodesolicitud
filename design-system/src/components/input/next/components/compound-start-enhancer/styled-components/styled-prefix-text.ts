import { getSizeProperties } from '@components/input/next/input.styles';
import { themedStyled } from '@themes/utilities';

import type { SharedProps } from '@components/input/next/input.interfaces';

/**
 * Styled component for the prefix text
 * This component is used to display text before the input field.
 */
export const StyledPrefixText = themedStyled<'span', Pick<SharedProps, '$size' | '$disabled'>>(
  'span',
  ({ $theme, $size, $disabled }) => ({
    ...getSizeProperties($size, $theme).input,
    color: $disabled ? $theme.colors.neutralDepressed : $theme.colors.neutral,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    lineHeight: 'normal',
  }),
);
