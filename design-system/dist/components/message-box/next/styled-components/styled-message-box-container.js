import { themedStyled as l } from "../../../../themes/utilities.js";
import { FOCUS_BORDER_WIDTH as i, DEFAULT_BORDER_WIDTH as u } from "../message-box.constants.js";
const c = ({
  $isFocused: o,
  $disabled: r
}) => o && !r ? i : u, s = ({
  $isFocused: o,
  $isHovered: r,
  $theme: t
}) => o || r ? t.colors.neutralStrong : t.colors.neutralSubtle, f = l(
  "div",
  ({ $theme: o, $isHovered: r, $isFocused: t, $disabled: n, $variant: e = "default" }) => ({
    backgroundColor: n ? o.colors.neutralWashed : o.colors.bgBase,
    border: "none",
    borderRadius: o.spacing.spacingXs,
    cursor: n ? "not-allowed" : "text",
    display: "flex",
    flexDirection: "column",
    outline: n ? "none" : "solid",
    outlineColor: s({ $isFocused: t, $theme: o, $isHovered: r }),
    outlineWidth: c({ $isFocused: t, $disabled: n }),
    overflowY: "hidden",
    position: "relative",
    width: "100%",
    ...e === "compact" && {
      flexDirection: "row"
    }
  })
);
export {
  f as StyledMessageBoxContainer,
  s as getOutlineColor,
  c as getOutlineWidth
};
//# sourceMappingURL=styled-message-box-container.js.map
