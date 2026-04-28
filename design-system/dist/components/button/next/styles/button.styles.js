import { TYPOGRAPHY_LINE_HEIGHTS as S, DEFAULT_FONT as g } from "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { getTransitionStyles as f } from "../../../../utils/styles.utils.js";
import { SIZE_CONFIG as c, TRANSITION_PROPERTIES as b, RESPONSIVE_SIZE_MAP as v } from "../button.constants.js";
import { getButtonStyles as y } from "../button.utils.js";
import { ButtonSpinner as h } from "../components/button-spinner.js";
const I = (t, r) => ({
  ":focus-visible": {
    outlineOffset: "2px",
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineColor: r === "contrast" ? t.colors.borderBase : t.colors.neutral,
    boxShadow: "none"
  }
}), m = (t) => ({
  ":disabled": {
    backgroundColor: t.colors.neutralWashed,
    borderColor: t.colors.neutralWashed,
    color: t.colors.neutralDepressed
  }
}), x = (t, r) => {
  const o = c[v[r]];
  return {
    [`@media (max-width: ${t.breakpoints.small}px)`]: {
      height: o.height,
      fontSize: o.fontSize,
      padding: `0 ${t.spacing[o.padding]}`
    }
  };
}, E = (t) => t ? {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
} : {}, P = ({
  dataTestId: t,
  isLoading: r,
  disabled: o,
  fullWidth: p,
  size: l,
  kind: i,
  appearance: a
}) => {
  const d = o || r;
  return {
    BaseButton: {
      props: { "data-testid": t },
      style: ({ $theme: e, $isSelected: u }) => {
        const n = y(e, i, a), s = c[l];
        return {
          // Typography
          ...g,
          fontSize: s.fontSize,
          fontWeight: 400,
          lineHeight: S.normal,
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          // Layout
          borderRadius: e.borders.borderSm,
          height: s.height,
          padding: `0 ${e.spacing[s.padding]}`,
          cursor: d ? "not-allowed" : "pointer",
          ...E(p),
          // State styles
          ...u ? n.button.active : n.button.default,
          // Interactions
          transition: f([...b]),
          ...!d && {
            ":hover": n.button.hover,
            ":active": n.button.active
          },
          ...I(e, i),
          ...m(e),
          // Media queries
          ...x(e, l)
        };
      }
    },
    LoadingSpinner: {
      props: () => ({
        disabled: o,
        kind: i,
        appearance: a
      }),
      component: h
    }
  };
};
export {
  P as getOverrides
};
//# sourceMappingURL=button.styles.js.map
