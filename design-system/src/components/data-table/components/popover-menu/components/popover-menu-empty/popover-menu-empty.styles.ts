import type { DesignSystemTheme } from '../../../../../../themes';
import type { StyleObject } from 'styletron-react';

export const styles = {
  containerStyles: (theme: DesignSystemTheme): StyleObject => ({
    ...theme.typography.ParagraphSmall,
    lineHeight: 1,
    padding: `12px ${theme.spacing.spacingMd}`,
    color: theme.colors.neutralDepressed,
  }),
};
