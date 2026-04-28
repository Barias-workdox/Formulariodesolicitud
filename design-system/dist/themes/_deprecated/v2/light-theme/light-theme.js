import { createTheme as t } from "baseui";
import { responsiveTheme as o } from "../../../responsive.js";
import { lighting as i } from "../../v1/lighting.js";
import { spacingV1 as l } from "../../v1/spacing.js";
import { colorsV1 as e } from "../../v1/theme-colors.js";
import { typographies as a } from "../../v1/typographies.js";
import { borderTokens as n } from "../tokens/borders.js";
import { colorsNext as r } from "../tokens/colors.js";
import { spacing as g } from "../tokens/spacing.js";
import { textColors as d, iconColors as c, borderColors as u, bgColors as y } from "./light-theme.colors.js";
const s = {
  typography: {
    DisplayLarge: a.display1,
    DisplayMedium: a.display2,
    DisplaySmall: a.display3,
    HeadingLarge: a.titleLarge,
    HeadingMedium: a.titleMedium,
    HeadingSmall: a.titleSmall,
    HeadingXSmall: a.subtitle1,
    ParagraphLarge: a.subtitle2,
    ParagraphMedium: a.paragraph1,
    ParagraphSmall: a.paragraph2,
    ParagraphXSmall: a.smallParagraph,
    LabelSmall: a.smallDetails,
    LabelXSmall: a.upperDetails
  },
  colors: {
    ...e,
    ...y,
    ...u,
    ...c,
    ...d,
    // Background
    backgroundSecondary: e.bgGray,
    backgroundTertiary: e.bgBlue,
    bgBrandAI: r.brandAI,
    // Button =======
    // -- Primary --
    buttonPrimaryFill: e.blue100,
    buttonPrimaryActive: e.blue120,
    buttonPrimaryHover: e.blue80,
    buttonPrimaryText: e.white,
    // -- Secondary
    buttonSecondaryFill: r.base,
    buttonSecondaryText: e.blue100,
    buttonSecondaryHover: e.blue80,
    buttonSecondarySelectedFill: e.blue80,
    buttonSecondaryActive: r.base,
    // -- Tertiary
    buttonTertiaryFill: r.base,
    buttonTertiaryText: e.gray80,
    buttonTertiaryHover: e.gray60,
    buttonTertiaryActive: r.base,
    // -- Disabled --
    buttonDisabledFill: e.gray10,
    buttonDisabledText: e.gray40,
    // Input
    inputFill: e.bgGray,
    inputPlaceholder: e.gray60,
    inputBorder: e.gray40,
    inputTextDisabled: e.gray40,
    // Content
    contentPrimary: e.gray100,
    contentSecondary: e.gray60,
    // Tag =======
    // -- Solid --
    tagPrimarySolidBackground: e.steel120,
    tagPrimarySolidFont: e.white,
    tagNegativeSolidBackground: e.magenta100,
    tagNegativeSolidFont: e.white,
    tagPositiveSolidBackground: e.green100,
    tagPositiveSolidFont: e.green160,
    tagAccentSolidBackground: e.cyan100,
    tagAccentSolidFont: e.white,
    tagWarningSolidBackground: e.yellow100,
    tagWarningSolidFont: e.yellow160,
    // Tick
    tickBorder: e.gray60,
    tickFillSelected: e.blue100,
    tickMarkFill: e.white,
    tickFillHover: e.gray10,
    tickFillSelectedHover: e.blue100,
    tickFillDisabled: e.gray10,
    tickMarkFillDisabled: e.gray40,
    // Toast
    toastInfoBackground: e.blue10,
    toastNegativeBackground: e.error10,
    toastPositiveBackground: e.success10,
    toastWarningBackground: e.warning10,
    // Calendar
    calendarHeaderBackground: "transparent",
    calendarHeaderForeground: e.gray100,
    calendarForeground: e.gray60,
    calendarDayForegroundPseudoSelected: e.gray60,
    calendarDayBackgroundSelected: e.blue100,
    calendarDayForegroundSelected: "white",
    calendarDayBackgroundSelectedHighlighted: e.blue100,
    calendarDayForegroundSelectedHighlighted: "white",
    calendarDayBackgroundPseudoSelectedHighlighted: e.blue10,
    // Division
    divisionLine: e.gray10
  },
  lighting: i,
  spacing: {
    ...g,
    ...l
  },
  borders: n
}, D = {
  // The lightTheme is being created correctly, but the static non generic type `Theme` is not
  // hinting the overrides types added
  ...t(s),
  ...o
};
export {
  D as lightTheme
};
//# sourceMappingURL=light-theme.js.map
