import { themedStyled as i } from "../../../themes/utilities.js";
const d = i(
  "div",
  ({ $backgroundColor: n, $disabled: t, $shape: o, $size: r, $theme: e }) => ({
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: r,
    height: r,
    backgroundColor: t ? e.colors.neutralSubtle : e.colors[n],
    borderRadius: o === "round" ? e.borders.borderCircle : e.borders.borderSm,
    boxSizing: "border-box",
    minWidth: r,
    minHeight: r
  })
), c = i(
  "span",
  ({ $iconColor: n, $disabled: t, $theme: o }) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: t ? o.colors.neutralSubdued : o.colors[n]
  })
);
export {
  c as StyledIconWrapper,
  d as StyledRoot
};
//# sourceMappingURL=background-icon.styles.js.map
