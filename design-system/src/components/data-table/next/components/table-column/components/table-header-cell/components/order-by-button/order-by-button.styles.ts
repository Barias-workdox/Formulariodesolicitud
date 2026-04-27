import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  buttonStyles: (theme: DesignSystemTheme): StyleObject => ({
    background: 'transparent',
    border: 'none',
    boxShadow: 'none',
    height: '48px',
    padding: 0,
    color: theme.colors.neutralSubdued,
    ':where(:hover, :focus)': {
      color: theme.colors.brandStrong,
      outline: 'none',
    },
    ':focus div': {
      color: theme.colors.brandStrong,
      outline: `2px solid ${theme.colors.brandSubdued}`,
    },
  }),
  wrapperStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.spacing2xs,
    cursor: 'pointer',
    marginLeft: 'auto',
    marginRight: `-${theme.spacing.spacingXs}`,
  }),
};
