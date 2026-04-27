import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  textStyles: (theme: DesignSystemTheme): StyleObject => {
    const baseStyles: StyleObject = {
      color: theme.colors.neutral,
      margin: 0,
      fontWeight: 500,
    };

    return {
      ...theme.typography.ParagraphLarge,
      ...baseStyles,

      [theme.mediaQuery.large]: {
        ...theme.typography.HeadingSmall,
        ...baseStyles,
      },
    };
  },
};
