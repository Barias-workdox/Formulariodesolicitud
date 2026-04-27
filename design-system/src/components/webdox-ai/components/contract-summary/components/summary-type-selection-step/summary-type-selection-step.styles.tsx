import { themedStyled } from '@themes/utilities';

import type { StatefulMessageCardProps } from '@components/message-card';

export const StyledRoot = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  gap: $theme.spacing.spacingXs,
}));

export const messageCardOverrides: StatefulMessageCardProps['overrides'] = {
  Button: {
    style: {
      minWidth: 'unset',
      height: '100%',
      flex: '1',
    },
  },
};
