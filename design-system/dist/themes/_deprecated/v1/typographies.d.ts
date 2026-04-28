import { Font as DefaultFont } from 'baseui/theme';
import { StyleObject } from 'styletron-react';
export interface Typography extends Partial<DefaultFont> {
    letterSpacing?: string;
    textTransform?: StyleObject['textTransform'];
}
/**
 * @deprecated - only used in DS v1
 * These font settings correspond to the design system, they are mapped to BaseWeb fonts
 * in the definition of the theme (/src/theme/webdox-theme.tsx).
 * The names are not the same between BaseWeb and DS fonts.
 * In Figma, the names of the fonts are the ones we have in this file.
 */
export declare const typographies: Record<string, Typography>;
