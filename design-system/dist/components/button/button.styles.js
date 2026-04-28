import { COMMON_HEIGHT_32 as c, COMMON_HEIGHT_44 as s, COMMON_HEIGHT_56 as g, COMMON_HEIGHT_24 as i, COMMON_FONT_SIZE_10 as v, COMMON_FONT_SIZE_14 as t, COMMON_FONT_SIZE_16 as C } from "../../constants/common.constants.js";
import { getFocusWithinStyles as w } from "../../themes/theme.utils.js";
import { DEFAULT_FONT as M } from "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { getTransitionStyles as y } from "../../utils/styles.utils.js";
import { Spinner as B } from "../spinner/spinner.js";
import "react/jsx-runtime";
import "react";
import "baseui/modal";
import "baseui";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
const e = {
  [c]: t,
  [s]: C,
  /** @deprecated Use common sizes instead */
  default: C,
  /** @deprecated Use common sizes instead */
  compact: t,
  /** @deprecated Use common sizes instead */
  mini: v
}, b = {
  [i]: i,
  [c]: c,
  [s]: s,
  [g]: g,
  /** @deprecated Use common sizes instead */
  default: s,
  /** @deprecated Use common sizes instead */
  compact: c,
  /** @deprecated Use "auto" instead */
  mini: "auto",
  /** @deprecated Use common sizes instead */
  auto: "auto"
}, D = ({
  $theme: o
}) => ({
  [i]: o.spacing.spacingSm,
  [c]: o.spacing.spacingMd,
  [s]: o.spacing.spacingXl,
  /** @deprecated Use common sizes instead */
  default: o.spacing.spacingXl,
  /** @deprecated Use common sizes instead */
  compact: o.spacing.spacingMd
}), x = {
  primary: { color: "brandDepressed", secondaryColor: "transparent" },
  "primary-brain": { color: "power", secondaryColor: "transparent" },
  "primary-whisper": { color: "sweetDepressed", secondaryColor: "transparent" },
  positive: { color: "positive", secondaryColor: "transparent" },
  "dark-positive": { color: "positive", secondaryColor: "transparent" },
  negative: { color: "negative", secondaryColor: "transparent" },
  "dark-negative": { color: "negative", secondaryColor: "transparent" },
  warning: { color: "warningStrong", secondaryColor: "transparent" },
  "tertiary-brain": { color: "power", secondaryColor: "transparent" },
  "tertiary-whisper": { color: "sweet", secondaryColor: "transparent" },
  "action-brain": { color: "power", secondaryColor: "transparent" }
}, O = ({ $theme: o }) => {
  const r = (a) => ({
    ":focus": a,
    ":active": a,
    ":focus-within": w(o)
  });
  return {
    primary: {
      color: o.colors.textBase,
      borderColor: o.colors.brand,
      backgroundColor: o.colors.brand,
      ":hover": {
        borderColor: o.colors.brandMedium,
        backgroundColor: o.colors.brandMedium
      },
      ...r({
        color: o.colors.brand,
        borderColor: o.colors.brandStrong,
        backgroundColor: o.colors.transparent
      })
    },
    secondary: {
      color: o.colors.brand,
      borderColor: o.colors.brand,
      backgroundColor: o.colors.bgBase,
      ":hover": {
        borderColor: o.colors.brandSubtle,
        backgroundColor: o.colors.brandSubtle
      },
      ...r({
        color: o.colors.brandMedium,
        borderColor: o.colors.brandMedium,
        backgroundColor: o.colors.transparent
      })
    },
    tertiary: {
      color: o.colors.neutralSubdued,
      borderColor: o.colors.neutralSubtle,
      backgroundColor: o.colors.bgBase,
      ":hover": {
        color: o.colors.neutral,
        borderColor: o.colors.neutralSubtle,
        backgroundColor: o.colors.neutralSubtle
      },
      ...r({
        color: o.colors.neutral,
        borderColor: o.colors.neutral,
        backgroundColor: o.colors.transparent
      })
    },
    positive: {
      color: o.colors.positiveMedium,
      borderColor: o.colors.positiveSubtle,
      backgroundColor: o.colors.positiveSubtle,
      ":hover": {
        color: o.colors.positiveMedium,
        borderColor: o.colors.positiveDepressed,
        backgroundColor: o.colors.positiveDepressed
      },
      ...r({
        color: o.colors.positiveMedium,
        borderColor: o.colors.positiveMedium,
        backgroundColor: o.colors.transparent
      })
    },
    "dark-positive": {
      color: o.colors.textBase,
      borderColor: o.colors.positive,
      backgroundColor: o.colors.positive,
      ":hover": {
        color: o.colors.textBase,
        borderColor: o.colors.positiveMedium,
        backgroundColor: o.colors.positiveMedium
      },
      ...r({
        color: o.colors.positiveMedium,
        borderColor: o.colors.positive,
        backgroundColor: o.colors.transparent
      })
    },
    negative: {
      color: o.colors.negative,
      borderColor: o.colors.negativeSubtle,
      backgroundColor: o.colors.negativeSubtle,
      ":hover": {
        color: o.colors.negativeMedium,
        borderColor: o.colors.negativeDepressed,
        backgroundColor: o.colors.negativeDepressed
      },
      ...r({
        color: o.colors.negativeMedium,
        borderColor: o.colors.negative,
        backgroundColor: o.colors.transparent
      })
    },
    "dark-negative": {
      color: o.colors.textBase,
      borderColor: o.colors.negative,
      backgroundColor: o.colors.negative,
      ":hover": {
        color: o.colors.textBase,
        borderColor: o.colors.negativeMedium,
        backgroundColor: o.colors.negativeMedium
      },
      ...r({
        color: o.colors.negativeMedium,
        borderColor: o.colors.negative,
        backgroundColor: o.colors.transparent
      })
    },
    warning: {
      color: o.colors.warningStrong,
      borderColor: o.colors.warningSubtle,
      backgroundColor: o.colors.warningSubtle,
      ":hover": {
        color: o.colors.warningStrong,
        borderColor: o.colors.warningDepressed,
        backgroundColor: o.colors.warningDepressed
      },
      ...r({
        color: o.colors.warningStrong,
        borderColor: o.colors.warningSubdued,
        backgroundColor: o.colors.transparent
      })
    },
    control: {
      color: o.colors.neutral,
      borderColor: o.colors.neutralWashed,
      backgroundColor: o.colors.neutralWashed,
      ":hover": {
        color: o.colors.neutralMedium,
        borderColor: o.colors.neutralSubtle,
        backgroundColor: o.colors.neutralSubtle
      },
      ...r({
        color: o.colors.neutral,
        borderColor: o.colors.neutral,
        backgroundColor: o.colors.transparent
      })
    },
    selection: {
      color: o.colors.brandMedium,
      borderColor: o.colors.brandWashed,
      backgroundColor: o.colors.brandWashed,
      ":hover": {
        color: o.colors.brandMedium,
        borderColor: o.colors.brandSubtle,
        backgroundColor: o.colors.brandSubtle
      },
      ...r({
        color: o.colors.brandMedium,
        borderColor: o.colors.brandMedium,
        backgroundColor: o.colors.transparent
      })
    },
    "link-secondary": {
      color: o.colors.brand,
      borderColor: "transparent",
      backgroundColor: o.colors.transparent,
      ":hover": {
        color: o.colors.brandMedium,
        borderColor: o.colors.brandSubtle,
        backgroundColor: o.colors.brandSubtle,
        textDecoration: "underline"
      },
      ...r({
        color: o.colors.brandMedium,
        borderColor: o.colors.brandMedium,
        backgroundColor: o.colors.transparent,
        textDecoration: "underline"
      })
    },
    "link-secondary-brain": {
      color: o.colors.power,
      borderColor: "transparent",
      backgroundColor: o.colors.transparent,
      ":hover": {
        color: o.colors.powerMedium,
        borderColor: o.colors.powerSubtle,
        backgroundColor: o.colors.powerSubtle,
        textDecoration: "underline"
      },
      ...r({
        color: o.colors.powerMedium,
        borderColor: o.colors.powerMedium,
        backgroundColor: o.colors.transparent,
        textDecoration: "underline"
      })
    },
    "link-tertiary": {
      color: o.colors.neutralSubdued,
      borderColor: "transparent",
      backgroundColor: o.colors.transparent,
      ":hover": {
        color: o.colors.neutral,
        borderColor: o.colors.neutralSubtle,
        backgroundColor: o.colors.neutralSubtle,
        textDecoration: "underline"
      },
      ...r({
        color: o.colors.neutral,
        borderColor: o.colors.neutral,
        backgroundColor: o.colors.transparent,
        textDecoration: "underline"
      })
    },
    "ghost-secondary": {
      color: o.colors.brand,
      borderColor: "transparent",
      backgroundColor: o.colors.transparent,
      ":hover": {
        color: o.colors.brandMedium
      },
      ...r({
        color: o.colors.brandMedium,
        borderColor: o.colors.brandSubtle
      })
    },
    "ghost-tertiary": {
      color: o.colors.neutralSubdued,
      borderColor: "transparent",
      backgroundColor: o.colors.transparent,
      ":hover": {
        color: o.colors.neutral
      },
      ...r({
        color: o.colors.neutral,
        borderColor: o.colors.neutralSubtle
      })
    },
    // ℹ️ Variant not standardized in DS 1.1
    quaternary: {
      color: o.colors.brand,
      borderColor: o.colors.brandDepressed,
      backgroundColor: o.colors.brandSubtle,
      ":hover": {
        color: o.colors.brandMedium,
        borderColor: o.colors.brandSubdued,
        backgroundColor: o.colors.brandSubtle
      },
      ...r({
        color: o.colors.brandMedium,
        borderColor: o.colors.brandMedium,
        backgroundColor: o.colors.transparent
      })
    },
    "primary-brain": {
      color: o.colors.iconBase,
      borderColor: o.colors.power,
      backgroundColor: o.colors.power,
      ":hover": {
        borderColor: o.colors.powerMedium,
        backgroundColor: o.colors.powerMedium
      },
      ...r({
        color: o.colors.brandStrong,
        borderColor: o.colors.brandStrong,
        backgroundColor: o.colors.transparent
      })
    },
    "primary-whisper": {
      color: o.colors.iconBase,
      borderColor: o.colors.sweet,
      backgroundColor: o.colors.sweet,
      ":hover": {
        borderColor: o.colors.sweetMedium,
        backgroundColor: o.colors.sweetMedium
      },
      ...r({
        color: o.colors.sweet,
        borderColor: o.colors.sweet,
        backgroundColor: o.colors.transparent
      })
    },
    "secondary-brain": {
      color: o.colors.power,
      borderColor: o.colors.power,
      backgroundColor: o.colors.bgBase,
      ":hover": {
        borderColor: o.colors.powerSubtle,
        backgroundColor: o.colors.powerSubtle
      },
      ...r({
        color: o.colors.brandMedium,
        borderColor: o.colors.brandMedium,
        backgroundColor: o.colors.transparent
      })
    },
    "tertiary-brain": {
      color: o.colors.neutralSubdued,
      borderColor: o.colors.neutralSubtle,
      backgroundColor: o.colors.bgBase,
      ":hover": {
        background: o.colors.powerSubtle,
        borderColor: o.colors.powerSubtle,
        color: o.colors.power
      },
      ...r({
        color: o.colors.neutralSubdued,
        borderColor: o.colors.neutralSubtle,
        backgroundColor: o.colors.bgBase
      })
    },
    "tertiary-whisper": {
      color: o.colors.neutralSubdued,
      borderColor: o.colors.neutralSubtle,
      backgroundColor: o.colors.bgBase,
      ":hover": {
        background: o.colors.sweetSubtle,
        borderColor: o.colors.sweetSubtle,
        color: o.colors.neutral
      },
      ...r({
        color: o.colors.sweet,
        borderColor: o.colors.sweet,
        backgroundColor: o.colors.bgBase
      })
    },
    "quaternary-brain": {
      color: o.colors.positiveMedium,
      borderColor: o.colors.natureSubtle,
      backgroundColor: o.colors.natureSubtle,
      ":hover": {
        background: o.colors.natureDepressed,
        borderColor: o.colors.natureDepressed,
        color: o.colors.positiveStrong
      },
      ...r({
        color: o.colors.positiveMedium,
        borderColor: o.colors.nature,
        backgroundColor: o.colors.bgBase
      })
    },
    "quaternary-whisper": {
      color: o.colors.sweetMedium,
      borderColor: o.colors.sweetSubtle,
      backgroundColor: o.colors.sweetSubtle,
      ":hover": {
        background: o.colors.sweetDepressed,
        borderColor: o.colors.sweetDepressed,
        color: o.colors.sweetStrong
      },
      ...r({
        color: o.colors.sweetMedium,
        borderColor: o.colors.sweetDepressed,
        backgroundColor: o.colors.bgBase
      })
    },
    "action-brain": {
      color: o.colors.textBase,
      borderColor: o.colors.neutralSubdued,
      backgroundColor: o.colors.neutralSubdued,
      ":hover": {
        background: o.colors.power,
        borderColor: o.colors.power,
        color: o.colors.textBase
      },
      ...r({
        color: o.colors.power,
        borderColor: o.colors.power,
        backgroundColor: o.colors.bgBase
      })
    }
  };
}, _ = ({
  $theme: o
}) => ({
  "tertiary-brain": {
    borderRadius: o.spacing.spacing2xs
  },
  "tertiary-whisper": {
    borderRadius: o.spacing.spacing2xs
  },
  "quaternary-whisper": {
    borderRadius: o.spacing.spacing2xs
  },
  "quaternary-brain": {
    borderRadius: o.spacing.spacing2xs
  }
}), f = ({ $theme: o }) => ({
  ":disabled": {
    color: o.colors.neutralDepressed,
    borderColor: o.colors.neutralSubtle,
    backgroundColor: o.colors.neutralSubtle
  }
}), P = ({
  "data-testid": o,
  paddingLeft: r,
  paddingRight: a,
  fullWidth: k,
  responsive: n
}) => ({
  BaseButton: {
    props: {
      "data-testid": o
    },
    style: ({ $theme: l, $size: d, $disabled: S, $kind: u }) => {
      const p = D({ $theme: l })[d];
      return {
        ...M,
        outline: "none",
        border: "1px solid",
        borderRadius: l.spacing.spacing2xs,
        boxShadow: "none",
        lineHeight: "100%",
        fontWeight: 400,
        width: k ? "100%" : void 0,
        height: n ? c : b[d],
        fontSize: e[d] || e.default,
        whiteSpace: n ? "nowrap" : void 0,
        transition: y(["color", "border-color", "background-color"]),
        padding: n ? `0 ${l.spacing.spacingMd} 0 ${l.spacing.spacingMd}` : `0 ${a ?? p} 0 ${r ?? p}`,
        ...S ? f({ $theme: l }) : O({ $theme: l })[u],
        ..._({ $theme: l })[u],
        [l.mediaQuery.small]: {
          height: n ? s : b[d] ?? b.default
        }
      };
    }
  },
  LoadingSpinnerContainer: {
    style: { marginTop: 0, marginBottom: 0 }
  },
  LoadingSpinner: {
    props: ({ $kind: l }) => ({
      size: "sm",
      ...x[l]
    }),
    component: B
  }
});
export {
  e as fontSizeMap,
  _ as getBorderMap,
  O as getColorsMap,
  f as getDisabledColors,
  P as getOverrides,
  b as heightMap
};
//# sourceMappingURL=button.styles.js.map
