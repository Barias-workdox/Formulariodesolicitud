import { Text as a } from "../../text/text.js";
import { themedStyled as s } from "../../../themes/utilities.js";
import { ELLIPSIS_THRESHOLD as f, MAP_COLORS as n, MAP_BORDER as g, MAP_SHAPE as C, MAP_SIZE as S, MAP_ICON_COLOR as x } from "./tag.constants.js";
const t = (r, o) => {
  const l = r.colors[o];
  return l ? l.includes("gradient") ? { background: l } : { backgroundColor: l } : {};
}, d = (r, o) => typeof r < "u" && typeof o < "u", p = (r, o) => o === "outlined" ? {
  backgroundColor: r.colors.bgBase,
  color: r.colors.neutralDepressed,
  borderColor: r.colors.neutralSubtle
} : {
  backgroundColor: r.colors.neutralSubtle,
  color: r.colors.neutralDepressed
}, y = (r, o, l) => ({
  ...t(r, n[o][l].default.backgroundColor),
  color: r.colors[n[o][l].default.color],
  borderColor: r.colors[n[o][l].default.borderColor]
}), A = (r, { $kind: o, $variant: l, $size: e, $shape: c, $disabled: i }) => {
  const b = d(o, l) && typeof l < "u";
  return {
    ...e ? S[e] : {},
    ...c && e ? C[c][e] : {},
    ...l ? g[l] : {},
    ...i ? p(r, l) : b && o && l ? y(r, o, l) : {}
  };
}, I = (r, o, l) => !d(o, l) || !l ? {} : {
  ...t(r, n[o][l].hover.backgroundColor),
  borderColor: r.colors[n[o][l].hover.borderColor]
}, w = (r, o, l) => {
  if (!d(o, l) || !l)
    return { outline: "none" };
  const e = r.colors[n[o][l].focus.borderColor];
  return {
    ...t(r, n[o][l].focus.backgroundColor),
    borderColor: e,
    boxShadow: `0 0 0 2px ${e}`,
    outline: "none"
  };
}, _ = s("div", ({ $theme: r, ...o }) => ({
  ...A(r, o),
  width: "max-content",
  maxWidth: "100%",
  display: "inline-flex",
  alignItems: "center",
  padding: `0 ${r.spacing.spacingXs}`,
  boxSizing: "border-box",
  ...o.$clickable && !o.$disabled ? { cursor: "pointer" } : {},
  // Interactive states (only when not disabled and clickable)
  ...o.$disabled || !o.$clickable ? {} : {
    ":hover": I(r, o.$kind, o.$variant),
    ":focus-visible": w(r, o.$kind, o.$variant)
  }
})), u = (r, o) => o ? r.colors[x[o]] : void 0, E = s(
  "div",
  ({ $theme: r, $kind: o, $disabled: l }) => {
    const e = u(r, o);
    return {
      display: "flex",
      alignItems: "center",
      ...l ? { color: r.colors.neutralDepressed } : {
        ...e ? { color: e } : {},
        cursor: "pointer",
        ":hover": e ? { color: e } : {},
        ":focus-visible": {
          outline: "none",
          ...e ? { color: e } : {}
        }
      }
    };
  }
), M = s(a, {
  maxWidth: `${f}px`,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  display: "inline-block"
}), R = s(
  "button",
  ({ $theme: r, $kind: o, $variant: l }) => {
    const e = u(r, o), c = d(o, l) && typeof l < "u";
    return {
      display: "flex",
      alignItems: "center",
      backgroundColor: "transparent",
      border: "none",
      padding: 0,
      ...e ? { color: e } : {},
      cursor: "pointer",
      ":hover": e ? { color: e } : {},
      ":focus-visible": {
        outline: "none",
        borderRadius: r.borders.borderMd,
        ...c && o && l ? {
          color: e,
          boxShadow: `0 0 0 2px ${r.colors[n[o][l].focus.borderColor]}`
        } : {}
      },
      ":disabled": {
        color: r.colors.neutralDepressed,
        cursor: "not-allowed"
      }
    };
  }
);
export {
  R as StyledActionButton,
  E as StyledIconWrapper,
  _ as StyledTag,
  M as StyledTagEllipsisText
};
//# sourceMappingURL=tag.styled-components.js.map
