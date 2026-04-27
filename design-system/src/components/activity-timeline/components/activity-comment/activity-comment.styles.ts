import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  textStyles: (theme: DesignSystemTheme): StyleObject => ({
    wordBreak: 'break-word',
    borderLeft: `3px solid ${theme.colors.neutralSubtle}`,
  }),
  mentionedUserStyles: (theme: DesignSystemTheme): StyleObject => ({
    color: theme.colors.neutral,
    fontWeight: 500,
  }),
};
