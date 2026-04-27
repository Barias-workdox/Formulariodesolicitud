import type { DesignSystemTheme } from '../../themes';
import type { StyleObject } from 'styletron-standard';

/** Caption styles */
export const captionStyles = ($theme: DesignSystemTheme, $error: boolean): StyleObject => ({
  ...$theme.typography.ParagraphMedium,
  color: $error ? $theme.colors.negativeMedium : $theme.colors.neutralStrong,
  margin: `${$theme.spacing.spacing2xs} 0`,
});
