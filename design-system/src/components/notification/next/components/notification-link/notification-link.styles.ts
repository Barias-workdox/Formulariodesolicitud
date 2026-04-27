import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const notificationLinkStyles = {
  linkStyles: (theme: DesignSystemTheme): StyleObject => ({
    color: theme.colors.brand,
    textDecoration: 'underline',
    lineHeight: '21px',
    ...theme.typography.ParagraphSmall,
  }),
};
