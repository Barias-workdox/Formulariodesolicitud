import type { Borders } from 'baseui/themes';

/**
 * Override the default BaseUI borders. For now, radius borders will be omitted
 *
 * @deprecated This file is deprecated and will be removed in v3. Please use the borders defined in src/themes/v3/tokens/borders.ts instead.
 */
export const borderTokens: Partial<Borders> = {
  useRoundedCorners: false,
  radius100: '1px',
  radius200: '2px',
  radius300: '3px',
  radius400: '4px',
  radius500: '5px',
  buttonBorderRadius: '0px',
  buttonBorderRadiusMini: '0px',
  checkboxBorderRadius: '0px',
  inputBorderRadius: '0px',
  popoverBorderRadius: '0px',
  inputBorderRadiusMini: '0px',
  surfaceBorderRadius: '0px',
};
