import { Font as DefaultFont } from 'baseui/themes';
import { StyleObject } from 'styletron-react';
export interface Typography extends Partial<DefaultFont> {
    letterSpacing?: string;
    textTransform?: StyleObject['textTransform'];
    textDecoration?: StyleObject['textDecoration'];
}
export type TypographyKeys = 'h1' | 'h2' | 'body' | 'bodySmall' | 'microCopy' | 'upperDetails';
export type TypographyCssIdentifier = 'h1' | 'h2' | 'body' | 'body-small-mono' | 'microcopy' | 'upper-details';
