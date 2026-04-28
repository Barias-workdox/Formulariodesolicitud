import { BASE_INPUT_HEIGHTS as d } from "../../../constants/common.constants.js";
import { DEFAULT_FONT as f } from "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import { DEFAULT_INPUT_WIDTH as b, DEFAULT_SIZE as T, DEFAULT_KIND as B } from "./input.constants.js";
const y = {
  transition: "background-color .1s ease-in-out"
}, e = ({
  $disabled: o,
  $isReadOnly: r
}) => o ? "not-allowed" : r ? "default" : "text", S = (o, r) => {
  var u, g, p, c;
  const t = {
    paddingLeft: (u = r.spacing) == null ? void 0 : u.spacingXs,
    paddingRight: (g = r.spacing) == null ? void 0 : g.spacingXs
  }, n = {
    paddingLeft: (p = r.spacing) == null ? void 0 : p.spacingMd,
    paddingRight: (c = r.spacing) == null ? void 0 : c.spacingMd
  }, i = {
    ...r.typography.ParagraphSmall,
    minHeight: d.sm,
    height: "auto",
    paddingTop: r.spacing.spacing2xs,
    paddingBottom: r.spacing.spacing2xs
  }, a = {
    ...r.typography.ParagraphMedium,
    minHeight: d.md,
    height: "auto",
    paddingTop: r.spacing.spacingXs,
    paddingBottom: r.spacing.spacingXs
  }, s = {
    sm: t,
    md: n
  }, l = {
    sm: i,
    md: a
  };
  return {
    root: s[o] ?? n,
    input: l[o] ?? a
  };
}, E = ({
  $isFocused: o,
  $error: r,
  $disabled: t
}) => (o || r) && !t ? "2px" : "1px", I = ({
  $isFocused: o,
  $isHovered: r,
  $kind: t,
  $positive: n,
  $error: i,
  $disabled: a,
  $theme: s
}) => a ? s.colors.neutralSubtle : i ? s.colors.negativeSubdued : n ? s.colors.positiveSubdued : o || r ? s.colors.neutralStrong : s.colors.neutralSubtle, D = ({
  $theme: o,
  $kind: r,
  $isFocused: t,
  $isReadOnly: n,
  $disabled: i
}) => i ? o.colors.neutralWashed : n ? o.colors.neutralBase : r === "white" || t ? o.colors.bgBase : o.colors.neutralBase, H = ({
  $isFocused: o = !1,
  $error: r = !1,
  $positive: t = !1,
  $disabled: n = !1,
  $theme: i,
  $kind: a = B,
  $size: s = T,
  $isHovered: l,
  $withStartEnhancer: u,
  $width: g = b,
  $isReadOnly: p
}) => ({
  ...S(s, i).root,
  ...u && { paddingLeft: 0 },
  ...!o && y,
  borderRadius: i.borders.borderSm,
  backgroundColor: D({ $kind: a, $theme: i, $isFocused: o, $isReadOnly: p, $disabled: n }),
  border: "none",
  position: "relative",
  outline: p ? "none" : "solid",
  outlineWidth: `${E({ $isFocused: o, $error: r, $disabled: n })} !important`,
  outlineColor: I({
    $isFocused: o,
    $isHovered: l,
    $error: r,
    $kind: a,
    $positive: t,
    $disabled: n,
    $theme: i
  }),
  gap: i.spacing.spacingXs,
  width: g,
  cursor: e({ $disabled: n, $isReadOnly: p })
}), U = ({
  $theme: o,
  $size: r,
  $isReadOnly: t,
  $disabled: n
}) => ({
  ...S(r, o).input,
  width: "100%",
  color: o.colors.neutralStrong,
  ...f,
  cursor: e({ $disabled: n, $isReadOnly: t }),
  pointerEvents: t ? "none" : "auto",
  lineHeight: 1,
  ":disabled": {
    backgroundColor: "transparent",
    color: o.colors.neutralDepressed
  },
  "::placeholder": {
    color: o.colors.neutralSubdued
  }
});
export {
  I as getBorderColor,
  E as getBorderWidth,
  H as getInputRootStyles,
  U as getInputStyle,
  D as getKindBackgroundColor,
  S as getSizeProperties,
  y as inputTransitionStyles
};
//# sourceMappingURL=input.styles.js.map
