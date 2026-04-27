import type { DesignSystemTheme } from './theme.interfaces';
import type { StyleObject } from 'styletron-react';

/**
 * Returns the focus-within style for a given theme.
 */
export const getFocusWithinStyles = (theme: DesignSystemTheme): StyleObject => ({
  outline: `2px solid ${theme.colors.borderBrand}`,
  outlineOffset: '-2px',
});
