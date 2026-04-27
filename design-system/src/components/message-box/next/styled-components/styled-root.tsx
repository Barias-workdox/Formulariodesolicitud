import { themedStyled } from '@themes/utilities';

import { DEFAULT_MAX_HEIGHT, DEFAULT_WIDTH } from '../message-box.constants';

import type { SharedProps } from '../message-box.interfaces';

export const StyledRoot = themedStyled<'div', SharedProps>(
  'div',
  ({ $theme, $maxHeight = DEFAULT_MAX_HEIGHT, $width = DEFAULT_WIDTH, $margin }) => ({
    position: 'relative',
    backgroundColor: $theme.colors.neutralBase,
    borderRadius: $theme.spacing.spacingXs,
    boxShadow: '0 2px 28px 0 rgba(26, 26, 26, 0.04)',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: $maxHeight,
    width: $width,
    margin: $margin,
  }),
);
