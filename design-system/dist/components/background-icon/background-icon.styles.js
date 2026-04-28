import { themedStyled as i } from "../../themes/utilities.js";
const s = i(
  "div",
  ({ $backgroundColor: e, $disabled: o, $shape: d, $size: t, $theme: r, $isClickable: n }) => ({
    background: o ? r.colors.neutralSubtle : r.colors[e],
    padding: 0,
    width: t,
    height: t,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: r.borders.borderSm,
    ...d === "round" && {
      borderRadius: "50%"
    },
    ...n && !o && {
      cursor: "pointer"
    }
  })
);
export {
  s as StyledRoot
};
//# sourceMappingURL=background-icon.styles.js.map
