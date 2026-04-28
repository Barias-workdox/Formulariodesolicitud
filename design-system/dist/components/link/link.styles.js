import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import { getFontSize as d, DEFAULT_FONT as f } from "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import "../../themes/utilities.js";
const p = (t, i) => ({
  fontFamily: f.fontFamily,
  fontSize: i === "medium" ? d("body") : d("body-small-mono"),
  lineHeight: "150%",
  fontWeight: t.typography.ParagraphMedium.fontWeight
}), v = {
  default: {
    default: "brand",
    hover: "brandMedium",
    active: "brandMedium",
    visited: "neutralStrong",
    disabled: "neutralDepressed"
  },
  contrast: {
    default: "textBase",
    hover: "textBase",
    active: "textBase",
    visited: "neutralDepressed",
    disabled: "neutral"
  }
}, b = (t) => v[t], g = (t, i, o) => ({
  outline: t ? "none" : `2px solid ${o.colors[i === "contrast" ? "borderBase" : "neutral"]}`,
  outlineOffset: "2px",
  borderRadius: "2px"
}), m = (t, i, o) => {
  const e = (r) => i ? o.colors[t.disabled] : o.colors[t[r]];
  return {
    default: e("default"),
    hover: e("hover"),
    active: e("active"),
    visited: e("visited"),
    disabled: e("disabled")
  };
}, S = (t, i) => {
  const { disabled: o, underlined: e, kind: r, size: a, fontWeight: l } = i, u = b(r), c = p(t, a), n = g(o, r, t), s = m(u, o, t);
  return {
    // Typography
    ...c,
    ...l && { fontWeight: l },
    // Layout
    display: "inline",
    padding: 0,
    // Colors and text decoration
    color: s.default,
    textDecoration: e ? "underline" : "none",
    textUnderlineOffset: "2px",
    cursor: o ? "not-allowed" : "pointer",
    // Interactive states
    ":hover": {
      color: s.hover
    },
    ":active": {
      color: s.active
    },
    ":visited": {
      color: s.visited
    },
    // Focus states
    ":focus": {
      outline: n.outline,
      outlineOffset: n.outlineOffset,
      borderRadius: n.borderRadius
    },
    ":focus-visible": {
      outline: n.outline,
      outlineOffset: n.outlineOffset,
      borderRadius: n.borderRadius
    }
  };
}, C = (t) => ({
  color: `${t.colors.neutralSubdued}!important`,
  hover: `${t.colors.neutral}!important`,
  active: `${t.colors.neutralSubdued}!important`
});
export {
  b as getLinkColors,
  S as getLinkStyles,
  p as getLinkTypography,
  C as styledLinkTextColors
};
//# sourceMappingURL=link.styles.js.map
