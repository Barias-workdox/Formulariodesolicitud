import { colorsNext } from '../tokens/colors';

import type {
  BgColorToken,
  BorderColorToken,
  IconColorToken,
  TextColorToken,
} from '../colors.interfaces';

export const bgColors = {
  bgBase: colorsNext.base,
  bgTransparent: colorsNext.transparent,
  bgBrandAI: colorsNext.brandAI,

  // neutral
  bgNeutral: colorsNext.gray100,
  bgNeutralWashed: colorsNext.gray0,
  bgNeutralSubtle: colorsNext.gray20,
  bgNeutralDepressed: colorsNext.gray40,
  bgNeutralSubdued: colorsNext.gray80,
  bgNeutralMedium: colorsNext.gray120,
  bgNeutralStrong: colorsNext.gray140,

  // brand
  bgBrand: colorsNext.blue100,
  bgBrandWashed: colorsNext.blue0,
  bgBrandSubtle: colorsNext.blue20,
  bgBrandDepressed: colorsNext.blue40,
  bgBrandSubdued: colorsNext.blue80,
  bgBrandMedium: colorsNext.blue120,
  bgBrandStrong: colorsNext.blue140,

  // positive
  bgPositive: colorsNext.green100,
  bgPositiveSubtle: colorsNext.green20,
  bgPositiveDepressed: colorsNext.green40,
  bgPositiveSubdued: colorsNext.green80,
  bgPositiveMedium: colorsNext.green120,
  bgPositiveWashed: colorsNext.green0,

  // negative
  bgNegative: colorsNext.red100,
  bgNegativeSubtle: colorsNext.red20,
  bgNegativeDepressed: colorsNext.red40,
  bgNegativeSubdued: colorsNext.red80,
  bgNegativeMedium: colorsNext.red120,

  // warning
  bgWarning: colorsNext.yellow100,
  bgWarningSubtle: colorsNext.yellow20,
  bgWarningDepressed: colorsNext.yellow40,
  bgWarningSubdued: colorsNext.yellow80,
  bgWarningMedium: colorsNext.yellow120,

  // peace
  bgPeace: colorsNext.cyan100,
  bgPeaceSubtle: colorsNext.cyan20,
  bgPeaceSubdued: colorsNext.cyan80,

  // power
  bgPower: colorsNext.purple100,
  bgPowerSubtle: colorsNext.purple20,
  bgPowerDepressed: colorsNext.purple40,
  bgPowerSubdued: colorsNext.purple80,
  bgPowerMedium: colorsNext.purple120,

  // nature
  bgNature: colorsNext.lightgreen100,
  bgNatureSubtle: colorsNext.lightgreen20,
  bgNatureDepressed: colorsNext.lightgreen40,
  bgNatureSubdued: colorsNext.lightgreen80,

  // sweet
  bgSweet: colorsNext.magenta100,
  bgSweetWashed: colorsNext.magenta0,
  bgSweetSubtle: colorsNext.magenta20,
  bgSweetDepressed: colorsNext.magenta40,
  bgSweetSubdued: colorsNext.magenta80,
  bgSweetMedium: colorsNext.magenta120,

  // heat
  bgHeat: colorsNext.orange100,
  bgHeatSubtle: colorsNext.orange20,
  bgHeatSubdued: colorsNext.orange80,
} as const satisfies Partial<Record<BgColorToken, string>>;

export const borderColors = {
  borderBase: colorsNext.base,

  // neutral
  borderNeutral: colorsNext.gray100,
  borderNeutralWashed: colorsNext.gray0,
  borderNeutralSubtle: colorsNext.gray20,
  borderNeutralDepressed: colorsNext.gray40,
  borderNeutralSubdued: colorsNext.gray80,
  borderNeutralMedium: colorsNext.gray120,
  borderNeutralStrong: colorsNext.gray140,

  // brand
  borderBrand: colorsNext.blue100,
  borderBrandWashed: colorsNext.blue0,
  borderBrandSubtle: colorsNext.blue20,
  borderBrandDepressed: colorsNext.blue40,
  borderBrandSubdued: colorsNext.blue80,
  borderBrandMedium: colorsNext.blue120,
  borderBrandStrong: colorsNext.blue140,

  // positive
  borderPositive: colorsNext.green100,
  borderPositiveSubtle: colorsNext.green20,
  borderPositiveDepressed: colorsNext.green40,
  borderPositiveSubdued: colorsNext.green80,
  borderPositiveMedium: colorsNext.green120,

  // negative
  borderNegative: colorsNext.red100,
  borderNegativeSubtle: colorsNext.red20,
  borderNegativeDepressed: colorsNext.red40,
  borderNegativeSubdued: colorsNext.red80,

  // warning
  borderWarning: colorsNext.yellow100,
  borderWarningSubtle: colorsNext.yellow20,
  borderWarningDepressed: colorsNext.yellow40,
  borderWarningSubdued: colorsNext.yellow80,

  // peace
  borderPeace: colorsNext.cyan100,
  borderPeaceSubtle: colorsNext.cyan20,
  borderPeaceDepressed: colorsNext.cyan40,

  // power
  borderPower: colorsNext.purple100,
  borderPowerSubtle: colorsNext.purple20,
  borderPowerDepressed: colorsNext.purple40,
  borderPowerMedium: colorsNext.purple120,

  // nature
  borderNature: colorsNext.lightgreen100,
  borderNatureSubtle: colorsNext.lightgreen20,
  borderNatureDepressed: colorsNext.lightgreen40,

  // sweet
  borderSweet: colorsNext.magenta100,
  borderSweetDepressed: colorsNext.magenta40,
  borderSweetMedium: colorsNext.magenta120,

  // heat
  borderHeat: colorsNext.orange100,
  borderHeatDepressed: colorsNext.orange40,
} as const satisfies Partial<Record<BorderColorToken, string>>;

export const iconColors = {
  iconBase: colorsNext.base,

  // neutral
  iconNeutral: colorsNext.gray100,
  iconNeutralWashed: colorsNext.gray0,
  iconNeutralSubtle: colorsNext.gray20,
  iconNeutralDepressed: colorsNext.gray40,
  iconNeutralSubdued: colorsNext.gray80,
  iconNeutralMedium: colorsNext.gray120,
  iconNeutralStrong: colorsNext.gray140,

  // brand
  iconBrand: colorsNext.blue100,
  iconBrandWashed: colorsNext.blue0,
  iconBrandSubtle: colorsNext.blue20,
  iconBrandDepressed: colorsNext.blue40,
  iconBrandSubdued: colorsNext.blue80,
  iconBrandMedium: colorsNext.blue120,
  iconBrandStrong: colorsNext.blue140,

  // positive
  iconPositive: colorsNext.green100,
  iconPositiveMedium: colorsNext.green120,
  iconPositiveStrong: colorsNext.green140,

  // negative
  iconNegative: colorsNext.red100,
  iconNegativeMedium: colorsNext.red120,
  iconNegativeStrong: colorsNext.red140,

  // warning
  iconWarning: colorsNext.yellow100,
  iconWarningMedium: colorsNext.yellow120,
  iconWarningStrong: colorsNext.yellow140,

  // peace
  iconPeace: colorsNext.cyan100,
  iconPeaceStrong: colorsNext.cyan140,

  // power
  iconPower: colorsNext.purple100,
  iconPowerStrong: colorsNext.purple140,

  // nature
  iconNature: colorsNext.lightgreen100,
  iconNatureStrong: colorsNext.lightgreen140,

  // sweet
  iconSweet: colorsNext.magenta100,
  iconSweetStrong: colorsNext.magenta140,
  iconSweetDepressed: colorsNext.magenta40,

  // nature
  iconHeat: colorsNext.orange100,
  iconHeatStrong: colorsNext.orange140,
} as const satisfies Partial<Record<IconColorToken, string>>;

export const textColors = {
  textBase: colorsNext.base,

  // neutral
  textNeutral: colorsNext.gray100,
  textNeutralWashed: colorsNext.gray0,
  textNeutralSubtle: colorsNext.gray20,
  textNeutralDepressed: colorsNext.gray40,
  textNeutralSubdued: colorsNext.gray80,
  textNeutralMedium: colorsNext.gray120,
  textNeutralStrong: colorsNext.gray140,

  // brand
  textBrand: colorsNext.blue100,
  textBrandMedium: colorsNext.blue120,
  textBrandStrong: colorsNext.blue140,

  // positive
  textPositive: colorsNext.green100,
  textPositiveMedium: colorsNext.green120,
  textPositiveStrong: colorsNext.green140,

  // negative
  textNegative: colorsNext.red100,
  textNegativeMedium: colorsNext.red120,
  textNegativeStrong: colorsNext.red140,

  // warning
  textWarning: colorsNext.yellow100,
  textWarningStrong: colorsNext.yellow140,

  // peace
  textPeace: colorsNext.cyan100,
  textPeaceStrong: colorsNext.cyan140,

  // power
  textPower: colorsNext.purple100,
  textPowerStrong: colorsNext.purple140,

  // nature
  textNature: colorsNext.lightgreen100,
  textNatureStrong: colorsNext.lightgreen140,

  // sweet
  textSweet: colorsNext.magenta100,
  textSweetMedium: colorsNext.magenta120,
  textSweetStrong: colorsNext.magenta140,

  // heat
  textHeat: colorsNext.orange100,
  textHeatStrong: colorsNext.orange140,
} as const satisfies Partial<Record<TextColorToken, string>>;

export type BgColorType = keyof typeof bgColors;

export type BorderColorType = keyof typeof borderColors;

export type IconColorType = keyof typeof iconColors;

export type TextColorType = keyof typeof textColors;
