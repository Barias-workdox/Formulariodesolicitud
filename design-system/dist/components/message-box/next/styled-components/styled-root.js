import { themedStyled as a } from "../../../../themes/utilities.js";
import { DEFAULT_WIDTH as e, DEFAULT_MAX_HEIGHT as d } from "../message-box.constants.js";
const p = a(
  "div",
  ({ $theme: o, $maxHeight: i = d, $width: r = e, $margin: t }) => ({
    position: "relative",
    backgroundColor: o.colors.neutralBase,
    borderRadius: o.spacing.spacingXs,
    boxShadow: "0 2px 28px 0 rgba(26, 26, 26, 0.04)",
    display: "flex",
    flexDirection: "column",
    maxHeight: i,
    width: r,
    margin: t
  })
);
export {
  p as StyledRoot
};
//# sourceMappingURL=styled-root.js.map
