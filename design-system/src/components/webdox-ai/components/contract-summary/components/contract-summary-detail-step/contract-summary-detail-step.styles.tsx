import { getCustomScrollBarStyles } from '@themes/custom-scroll-bar';
import { themedStyled } from '@themes/utilities';

import type { BlockOverrides } from 'baseui/block';

export const StyledRoot = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  gap: $theme.spacing.spacingXs,
}));

/** TextOverrides */
export const textOverrides = ({
  onScroll,
  dataTestId,
}: {
  dataTestId: string;
  onScroll(): void;
}): BlockOverrides => ({
  Block: {
    style: ({ $theme }) => ({
      ':has(*) :first-child': {
        marginTop: 0,
      },
      ':has(*) :last-child': {
        marginBottom: 0,
      },
      ...getCustomScrollBarStyles($theme),
    }),
    props: { onScroll, 'data-testid': dataTestId },
  },
});
