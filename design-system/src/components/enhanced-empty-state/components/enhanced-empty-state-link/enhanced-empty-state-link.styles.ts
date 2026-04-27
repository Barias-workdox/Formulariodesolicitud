import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  linkStyles: (theme: DesignSystemTheme): StyleObject => ({
    ...theme.typography.ParagraphXSmall,
    textDecorationColor: theme.colors.brand,
    color: theme.colors.brand,

    ':hover': {
      textDecorationColor: theme.colors.brandMedium,
      color: theme.colors.brandMedium,
    },

    [theme.mediaQuery.large]: {
      ...theme.typography.ParagraphSmall,
    },
  }),
};
