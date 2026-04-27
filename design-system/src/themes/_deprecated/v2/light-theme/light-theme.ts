import { createTheme } from 'baseui';

import { responsiveTheme } from '../../../responsive';
import { lighting } from '../../v1/lighting';
import { spacingV1 } from '../../v1/spacing';
import { colorsV1 } from '../../v1/theme-colors';
import { typographies } from '../../v1/typographies';
import { borderTokens } from '../tokens/borders';
import { colorsNext } from '../tokens/colors';
import { spacing } from '../tokens/spacing';

import { bgColors, borderColors, iconColors, textColors } from './light-theme.colors';

import type { DesignSystemTheme, ThemeOverrides } from '../../../theme.interfaces';

const overrides: ThemeOverrides = {
  typography: {
    DisplayLarge: typographies.display1,
    DisplayMedium: typographies.display2,
    DisplaySmall: typographies.display3,
    HeadingLarge: typographies.titleLarge,
    HeadingMedium: typographies.titleMedium,
    HeadingSmall: typographies.titleSmall,
    HeadingXSmall: typographies.subtitle1,
    ParagraphLarge: typographies.subtitle2,
    ParagraphMedium: typographies.paragraph1,
    ParagraphSmall: typographies.paragraph2,
    ParagraphXSmall: typographies.smallParagraph,
    LabelSmall: typographies.smallDetails,
    LabelXSmall: typographies.upperDetails,
  },
  colors: {
    ...colorsV1,
    ...bgColors,
    ...borderColors,
    ...iconColors,
    ...textColors,

    // Background
    backgroundSecondary: colorsV1.bgGray,
    backgroundTertiary: colorsV1.bgBlue,
    bgBrandAI: colorsNext.brandAI,

    // Button =======
    // -- Primary --
    buttonPrimaryFill: colorsV1.blue100,
    buttonPrimaryActive: colorsV1.blue120,
    buttonPrimaryHover: colorsV1.blue80,
    buttonPrimaryText: colorsV1.white,

    // -- Secondary
    buttonSecondaryFill: colorsNext.base,
    buttonSecondaryText: colorsV1.blue100,
    buttonSecondaryHover: colorsV1.blue80,
    buttonSecondarySelectedFill: colorsV1.blue80,
    buttonSecondaryActive: colorsNext.base,

    // -- Tertiary
    buttonTertiaryFill: colorsNext.base,
    buttonTertiaryText: colorsV1.gray80,
    buttonTertiaryHover: colorsV1.gray60,
    buttonTertiaryActive: colorsNext.base,

    // -- Disabled --
    buttonDisabledFill: colorsV1.gray10,
    buttonDisabledText: colorsV1.gray40,

    // Input
    inputFill: colorsV1.bgGray,
    inputPlaceholder: colorsV1.gray60,
    inputBorder: colorsV1.gray40,
    inputTextDisabled: colorsV1.gray40,

    // Content
    contentPrimary: colorsV1.gray100,
    contentSecondary: colorsV1.gray60,

    // Tag =======
    // -- Solid --
    tagPrimarySolidBackground: colorsV1.steel120,
    tagPrimarySolidFont: colorsV1.white,
    tagNegativeSolidBackground: colorsV1.magenta100,
    tagNegativeSolidFont: colorsV1.white,
    tagPositiveSolidBackground: colorsV1.green100,
    tagPositiveSolidFont: colorsV1.green160,
    tagAccentSolidBackground: colorsV1.cyan100,
    tagAccentSolidFont: colorsV1.white,
    tagWarningSolidBackground: colorsV1.yellow100,
    tagWarningSolidFont: colorsV1.yellow160,

    // Tick
    tickBorder: colorsV1.gray60,
    tickFillSelected: colorsV1.blue100,
    tickMarkFill: colorsV1.white,
    tickFillHover: colorsV1.gray10,
    tickFillSelectedHover: colorsV1.blue100,
    tickFillDisabled: colorsV1.gray10,
    tickMarkFillDisabled: colorsV1.gray40,

    // Toast
    toastInfoBackground: colorsV1.blue10,
    toastNegativeBackground: colorsV1.error10,
    toastPositiveBackground: colorsV1.success10,
    toastWarningBackground: colorsV1.warning10,

    // Calendar
    calendarHeaderBackground: 'transparent',
    calendarHeaderForeground: colorsV1.gray100,
    calendarForeground: colorsV1.gray60,
    calendarDayForegroundPseudoSelected: colorsV1.gray60,
    calendarDayBackgroundSelected: colorsV1.blue100,
    calendarDayForegroundSelected: 'white',
    calendarDayBackgroundSelectedHighlighted: colorsV1.blue100,
    calendarDayForegroundSelectedHighlighted: 'white',
    calendarDayBackgroundPseudoSelectedHighlighted: colorsV1.blue10,

    // Division
    divisionLine: colorsV1.gray10,
  },
  lighting,
  spacing: {
    ...spacing,
    ...spacingV1,
  },
  borders: borderTokens,
};

/** A common light theme with only design system atomic design components styles */
export const lightTheme = {
  // The lightTheme is being created correctly, but the static non generic type `Theme` is not
  // hinting the overrides types added
  ...createTheme(overrides),
  ...responsiveTheme,
} as DesignSystemTheme;
