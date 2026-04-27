import { PRIMITIVE_COLORS } from '../../tokens/primitives';

import type { RemoveIndexSignature } from '../../../../types/utils/remove-index-signature';
import type { ColorTokens } from 'baseui/styles';

export const BASE_UI_COLORS_OVERRIDES: Partial<RemoveIndexSignature<ColorTokens>> = {
  // Background
  backgroundSecondary: PRIMITIVE_COLORS.gray120,
  backgroundTertiary: PRIMITIVE_COLORS.blue120,

  // Button =======
  // -- Primary --
  buttonPrimaryFill: PRIMITIVE_COLORS.blue20,
  buttonPrimaryActive: PRIMITIVE_COLORS.blue10,
  buttonPrimaryHover: PRIMITIVE_COLORS.blue40,
  buttonPrimaryText: PRIMITIVE_COLORS.gray140,

  // -- Secondary
  buttonSecondaryFill: PRIMITIVE_COLORS.gray140,
  buttonSecondaryText: PRIMITIVE_COLORS.blue20,
  buttonSecondaryHover: PRIMITIVE_COLORS.blue40,
  buttonSecondarySelectedFill: PRIMITIVE_COLORS.blue40,
  buttonSecondaryActive: PRIMITIVE_COLORS.gray140,

  // -- Tertiary
  buttonTertiaryFill: PRIMITIVE_COLORS.gray140,
  buttonTertiaryText: PRIMITIVE_COLORS.gray40,
  buttonTertiaryHover: PRIMITIVE_COLORS.gray40,
  buttonTertiaryActive: PRIMITIVE_COLORS.gray140,

  // -- Disabled --
  buttonDisabledFill: PRIMITIVE_COLORS.gray100,
  buttonDisabledText: PRIMITIVE_COLORS.gray40,

  // Input
  inputFill: PRIMITIVE_COLORS.gray120,
  inputPlaceholder: PRIMITIVE_COLORS.gray40,
  inputBorder: PRIMITIVE_COLORS.gray40,
  inputTextDisabled: PRIMITIVE_COLORS.gray40,

  // Content
  contentPrimary: PRIMITIVE_COLORS.gray20,
  contentSecondary: PRIMITIVE_COLORS.gray40,

  // Tag =======
  // -- Solid --
  tagPrimarySolidBackground: PRIMITIVE_COLORS.blue10,
  tagPrimarySolidFont: PRIMITIVE_COLORS.gray140,
  tagNegativeSolidBackground: PRIMITIVE_COLORS.magenta20,
  tagNegativeSolidFont: PRIMITIVE_COLORS.gray140,
  tagPositiveSolidBackground: PRIMITIVE_COLORS.green20,
  tagPositiveSolidFont: PRIMITIVE_COLORS.green0,
  tagAccentSolidBackground: PRIMITIVE_COLORS.cyan20,
  tagAccentSolidFont: PRIMITIVE_COLORS.gray140,
  tagWarningSolidBackground: PRIMITIVE_COLORS.yellow20,
  tagWarningSolidFont: PRIMITIVE_COLORS.yellow0,

  // Tick
  tickBorder: PRIMITIVE_COLORS.gray40,
  tickFillSelected: PRIMITIVE_COLORS.blue20,
  tickMarkFill: PRIMITIVE_COLORS.gray140,
  tickFillHover: PRIMITIVE_COLORS.gray100,
  tickFillSelectedHover: PRIMITIVE_COLORS.blue20,
  tickFillDisabled: PRIMITIVE_COLORS.gray100,
  tickMarkFillDisabled: PRIMITIVE_COLORS.gray40,

  // Toast
  toastInfoBackground: PRIMITIVE_COLORS.blue100,
  toastNegativeBackground: PRIMITIVE_COLORS.red120,
  toastPositiveBackground: PRIMITIVE_COLORS.green120,
  toastWarningBackground: PRIMITIVE_COLORS.yellow120,

  // Calendar
  calendarHeaderBackground: 'transparent',
  calendarHeaderForeground: PRIMITIVE_COLORS.gray20,
  calendarForeground: PRIMITIVE_COLORS.gray40,
  calendarDayForegroundPseudoSelected: PRIMITIVE_COLORS.gray40,
  calendarDayBackgroundSelected: PRIMITIVE_COLORS.blue20,
  calendarDayForegroundSelected: PRIMITIVE_COLORS.gray140,
  calendarDayBackgroundSelectedHighlighted: PRIMITIVE_COLORS.blue20,
  calendarDayForegroundSelectedHighlighted: PRIMITIVE_COLORS.gray140,
  calendarDayBackgroundPseudoSelectedHighlighted: PRIMITIVE_COLORS.blue100,
};
