import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

const DIVIDER_HEIGHT = '1px';

export const styles = {
  rootStyles: (): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
  }),
  wrapperStepStyles: (): StyleObject => ({
    position: 'relative',
    alignSelf: 'stretch',
  }),
  compressedDividerStyles: (theme: DesignSystemTheme): StyleObject => ({
    width: '16px',
    height: DIVIDER_HEIGHT,
    backgroundColor: theme.colors.neutralSubtle,
    flexShrink: 0,
  }),
  dividerStyles: (theme: DesignSystemTheme): StyleObject => ({
    position: 'absolute',
    width: 'calc(100% - 30px)',
    height: DIVIDER_HEIGHT,
    backgroundColor: theme.colors.neutralSubtle,
    top: '15px',
    transform: 'translateX(-50%)',
  }),
};
