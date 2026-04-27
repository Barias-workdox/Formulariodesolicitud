import type { ButtonVariantStyles, ThemeColors } from './button.styles.interfaces';

// ============================================================================
// BRAND VARIANTS
// ============================================================================

/** Brand filled variant styles */
export const brandFilled = (c: ThemeColors): ButtonVariantStyles => ({
  button: {
    default: {
      backgroundColor: c.brand,
      border: `1px solid ${c.brand}`,
      color: c.textBase,
    },
    hover: {
      backgroundColor: c.brandMedium,
      border: `1px solid ${c.brandMedium}`,
      color: c.textBase,
    },
    active: {
      backgroundColor: c.brandStrong,
      border: `1px solid ${c.brandStrong}`,
      color: c.textBase,
    },
  },
  spinner: {
    kind: 'contrast',
  },
});

/** Brand tonal variant styles */
export const brandTonal = (c: ThemeColors): ButtonVariantStyles => ({
  button: {
    default: {
      backgroundColor: c.brandBase,
      border: `1px solid ${c.brandBase}`,
      color: c.brand,
    },
    hover: {
      backgroundColor: c.brandWashed,
      border: `1px solid ${c.brandWashed}`,
      color: c.brandMedium,
    },
    active: {
      backgroundColor: c.brandSubtle,
      border: `1px solid ${c.brandSubtle}`,
      color: c.brandMedium,
    },
  },
  spinner: {
    kind: 'brand',
  },
});

/** Brand outlined variant styles */
export const brandOutlined = (c: ThemeColors): ButtonVariantStyles => ({
  button: {
    default: {
      backgroundColor: c.transparent,
      border: `1px solid ${c.brand}`,
      color: c.brand,
    },
    hover: {
      backgroundColor: c.brandWashed,
      border: `1px solid ${c.brand}`,
      color: c.brandMedium,
    },
    active: {
      backgroundColor: c.brandSubtle,
      border: `1px solid ${c.brand}`,
      color: c.brandMedium,
    },
  },
  spinner: {
    kind: 'brand',
  },
});

/** Brand ghost variant styles */
export const brandGhost = (c: ThemeColors): ButtonVariantStyles => ({
  button: {
    default: {
      backgroundColor: c.transparent,
      border: `1px solid ${c.borderTransparent}`,
      color: c.brand,
    },
    hover: {
      backgroundColor: c.brandWashed,
      border: `1px solid ${c.brandWashed}`,
      color: c.brandMedium,
    },
    active: {
      backgroundColor: c.brandSubtle,
      border: `1px solid ${c.brandSubtle}`,
      color: c.brandMedium,
    },
  },
  spinner: {
    kind: 'brand',
  },
});

// ============================================================================
// NEUTRAL VARIANTS
// ============================================================================

/** Neutral filled variant styles */
export const neutralFilled = (c: ThemeColors): ButtonVariantStyles => ({
  button: {
    default: {
      backgroundColor: c.neutral,
      border: `1px solid ${c.neutral}`,
      color: c.textBase,
    },
    hover: {
      backgroundColor: c.neutralMedium,
      border: `1px solid ${c.neutralMedium}`,
      color: c.textBase,
    },
    active: {
      backgroundColor: c.neutralStrong,
      border: `1px solid ${c.neutralStrong}`,
      color: c.textBase,
    },
  },
  spinner: {
    kind: 'contrast',
  },
});

/** Neutral tonal variant styles */
export const neutralTonal = (c: ThemeColors): ButtonVariantStyles => ({
  button: {
    default: {
      backgroundColor: c.neutralBase,
      border: `1px solid ${c.neutralBase}`,
      color: c.neutral,
    },
    hover: {
      backgroundColor: c.neutralWashed,
      border: `1px solid ${c.neutralWashed}`,
      color: c.neutralMedium,
    },
    active: {
      backgroundColor: c.neutralSubtle,
      border: `1px solid ${c.neutralSubtle}`,
      color: c.neutralMedium,
    },
  },
  spinner: {
    kind: 'brand',
  },
});

/** Neutral outlined variant styles */
export const neutralOutlined = (c: ThemeColors): ButtonVariantStyles => ({
  button: {
    default: {
      backgroundColor: c.transparent,
      border: `1px solid ${c.neutralSubtle}`,
      color: c.neutral,
    },
    hover: {
      backgroundColor: c.neutralWashed,
      border: `1px solid ${c.neutralSubtle}`,
      color: c.neutralStrong,
    },
    active: {
      backgroundColor: c.neutralSubtle,
      border: `1px solid ${c.neutralSubtle}`,
      color: c.neutralStrong,
    },
  },
  spinner: {
    kind: 'brand',
  },
});

/** Neutral ghost variant styles */
export const neutralGhost = (c: ThemeColors): ButtonVariantStyles => ({
  button: {
    default: {
      backgroundColor: c.transparent,
      border: `1px solid ${c.borderTransparent}`,
      color: c.neutral,
    },
    hover: {
      backgroundColor: c.neutralWashed,
      border: `1px solid ${c.neutralWashed}`,
      color: c.neutralMedium,
    },
    active: {
      backgroundColor: c.neutralSubtle,
      border: `1px solid ${c.neutralSubtle}`,
      color: c.neutralMedium,
    },
  },
  spinner: {
    kind: 'brand',
  },
});

// ============================================================================
// POSITIVE VARIANTS
// ============================================================================

/** Positive filled variant styles */
export const positiveFilled = (c: ThemeColors): ButtonVariantStyles => ({
  button: {
    default: {
      backgroundColor: c.positive,
      border: `1px solid ${c.positive}`,
      color: c.textBase,
    },
    hover: {
      backgroundColor: c.positiveMedium,
      border: `1px solid ${c.positiveMedium}`,
      color: c.textBase,
    },
    active: {
      backgroundColor: c.positiveStrong,
      border: `1px solid ${c.positiveStrong}`,
      color: c.textBase,
    },
  },
  spinner: {
    kind: 'contrast',
  },
});

// ============================================================================
// NEGATIVE VARIANTS
// ============================================================================

/** Negative filled variant styles */
export const negativeFilled = (c: ThemeColors): ButtonVariantStyles => ({
  button: {
    default: {
      backgroundColor: c.negative,
      border: `1px solid ${c.negative}`,
      color: c.textBase,
    },
    hover: {
      backgroundColor: c.negativeMedium,
      border: `1px solid ${c.negativeMedium}`,
      color: c.textBase,
    },
    active: {
      backgroundColor: c.negativeStrong,
      border: `1px solid ${c.negativeStrong}`,
      color: c.textBase,
    },
  },
  spinner: {
    kind: 'contrast',
  },
});

// ============================================================================
// CONTRAST VARIANTS
// ============================================================================

/** Contrast filled variant styles */
export const contrastFilled = (c: ThemeColors): ButtonVariantStyles => ({
  button: {
    default: {
      backgroundColor: c.bgBase,
      border: `1px solid ${c.borderBase}`,
      color: c.neutral,
    },
    hover: {
      backgroundColor: c.neutralWashed,
      border: `1px solid ${c.neutralWashed}`,
      color: c.neutralMedium,
    },
    active: {
      backgroundColor: c.neutralSubtle,
      border: `1px solid ${c.neutralSubtle}`,
      color: c.neutralMedium,
    },
  },
  spinner: {
    kind: 'brand',
  },
});

/** Contrast outlined variant styles */
export const contrastOutlined = (c: ThemeColors): ButtonVariantStyles => ({
  button: {
    default: {
      backgroundColor: c.transparent,
      border: `1px solid ${c.neutralSubtle}`,
      color: c.textBase,
    },
    hover: {
      backgroundColor: c.neutralStrong,
      border: `1px solid ${c.neutralSubtle}`,
      color: c.textBase,
    },
    active: {
      backgroundColor: c.neutralStrong,
      border: `1px solid ${c.neutralSubtle}`,
      color: c.textBase,
    },
  },
  spinner: {
    kind: 'contrast',
  },
});

/** Contrast ghost variant styles */
export const contrastGhost = (c: ThemeColors): ButtonVariantStyles => ({
  button: {
    default: {
      backgroundColor: c.transparent,
      border: `1px solid ${c.borderTransparent}`,
      color: c.textBase,
    },
    hover: {
      backgroundColor: c.neutralStrong,
      border: `1px solid ${c.neutralStrong}`,
      color: c.textBase,
    },
    active: {
      backgroundColor: c.neutralStrong,
      border: `1px solid ${c.neutralStrong}`,
      color: c.textBase,
    },
  },
  spinner: {
    kind: 'contrast',
  },
});
