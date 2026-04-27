import type { Font } from 'baseui/themes';

/** Base font family for all Typographies fonts */
export const DEFAULT_FONT = {
  fontFamily: 'Roboto',
} as const satisfies Partial<Font>;

/** Font family used to create file type icon components. */
export const FILE_ICON_FONT = {
  fontFamily: 'Helvetica',
} as const satisfies Partial<Font>;
