import type { DesignSystemTheme } from '../../../../themes';
import type { StyleObject } from 'styletron-react';

export const linkStyles = {
  linkNotificationStyles: (theme: DesignSystemTheme): StyleObject => ({
    color: theme.colors.brand,
    cursor: 'pointer',
    flex: 'none',
    maxWidth: '12.5rem',
    textAlign: 'center',
    textDecoration: 'underline',
    wordBreak: 'break-word',
  }),
};
