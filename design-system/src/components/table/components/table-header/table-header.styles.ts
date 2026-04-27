import { DEFAULT_FONT } from '@tokens';

import type { DesignSystemTheme } from '../../../../themes';
import type { StyleObject } from 'styletron-standard';

/**
 * Returns the style object for the table header caption.
 *
 */
export const tableHeaderCaptionStyles = (theme: DesignSystemTheme): StyleObject => ({
  fontWeight: 500,
  color: theme.colors.neutral,
  margin: 0,
  paddingTop: theme.spacing.spacingMd,
  paddingBottom: theme.spacing.spacingMd,
  ...DEFAULT_FONT,
});
