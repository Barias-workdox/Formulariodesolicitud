import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-standard';

export const styles = {
  rootStyles: {
    position: 'relative',
    height: '100%',
  } as StyleObject,
  wrapperStyles: {
    display: 'flex',
    overflow: 'hidden',
    alignItems: 'center',
    height: '100%',
  } as StyleObject,
  draggableCellTableStyles: (theme: DesignSystemTheme): StyleObject => ({
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.colors.brandWashed,
    width: '16px',
    height: '100%',
  }),
  innerStyles: {
    flex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  } as StyleObject,
};
