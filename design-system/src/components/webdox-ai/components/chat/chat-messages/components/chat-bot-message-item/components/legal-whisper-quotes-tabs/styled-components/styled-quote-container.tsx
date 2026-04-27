import { getCustomScrollBarStyles } from '@themes/custom-scroll-bar';
import { themedStyled } from '@themes/utilities';

import { MAX_QUOTES_CONTAINER_HEIGHT } from '../legal-whisper-quotes-tabs.constants';

import type { StyleObject } from 'styletron-react';

export const StyledQuoteContainer = themedStyled<'div', { $gap?: StyleObject['gap'] }>(
  'div',
  ({ $theme, $gap }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: $gap ?? $theme.spacing.spacing2xs,
    padding: $theme.spacing.spacingXs,
    border: `solid 1px ${$theme.colors.neutralSubtle}`,
    maxHeight: MAX_QUOTES_CONTAINER_HEIGHT,
    overflow: 'auto',

    ...getCustomScrollBarStyles($theme),
  }),
);
