import type { Size } from '@components/input/next';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

/** Returns the icon size for the select ui based on the input size */
export const getTextStyles = (size: Size, theme: DesignSystemTheme): StyleObject => {
  const compactStyles: StyleObject = { ...theme.typography.ParagraphSmall };
  const defaultStyles: StyleObject = { ...theme.typography.ParagraphMedium };

  const sizes: Record<Size, StyleObject> = {
    '32px': compactStyles,
    compact: compactStyles,
    '44px': defaultStyles,
    default: defaultStyles,
  };

  return sizes[size] ?? defaultStyles;
};
