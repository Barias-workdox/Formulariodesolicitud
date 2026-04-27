import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  titleTextStyles: (theme: DesignSystemTheme): StyleObject => ({
    ...theme.typography.ParagraphXSmall,
    letterSpacing: '1px',
    textTransform: 'uppercase',
  }),
};
