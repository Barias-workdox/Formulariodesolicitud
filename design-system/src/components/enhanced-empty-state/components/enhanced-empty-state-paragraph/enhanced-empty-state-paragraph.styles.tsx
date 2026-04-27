import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  textStyles: (theme: DesignSystemTheme): StyleObject => ({
    ...theme.typography.ParagraphXSmall,

    [theme.mediaQuery.large]: {
      ...theme.typography.ParagraphSmall,
    },
  }),
};
