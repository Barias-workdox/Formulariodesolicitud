import { themedStyled } from '@themes/utilities';

import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  iconStyles: {
    minHeight: '1rem',
    minWidth: '1rem',
  } as StyleObject,
  textStyles: (theme: DesignSystemTheme): StyleObject => ({
    verticalAlign: 'middle',
    ...theme.typography.ParagraphXSmall,

    [theme.mediaQuery.large]: {
      ...theme.typography.ParagraphSmall,
    },
  }),
};

export const StyledListItem = themedStyled('li', ({ $theme }) => ({
  display: 'flex',
  gap: $theme.spacing.spacingXs,
  alignItems: 'center',
}));
