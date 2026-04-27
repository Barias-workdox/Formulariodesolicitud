import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  textStyles: (theme: DesignSystemTheme): StyleObject => ({
    wordBreak: 'break-word',
    textAlign: 'justify',
    color: theme.colors.neutralSubdued,
    margin: 0,
    ':has(*) :first-child': {
      marginTop: 0,
    },
    ':has(*) :last-child': {
      marginBottom: 0,
    },
  }),
};
