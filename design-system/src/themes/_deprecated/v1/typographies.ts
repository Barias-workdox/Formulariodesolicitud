import { DEFAULT_FONT } from '@tokens/typography';

import type { Font as DefaultFont } from 'baseui/theme';
import type { StyleObject } from 'styletron-react';

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
export const typographies: Record<string, Typography> = {
  display1: {
    ...DEFAULT_FONT,
    fontSize: '65px',
    lineHeight: '76px',
    fontWeight: 'normal',
  } as const,

  display2: {
    ...DEFAULT_FONT,
    fontSize: '56px',
    lineHeight: '66px',
    fontWeight: 'normal',
  } as const,

  display3: {
    ...DEFAULT_FONT,
    fontSize: '42px',
    lineHeight: '49px',
    fontWeight: 'normal',
  } as const,

  titleLarge: {
    ...DEFAULT_FONT,
    fontSize: '28px',
    lineHeight: '33px',
    fontWeight: 'normal',
  } as const,

  titleMedium: {
    ...DEFAULT_FONT,
    fontSize: '26px',
    lineHeight: '30px',
    fontWeight: 'normal',
  } as const,

  titleSmall: {
    ...DEFAULT_FONT,
    fontSize: '24px',
    lineHeight: '28px',
    fontWeight: 'normal',
  } as const,

  subtitle1: {
    ...DEFAULT_FONT,
    fontSize: '20px',
    lineHeight: '25px',
    fontWeight: 'normal',
  } as const,

  subtitle2: {
    ...DEFAULT_FONT,
    fontSize: '18px',
    lineHeight: '21px',
    fontWeight: 'normal',
  } as const,

  paragraph1: {
    ...DEFAULT_FONT,
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '22px',
  } as const,

  paragraph2: {
    ...DEFAULT_FONT,
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '22px',
  } as const,

  smallParagraph: {
    ...DEFAULT_FONT,
    fontSize: '12px',
    fontWeight: 'normal',
    lineHeight: '18px',
  } as const,

  smallDetails: {
    ...DEFAULT_FONT,
    fontSize: '10px',
    fontWeight: 'normal',
    lineHeight: '18px',
  } as const,

  upperDetails: {
    ...DEFAULT_FONT,
    fontSize: '10px',
    lineHeight: '12px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  } as const,
};
