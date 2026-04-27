import { PRIMITIVE_COLORS } from '../../tokens/primitives';

import { SEMANTIC_COLORS } from './semantics';

import type { UIColorTokens } from '../../interfaces/ui-colors.interfaces';

/**
 * Dark theme UI color tokens — the third layer in the design token hierarchy.
 *
 * Each token references a dark-mode semantic color, establishing context-specific
 * aliases for surfaces, icons, text, and strokes (SD-761, SD-768, SD-769, SD-770).
 */
export const UI_COLORS = {
  // ─── Surfaces — Base ───────────────────────────────────────────────────────
  surfaceMain: SEMANTIC_COLORS.neutralStrong,
  surfaceAlternative: SEMANTIC_COLORS.neutralMedium,
  surfaceOverlayBackdrop: `${PRIMITIVE_COLORS.gray140}99`, // 60% opacity

  // ─── Surfaces — Decorative ─────────────────────────────────────────────────
  surfaceDecorativeNeutral: SEMANTIC_COLORS.neutral,
  surfaceDecorativeNeutralStrong: SEMANTIC_COLORS.neutralDepressed,
  surfaceDecorativeBrand: SEMANTIC_COLORS.brand,
  surfaceDecorativeBrandStrong: SEMANTIC_COLORS.brandDepressed,
  surfaceDecorativePositive: SEMANTIC_COLORS.positive,
  surfaceDecorativePositiveStrong: SEMANTIC_COLORS.positiveDepressed,
  surfaceDecorativeWarning: SEMANTIC_COLORS.warning,
  surfaceDecorativeWarningStrong: SEMANTIC_COLORS.warningDepressed,
  surfaceDecorativeNegative: SEMANTIC_COLORS.negative,
  surfaceDecorativeNegativeStrong: SEMANTIC_COLORS.negativeDepressed,
  surfaceDecorativePower: SEMANTIC_COLORS.power,
  surfaceDecorativePowerStrong: SEMANTIC_COLORS.powerDepressed,
  surfaceDecorativePeace: SEMANTIC_COLORS.peace,
  surfaceDecorativePeaceStrong: SEMANTIC_COLORS.peaceDepressed,
  surfaceDecorativeSweet: SEMANTIC_COLORS.sweet,
  surfaceDecorativeSweetStrong: SEMANTIC_COLORS.sweetDepressed,
  surfaceDecorativeHeat: SEMANTIC_COLORS.heat,
  surfaceDecorativeHeatStrong: SEMANTIC_COLORS.heatDepressed,

  // ─── Surfaces — Interactive (Neutral) ──────────────────────────────────────
  surfaceInteractiveNeutral: SEMANTIC_COLORS.neutralMedium,
  surfaceInteractiveNeutralHover: SEMANTIC_COLORS.neutral,
  surfaceInteractiveNeutralActive: SEMANTIC_COLORS.neutralSubdued,
  surfaceInteractiveNeutralStrong: SEMANTIC_COLORS.neutralSubtle,
  surfaceInteractiveNeutralStrongHover: SEMANTIC_COLORS.neutralWashed,
  surfaceInteractiveNeutralStrongActive: SEMANTIC_COLORS.neutralBase,

  // ─── Surfaces — Interactive (Brand) ────────────────────────────────────────
  surfaceInteractiveBrand: SEMANTIC_COLORS.brandMedium,
  surfaceInteractiveBrandHover: SEMANTIC_COLORS.brand,
  surfaceInteractiveBrandActive: SEMANTIC_COLORS.brandSubdued,
  surfaceInteractiveBrandStrong: SEMANTIC_COLORS.brandSubtle,
  surfaceInteractiveBrandStrongHover: SEMANTIC_COLORS.brandWashed,
  surfaceInteractiveBrandStrongActive: SEMANTIC_COLORS.brandBase,

  // ─── Surfaces — Interactive (Positive) ─────────────────────────────────────
  surfaceInteractivePositive: SEMANTIC_COLORS.positiveMedium,
  surfaceInteractivePositiveHover: SEMANTIC_COLORS.positive,
  surfaceInteractivePositiveActive: SEMANTIC_COLORS.positiveSubdued,
  surfaceInteractivePositiveStrong: SEMANTIC_COLORS.positiveSubtle,
  surfaceInteractivePositiveStrongHover: SEMANTIC_COLORS.positiveWashed,
  surfaceInteractivePositiveStrongActive: SEMANTIC_COLORS.positiveBase,

  // ─── Surfaces — Interactive (Negative) ─────────────────────────────────────
  surfaceInteractiveNegative: SEMANTIC_COLORS.negativeMedium,
  surfaceInteractiveNegativeHover: SEMANTIC_COLORS.negative,
  surfaceInteractiveNegativeActive: SEMANTIC_COLORS.negativeSubdued,
  surfaceInteractiveNegativeStrong: SEMANTIC_COLORS.negativeSubtle,
  surfaceInteractiveNegativeStrongHover: SEMANTIC_COLORS.negativeWashed,
  surfaceInteractiveNegativeStrongActive: SEMANTIC_COLORS.negativeBase,

  // ─── Surfaces — Interactive (Warning) ──────────────────────────────────────
  surfaceInteractiveWarning: SEMANTIC_COLORS.warningMedium,
  surfaceInteractiveWarningHover: SEMANTIC_COLORS.warning,
  surfaceInteractiveWarningActive: SEMANTIC_COLORS.warningSubdued,
  surfaceInteractiveWarningStrong: SEMANTIC_COLORS.warningSubtle,
  surfaceInteractiveWarningStrongHover: SEMANTIC_COLORS.warningWashed,
  surfaceInteractiveWarningStrongActive: SEMANTIC_COLORS.warningBase,

  // ─── Surfaces — Interactive (Peace) ────────────────────────────────────────
  surfaceInteractivePeace: SEMANTIC_COLORS.peaceMedium,
  surfaceInteractivePeaceHover: SEMANTIC_COLORS.peace,
  surfaceInteractivePeaceActive: SEMANTIC_COLORS.peaceSubdued,
  surfaceInteractivePeaceStrong: SEMANTIC_COLORS.peaceSubtle,
  surfaceInteractivePeaceStrongHover: SEMANTIC_COLORS.peaceWashed,
  surfaceInteractivePeaceStrongActive: SEMANTIC_COLORS.peaceBase,

  // ─── Surfaces — Interactive (Power) ────────────────────────────────────────
  surfaceInteractivePower: SEMANTIC_COLORS.powerMedium,
  surfaceInteractivePowerHover: SEMANTIC_COLORS.power,
  surfaceInteractivePowerActive: SEMANTIC_COLORS.powerSubdued,
  surfaceInteractivePowerStrong: SEMANTIC_COLORS.powerSubtle,
  surfaceInteractivePowerStrongHover: SEMANTIC_COLORS.powerWashed,
  surfaceInteractivePowerStrongActive: SEMANTIC_COLORS.powerBase,

  // ─── Surfaces — Interactive (Disabled) ─────────────────────────────────────
  surfaceInteractiveDisabled: SEMANTIC_COLORS.neutralMedium,
  surfaceInteractiveOnDisabled: SEMANTIC_COLORS.neutral,

  // ─── Icons — Tonal surfaces ─────────────────────────────────────────────────
  iconTonalNeutral: SEMANTIC_COLORS.neutralSubtle,
  iconTonalNeutralStrong: SEMANTIC_COLORS.base,
  iconTonalBrand: SEMANTIC_COLORS.brandSubtle,
  iconTonalBrandStrong: SEMANTIC_COLORS.base,
  iconTonalPositive: SEMANTIC_COLORS.positiveSubtle,
  iconTonalPositiveStrong: SEMANTIC_COLORS.base,
  iconTonalNegative: SEMANTIC_COLORS.negativeSubtle,
  iconTonalNegativeStrong: SEMANTIC_COLORS.base,
  iconTonalWarning: SEMANTIC_COLORS.warningSubtle,
  iconTonalWarningStrong: SEMANTIC_COLORS.base,
  iconTonalPower: SEMANTIC_COLORS.powerSubtle,
  iconTonalPowerStrong: SEMANTIC_COLORS.base,
  iconTonalPeace: SEMANTIC_COLORS.peaceSubtle,
  iconTonalPeaceStrong: SEMANTIC_COLORS.base,
  iconTonalSweet: SEMANTIC_COLORS.sweetSubtle,
  iconTonalSweetStrong: SEMANTIC_COLORS.base,
  iconTonalHeat: SEMANTIC_COLORS.heatSubtle,
  iconTonalHeatStrong: SEMANTIC_COLORS.base,
  iconTonalDisabled: SEMANTIC_COLORS.neutralSubdued,

  // ─── Icons — Filled surfaces ────────────────────────────────────────────────
  iconFilledNeutral: SEMANTIC_COLORS.neutral,
  iconFilledNeutralStrong: SEMANTIC_COLORS.neutralStrong,
  iconFilledBrand: SEMANTIC_COLORS.brand,
  iconFilledBrandStrong: SEMANTIC_COLORS.brandStrong,
  iconFilledPositive: SEMANTIC_COLORS.positive,
  iconFilledPositiveStrong: SEMANTIC_COLORS.positiveStrong,
  iconFilledNegative: SEMANTIC_COLORS.negative,
  iconFilledNegativeStrong: SEMANTIC_COLORS.negativeStrong,
  iconFilledWarning: SEMANTIC_COLORS.warning,
  iconFilledWarningStrong: SEMANTIC_COLORS.warningStrong,
  iconFilledPower: SEMANTIC_COLORS.power,
  iconFilledPowerStrong: SEMANTIC_COLORS.powerStrong,
  iconFilledPeace: SEMANTIC_COLORS.peace,
  iconFilledPeaceStrong: SEMANTIC_COLORS.peaceStrong,
  iconFilledSweet: SEMANTIC_COLORS.sweet,
  iconFilledSweetStrong: SEMANTIC_COLORS.sweetStrong,
  iconFilledHeat: SEMANTIC_COLORS.heat,
  iconFilledHeatStrong: SEMANTIC_COLORS.heatStrong,
  iconFilledDisabled: SEMANTIC_COLORS.neutralSubdued,

  // ─── Text — Tonal surfaces ──────────────────────────────────────────────────
  textTonalNeutralPrimary: SEMANTIC_COLORS.base,
  textTonalNeutralSecondary: SEMANTIC_COLORS.neutralSubtle,
  textTonalNeutralTertiary: SEMANTIC_COLORS.neutralDepressed,
  textTonalBrandPrimary: SEMANTIC_COLORS.base,
  textTonalBrandSecondary: SEMANTIC_COLORS.brandSubtle,
  textTonalBrandTertiary: SEMANTIC_COLORS.brandDepressed,
  textTonalPositivePrimary: SEMANTIC_COLORS.base,
  textTonalPositiveSecondary: SEMANTIC_COLORS.positiveSubtle,
  textTonalNegativePrimary: SEMANTIC_COLORS.base,
  textTonalNegativeSecondary: SEMANTIC_COLORS.negativeSubtle,
  textTonalWarningPrimary: SEMANTIC_COLORS.base,
  textTonalWarningSecondary: SEMANTIC_COLORS.warningSubtle,
  textTonalPeacePrimary: SEMANTIC_COLORS.base,
  textTonalPowerPrimary: SEMANTIC_COLORS.base,
  textTonalSweetPrimary: SEMANTIC_COLORS.base,
  textTonalHeatPrimary: SEMANTIC_COLORS.base,
  textTonalDisabled: SEMANTIC_COLORS.neutralSubdued,
  textTonalLink: SEMANTIC_COLORS.base,

  // ─── Text — Filled surfaces ─────────────────────────────────────────────────
  textFilledNeutralPrimary: SEMANTIC_COLORS.neutralStrong,
  textFilledNeutralSecondary: SEMANTIC_COLORS.neutralMedium,
  textFilledBrandPrimary: SEMANTIC_COLORS.brandStrong,
  textFilledBrandSecondary: SEMANTIC_COLORS.brandMedium,
  textFilledPositivePrimary: SEMANTIC_COLORS.positiveStrong,
  textFilledPositiveSecondary: SEMANTIC_COLORS.positiveMedium,
  textFilledNegativePrimary: SEMANTIC_COLORS.negativeStrong,
  textFilledNegativeSecondary: SEMANTIC_COLORS.negativeMedium,
  textFilledDisabled: SEMANTIC_COLORS.neutralSubdued,

  // ─── Strokes (Borders) ──────────────────────────────────────────────────────
  strokeDefault: SEMANTIC_COLORS.neutral,
  strokeHover: SEMANTIC_COLORS.neutralSubdued,
  strokeActive: SEMANTIC_COLORS.base,
  strokeDisabled: SEMANTIC_COLORS.neutralMedium,
  strokePositive: SEMANTIC_COLORS.positiveSubtle,
  strokeNegative: SEMANTIC_COLORS.negativeSubtle,
  strokeWarning: SEMANTIC_COLORS.warningSubtle,
  strokeBrand: SEMANTIC_COLORS.brandSubtle,
  strokePower: SEMANTIC_COLORS.powerSubtle,
  strokePeace: SEMANTIC_COLORS.peaceSubtle,
  strokeSweet: SEMANTIC_COLORS.sweetSubtle,
  strokeHeat: SEMANTIC_COLORS.heatSubtle,
} as const satisfies UIColorTokens;
