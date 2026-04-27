import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-standard';

/** Styles for dragabble cell*/
export const draggableCellTable = (theme: DesignSystemTheme): StyleObject => ({
  backgroundColor: theme.colors.brandWashed,
  maxWidth: '20px',
  paddingLeft: '0',
});
