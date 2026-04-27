import { DEFAULT_FONT } from '@tokens';

import type { DesignSystemTheme } from '../../../../themes';
import type { StyleObject } from 'styletron-react';

/**
 * Returns the style object for a table cell.
 */
export const tableCellStyles = (theme: DesignSystemTheme): StyleObject => ({
  paddingTop: theme.spacing.spacingMd,
  paddingBottom: theme.spacing.spacingMd,
  whiteSpace: 'nowrap',
  ...DEFAULT_FONT,
});
