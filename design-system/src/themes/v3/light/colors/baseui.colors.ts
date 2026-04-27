import { PRIMITIVE_COLORS } from '../../tokens/primitives';

import type { RemoveIndexSignature } from '../../../../types/utils/remove-index-signature';
import type { ColorTokens } from 'baseui/styles';

export const BASE_UI_COLORS_OVERRIDES: Partial<RemoveIndexSignature<ColorTokens>> = {
  // Background
  backgroundSecondary: PRIMITIVE_COLORS.gray0,
  backgroundTertiary: PRIMITIVE_COLORS.blue0,

  // Button =======
  // -- Primary --
  buttonPrimaryFill: PRIMITIVE_COLORS.blue100,
  buttonPrimaryActive: PRIMITIVE_COLORS.blue120,
  buttonPrimaryHover: PRIMITIVE_COLORS.blue80,
  buttonPrimaryText: PRIMITIVE_COLORS.base,

  // -- Secondary
  buttonSecondaryFill: PRIMITIVE_COLORS.base,
  buttonSecondaryText: PRIMITIVE_COLORS.blue100,
  buttonSecondaryHover: PRIMITIVE_COLORS.blue80,
  buttonSecondarySelectedFill: PRIMITIVE_COLORS.blue80,
  buttonSecondaryActive: PRIMITIVE_COLORS.base,

  // -- Tertiary
  buttonTertiaryFill: PRIMITIVE_COLORS.base,
  buttonTertiaryText: PRIMITIVE_COLORS.gray80,
  buttonTertiaryHover: PRIMITIVE_COLORS.gray80,
  buttonTertiaryActive: PRIMITIVE_COLORS.base,

  // -- Disabled --
  buttonDisabledFill: PRIMITIVE_COLORS.gray10,
  buttonDisabledText: PRIMITIVE_COLORS.gray40,

  // Input
  inputFill: PRIMITIVE_COLORS.gray0,
  inputPlaceholder: PRIMITIVE_COLORS.gray80,
  inputBorder: PRIMITIVE_COLORS.gray40,
  inputTextDisabled: PRIMITIVE_COLORS.gray40,

  // Content
  contentPrimary: PRIMITIVE_COLORS.gray100,
  contentSecondary: PRIMITIVE_COLORS.gray80,

  // Tag =======
  // -- Solid --
  tagPrimarySolidBackground: PRIMITIVE_COLORS.blue120,
  tagPrimarySolidFont: PRIMITIVE_COLORS.base,
  tagNegativeSolidBackground: PRIMITIVE_COLORS.magenta100,
  tagNegativeSolidFont: PRIMITIVE_COLORS.base,
  tagPositiveSolidBackground: PRIMITIVE_COLORS.green100,
  tagPositiveSolidFont: PRIMITIVE_COLORS.green140,
  tagAccentSolidBackground: PRIMITIVE_COLORS.cyan100,
  tagAccentSolidFont: PRIMITIVE_COLORS.base,
  tagWarningSolidBackground: PRIMITIVE_COLORS.yellow100,
  tagWarningSolidFont: PRIMITIVE_COLORS.yellow140,

  // Tick
  tickBorder: PRIMITIVE_COLORS.gray80,
  tickFillSelected: PRIMITIVE_COLORS.blue100,
  tickMarkFill: PRIMITIVE_COLORS.base,
  tickFillHover: PRIMITIVE_COLORS.gray10,
  tickFillSelectedHover: PRIMITIVE_COLORS.blue100,
  tickFillDisabled: PRIMITIVE_COLORS.gray10,
  tickMarkFillDisabled: PRIMITIVE_COLORS.gray40,

  // Toast
  toastInfoBackground: PRIMITIVE_COLORS.blue10,
  toastNegativeBackground: PRIMITIVE_COLORS.red10,
  toastPositiveBackground: PRIMITIVE_COLORS.green10,
  toastWarningBackground: PRIMITIVE_COLORS.yellow10,

  // Calendar
  calendarHeaderBackground: 'transparent',
  calendarHeaderForeground: PRIMITIVE_COLORS.gray100,
  calendarForeground: PRIMITIVE_COLORS.gray80,
  calendarDayForegroundPseudoSelected: PRIMITIVE_COLORS.gray80,
  calendarDayBackgroundSelected: PRIMITIVE_COLORS.blue100,
  calendarDayForegroundSelected: 'white',
  calendarDayBackgroundSelectedHighlighted: PRIMITIVE_COLORS.blue100,
  calendarDayForegroundSelectedHighlighted: 'white',
  calendarDayBackgroundPseudoSelectedHighlighted: PRIMITIVE_COLORS.blue10,
};
