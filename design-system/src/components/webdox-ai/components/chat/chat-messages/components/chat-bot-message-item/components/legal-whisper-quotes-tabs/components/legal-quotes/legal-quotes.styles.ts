import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  articleTextStyles: (theme: DesignSystemTheme): StyleObject => ({
    position: 'relative',
    paddingLeft: theme.spacing.spacingLg,
    alignContent: 'flex-start',
    ':before': {
      content: '""',
      position: 'absolute',
      top: '18%',
      left: theme.spacing.spacingXs,
      transform: 'translateY(-50%)',
      width: '4px',
      height: '4px',
      backgroundColor: theme.colors.neutralSubdued,
      borderRadius: '50%',
    },
  }),
  headerTextStyles: (): StyleObject => ({
    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: '500',
  }),
};
