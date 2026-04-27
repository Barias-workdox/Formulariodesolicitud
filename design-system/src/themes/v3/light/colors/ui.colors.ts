import { PRIMITIVE_COLORS } from '../../tokens/primitives';

import { SEMANTIC_COLORS } from './semantics';

import type { UIColorTokens } from '../../interfaces/ui-colors.interfaces';

/**
 * Light theme UI color tokens — the third layer in the design token hierarchy.
 *
 * Each token references a light-mode semantic color, establishing context-specific
 * aliases for surfaces, icons, text, and strokes (SD-761, SD-768, SD-769, SD-770).
 */
export const UI_COLORS = {
  // ─── Surfaces — Base ───────────────────────────────────────────────────────
  surfaceMain: SEMANTIC_COLORS.base,
  surfaceAlternative: SEMANTIC_COLORS.neutralBase,
  surfaceOverlayBackdrop: `${PRIMITIVE_COLORS.gray140}73`, // 45% opacity

  // ─── Surfaces — Decorative ─────────────────────────────────────────────────
  surfaceDecorativeNeutral: SEMANTIC_COLORS.neutralSubtle,
  surfaceDecorativeNeutralStrong: SEMANTIC_COLORS.neutral,
  surfaceDecorativeBrand: SEMANTIC_COLORS.brandSubtle,
  surfaceDecorativeBrandStrong: SEMANTIC_COLORS.brand,
  surfaceDecorativePositive: SEMANTIC_COLORS.positiveSubtle,
  surfaceDecorativePositiveStrong: SEMANTIC_COLORS.positive,
  surfaceDecorativeWarning: SEMANTIC_COLORS.warningSubtle,
  surfaceDecorativeWarningStrong: SEMANTIC_COLORS.warning,
  surfaceDecorativeNegative: SEMANTIC_COLORS.negativeSubtle,
  surfaceDecorativeNegativeStrong: SEMANTIC_COLORS.negative,
  surfaceDecorativePower: SEMANTIC_COLORS.powerSubtle,
  surfaceDecorativePowerStrong: SEMANTIC_COLORS.power,
  surfaceDecorativePeace: SEMANTIC_COLORS.peaceSubtle,
  surfaceDecorativePeaceStrong: SEMANTIC_COLORS.peace,
  surfaceDecorativeSweet: SEMANTIC_COLORS.sweetSubtle,
  surfaceDecorativeSweetStrong: SEMANTIC_COLORS.sweet,
  surfaceDecorativeHeat: SEMANTIC_COLORS.heatSubtle,
  surfaceDecorativeHeatStrong: SEMANTIC_COLORS.heat,

  // ─── Surfaces — Interactive (Neutral) ──────────────────────────────────────
  surfaceInteractiveNeutral: SEMANTIC_COLORS.neutralBase,
  surfaceInteractiveNeutralHover: SEMANTIC_COLORS.neutralWashed,
  surfaceInteractiveNeutralActive: SEMANTIC_COLORS.neutralSubtle,
  surfaceInteractiveNeutralStrong: SEMANTIC_COLORS.neutral,
  surfaceInteractiveNeutralStrongHover: SEMANTIC_COLORS.neutralMedium,
  surfaceInteractiveNeutralStrongActive: SEMANTIC_COLORS.neutralStrong,

  // ─── Surfaces — Interactive (Brand) ────────────────────────────────────────
  surfaceInteractiveBrand: SEMANTIC_COLORS.brandBase,
  surfaceInteractiveBrandHover: SEMANTIC_COLORS.brandWashed,
  surfaceInteractiveBrandActive: SEMANTIC_COLORS.brandSubtle,
  surfaceInteractiveBrandStrong: SEMANTIC_COLORS.brand,
  surfaceInteractiveBrandStrongHover: SEMANTIC_COLORS.brandMedium,
  surfaceInteractiveBrandStrongActive: SEMANTIC_COLORS.brandStrong,

  // ─── Surfaces — Interactive (Positive) ─────────────────────────────────────
  surfaceInteractivePositive: SEMANTIC_COLORS.positiveWashed,
  surfaceInteractivePositiveHover: SEMANTIC_COLORS.positiveSubtle,
  surfaceInteractivePositiveActive: SEMANTIC_COLORS.positiveDepressed,
  surfaceInteractivePositiveStrong: SEMANTIC_COLORS.positive,
  surfaceInteractivePositiveStrongHover: SEMANTIC_COLORS.positiveMedium,
  surfaceInteractivePositiveStrongActive: SEMANTIC_COLORS.positiveStrong,

  // ─── Surfaces — Interactive (Negative) ─────────────────────────────────────
  surfaceInteractiveNegative: SEMANTIC_COLORS.negativeWashed,
  surfaceInteractiveNegativeHover: SEMANTIC_COLORS.negativeSubtle,
  surfaceInteractiveNegativeActive: SEMANTIC_COLORS.negativeDepressed,
  surfaceInteractiveNegativeStrong: SEMANTIC_COLORS.negative,
  surfaceInteractiveNegativeStrongHover: SEMANTIC_COLORS.negativeMedium,
  surfaceInteractiveNegativeStrongActive: SEMANTIC_COLORS.negativeStrong,

  // ─── Surfaces — Interactive (Warning) ──────────────────────────────────────
  surfaceInteractiveWarning: SEMANTIC_COLORS.warningWashed,
  surfaceInteractiveWarningHover: SEMANTIC_COLORS.warningSubtle,
  surfaceInteractiveWarningActive: SEMANTIC_COLORS.warningDepressed,
  surfaceInteractiveWarningStrong: SEMANTIC_COLORS.warning,
  surfaceInteractiveWarningStrongHover: SEMANTIC_COLORS.warningMedium,
  surfaceInteractiveWarningStrongActive: SEMANTIC_COLORS.warningStrong,

  // ─── Surfaces — Interactive (Peace) ────────────────────────────────────────
  surfaceInteractivePeace: SEMANTIC_COLORS.peaceWashed,
  surfaceInteractivePeaceHover: SEMANTIC_COLORS.peaceSubtle,
  surfaceInteractivePeaceActive: SEMANTIC_COLORS.peaceDepressed,
  surfaceInteractivePeaceStrong: SEMANTIC_COLORS.peace,
  surfaceInteractivePeaceStrongHover: SEMANTIC_COLORS.peaceMedium,
  surfaceInteractivePeaceStrongActive: SEMANTIC_COLORS.peaceStrong,

  // ─── Surfaces — Interactive (Power) ────────────────────────────────────────
  surfaceInteractivePower: SEMANTIC_COLORS.powerWashed,
  surfaceInteractivePowerHover: SEMANTIC_COLORS.powerSubtle,
  surfaceInteractivePowerActive: SEMANTIC_COLORS.powerDepressed,
  surfaceInteractivePowerStrong: SEMANTIC_COLORS.power,
  surfaceInteractivePowerStrongHover: SEMANTIC_COLORS.powerMedium,
  surfaceInteractivePowerStrongActive: SEMANTIC_COLORS.powerStrong,

  // ─── Surfaces — Interactive (Disabled) ─────────────────────────────────────
  surfaceInteractiveDisabled: SEMANTIC_COLORS.neutralWashed,
  surfaceInteractiveOnDisabled: SEMANTIC_COLORS.neutralSubtle,

  // ─── Icons — Tonal surfaces ─────────────────────────────────────────────────
  iconTonalNeutral: SEMANTIC_COLORS.neutral,
  iconTonalNeutralStrong: SEMANTIC_COLORS.neutralStrong,
  iconTonalBrand: SEMANTIC_COLORS.brand,
  iconTonalBrandStrong: SEMANTIC_COLORS.brandStrong,
  iconTonalPositive: SEMANTIC_COLORS.positive,
  iconTonalPositiveStrong: SEMANTIC_COLORS.positiveStrong,
  iconTonalNegative: SEMANTIC_COLORS.negative,
  iconTonalNegativeStrong: SEMANTIC_COLORS.negativeStrong,
  iconTonalWarning: SEMANTIC_COLORS.warning,
  iconTonalWarningStrong: SEMANTIC_COLORS.warningStrong,
  iconTonalPower: SEMANTIC_COLORS.power,
  iconTonalPowerStrong: SEMANTIC_COLORS.powerStrong,
  iconTonalPeace: SEMANTIC_COLORS.peace,
  iconTonalPeaceStrong: SEMANTIC_COLORS.peaceStrong,
  iconTonalSweet: SEMANTIC_COLORS.sweet,
  iconTonalSweetStrong: SEMANTIC_COLORS.sweetStrong,
  iconTonalHeat: SEMANTIC_COLORS.heat,
  iconTonalHeatStrong: SEMANTIC_COLORS.heatStrong,
  iconTonalDisabled: SEMANTIC_COLORS.neutralDepressed,

  // ─── Icons — Filled surfaces ────────────────────────────────────────────────
  iconFilledNeutral: SEMANTIC_COLORS.neutralWashed,
  iconFilledNeutralStrong: SEMANTIC_COLORS.base,
  iconFilledBrand: SEMANTIC_COLORS.brandWashed,
  iconFilledBrandStrong: SEMANTIC_COLORS.base,
  iconFilledPositive: SEMANTIC_COLORS.positiveWashed,
  iconFilledPositiveStrong: SEMANTIC_COLORS.base,
  iconFilledNegative: SEMANTIC_COLORS.negativeWashed,
  iconFilledNegativeStrong: SEMANTIC_COLORS.base,
  iconFilledWarning: SEMANTIC_COLORS.warningWashed,
  iconFilledWarningStrong: SEMANTIC_COLORS.base,
  iconFilledPower: SEMANTIC_COLORS.powerWashed,
  iconFilledPowerStrong: SEMANTIC_COLORS.base,
  iconFilledPeace: SEMANTIC_COLORS.peaceWashed,
  iconFilledPeaceStrong: SEMANTIC_COLORS.base,
  iconFilledSweet: SEMANTIC_COLORS.sweetWashed,
  iconFilledSweetStrong: SEMANTIC_COLORS.base,
  iconFilledHeat: SEMANTIC_COLORS.heatWashed,
  iconFilledHeatStrong: SEMANTIC_COLORS.base,
  iconFilledDisabled: SEMANTIC_COLORS.neutralDepressed,

  // ─── Text — Tonal surfaces ──────────────────────────────────────────────────
  textTonalNeutralPrimary: SEMANTIC_COLORS.neutralStrong,
  textTonalNeutralSecondary: SEMANTIC_COLORS.neutral,
  textTonalNeutralTertiary: SEMANTIC_COLORS.neutralSubdued,
  textTonalBrandPrimary: SEMANTIC_COLORS.brandStrong,
  textTonalBrandSecondary: SEMANTIC_COLORS.brand,
  textTonalBrandTertiary: SEMANTIC_COLORS.brandSubdued,
  textTonalPositivePrimary: SEMANTIC_COLORS.positiveStrong,
  textTonalPositiveSecondary: SEMANTIC_COLORS.positive,
  textTonalNegativePrimary: SEMANTIC_COLORS.negativeStrong,
  textTonalNegativeSecondary: SEMANTIC_COLORS.negative,
  textTonalWarningPrimary: SEMANTIC_COLORS.warningStrong,
  textTonalWarningSecondary: SEMANTIC_COLORS.warning,
  textTonalPeacePrimary: SEMANTIC_COLORS.peaceStrong,
  textTonalPowerPrimary: SEMANTIC_COLORS.powerStrong,
  textTonalSweetPrimary: SEMANTIC_COLORS.sweetStrong,
  textTonalHeatPrimary: SEMANTIC_COLORS.heatStrong,
  textTonalDisabled: SEMANTIC_COLORS.neutralDepressed,
  textTonalLink: SEMANTIC_COLORS.brand,

  // ─── Text — Filled surfaces ─────────────────────────────────────────────────
  textFilledNeutralPrimary: SEMANTIC_COLORS.base,
  textFilledNeutralSecondary: SEMANTIC_COLORS.neutralWashed,
  textFilledBrandPrimary: SEMANTIC_COLORS.base,
  textFilledBrandSecondary: SEMANTIC_COLORS.brandWashed,
  textFilledPositivePrimary: SEMANTIC_COLORS.base,
  textFilledPositiveSecondary: SEMANTIC_COLORS.positiveWashed,
  textFilledNegativePrimary: SEMANTIC_COLORS.base,
  textFilledNegativeSecondary: SEMANTIC_COLORS.negativeWashed,
  textFilledDisabled: SEMANTIC_COLORS.neutralDepressed,

  // ─── Strokes (Borders) ──────────────────────────────────────────────────────
  strokeDefault: SEMANTIC_COLORS.neutralSubtle,
  strokeHover: SEMANTIC_COLORS.neutralDepressed,
  strokeActive: SEMANTIC_COLORS.neutralStrong,
  strokeDisabled: SEMANTIC_COLORS.neutralWashed,
  strokePositive: SEMANTIC_COLORS.positive,
  strokeNegative: SEMANTIC_COLORS.negative,
  strokeWarning: SEMANTIC_COLORS.warning,
  strokeBrand: SEMANTIC_COLORS.brand,
  strokePower: SEMANTIC_COLORS.power,
  strokePeace: SEMANTIC_COLORS.peace,
  strokeSweet: SEMANTIC_COLORS.sweet,
  strokeHeat: SEMANTIC_COLORS.heat,
} as const satisfies UIColorTokens;
