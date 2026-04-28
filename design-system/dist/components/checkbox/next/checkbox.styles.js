import { themedStyled as p } from "../../../themes/utilities.js";
import { DEFAULT_FONT as g } from "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
const f = ({
  $checked: r,
  $indeterminate: t,
  $disabled: n,
  $isHovered: o,
  $theme: s
}) => n ? r || t ? s.colors.neutralWashed : s.colors.bgBase : r || t ? s.colors.brand : o ? s.colors.neutralBase : s.colors.bgBase, y = ({
  $checked: r,
  $indeterminate: t,
  $disabled: n,
  $theme: o
}) => n ? o.colors.neutralSubtle : r || t ? o.colors.brand : o.colors.neutral, d = ({ $disabled: r, $theme: t }) => r ? t.colors.neutralDepressed : t.colors.neutral, x = "3px", S = "2px", u = (r) => ({
  outline: `${x} solid ${r}`,
  outlineOffset: S
}), b = ({ $error: r, $disabled: t, $theme: n }) => !r || t ? {} : u(n.colors.negative), C = ({
  $isFocused: r,
  $disabled: t,
  $error: n,
  $theme: o
}) => !r || t || n ? {} : u(o.colors.neutral), w = ({
  $checked: r,
  $indeterminate: t,
  $disabled: n,
  $isHovered: o,
  $theme: s
}) => {
  if (!(!o || n))
    return r || t ? `0 0 0 2px ${s.colors.brandWashed}` : `0 0 0 2px ${s.colors.neutralBase}`;
}, O = ({
  $size: r,
  $checked: t,
  $indeterminate: n,
  $disabled: o,
  $error: s,
  $isFocused: i,
  $isHovered: e,
  $theme: l
}) => {
  const a = "12px", c = w({
    $checked: t,
    $indeterminate: n,
    $disabled: o,
    $isHovered: e,
    $theme: l
  });
  return {
    width: a,
    height: a,
    borderWidth: "1px",
    borderColor: y({
      $checked: t,
      $indeterminate: n,
      $disabled: o,
      $theme: l
    }),
    backgroundColor: f({
      $checked: t,
      $indeterminate: n,
      $disabled: o,
      $isHovered: e,
      $theme: l
    }),
    borderRadius: l.borders.borderSm,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: o ? "not-allowed" : "pointer",
    ...c && { boxShadow: c },
    ...b({
      $disabled: o,
      $error: s,
      $theme: l
    }),
    ...C({
      $disabled: o,
      $error: s,
      $isFocused: i,
      $theme: l
    })
  };
}, I = ({
  $size: r = "medium",
  $disabled: t,
  $error: n,
  $theme: o
}) => ({
  ...r === "small" ? o.typography.ParagraphSmall : o.typography.ParagraphMedium,
  ...g,
  color: d({
    $disabled: t,
    $theme: o
  }),
  paddingLeft: o.spacing.spacing2xs,
  margin: 0,
  cursor: t ? "not-allowed" : "pointer",
  userSelect: "none",
  wordBreak: "break-word"
}), T = ({ $disabled: r }) => ({
  display: "flex",
  alignItems: "center",
  cursor: r ? "not-allowed" : "pointer",
  outline: "none"
}), E = p("span", ({ $theme: r }) => ({
  marginLeft: r.spacing.spacing2xs,
  color: "inherit"
}));
export {
  E as StyledRequiredIndicator,
  O as getCheckmarkStyles,
  I as getLabelStyles,
  T as getRootStyles
};
//# sourceMappingURL=checkbox.styles.js.map
