import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  containerStyles: (theme: DesignSystemTheme): StyleObject => ({
    flex: 1,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    background: theme.colors.neutralWashed,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }),
  documentStyles: {
    border: 0,
    width: '100%',
    height: '100%',
  } as StyleObject,
};
