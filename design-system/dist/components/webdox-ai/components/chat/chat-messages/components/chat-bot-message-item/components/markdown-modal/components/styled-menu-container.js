import { themedStyled as i } from "../../../../../../../../../../themes/utilities.js";
import { getTransitionStyles as t } from "../../../../../../../../../../utils/styles.utils.js";
const r = i(
  "div",
  ({ $isVisible: o, $theme: n }) => ({
    position: "absolute",
    right: n.spacing.spacingXs,
    top: n.spacing.spacingXs,
    zIndex: 1,
    opacity: o ? 1 : 0,
    transition: t(["opacity"])
  })
), a = i(
  "div",
  ({ $theme: o }) => ({
    position: "relative",
    zIndex: 1,
    display: "flex",
    padding: o.spacing.spacingXs,
    justifyContent: "flex-end",
    backgroundColor: o.colors.neutralWashed,
    border: `1px solid ${o.colors.neutralSubtle}`,
    borderBottom: "none"
  })
);
export {
  r as StyledFixedMenuContainer,
  a as StyledMenuContainer
};
//# sourceMappingURL=styled-menu-container.js.map
