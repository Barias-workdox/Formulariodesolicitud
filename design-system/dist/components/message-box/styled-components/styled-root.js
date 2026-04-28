import { themedStyled as e } from "../../../themes/utilities.js";
import { MESSAGE_BOX_STYLE_TRANSITION as n, MESSAGE_BOX_HEIGHT_PX as d, COLLAPSED_MESSAGE_BOX_HEIGHT_PX as a } from "../message-box.constants.js";
const c = e("div", ({ $disabled: r, $isExpanded: l, $isOpen: i, $overflow: t, $theme: o }) => ({
  display: "flex",
  flexDirection: "column",
  border: `1px solid ${o.colors.neutralSubtle}`,
  overflow: t || "hidden",
  height: i ? d : a,
  transition: n,
  backgroundColor: o.colors.bgBase,
  position: "relative",
  ...r && {
    borderColor: o.colors.neutralSubtle,
    backgroundColor: o.colors.neutralWashed
  },
  ...l && {
    marginTop: o.spacing.spacingMd,
    height: "100%"
  }
}));
export {
  c as StyledRoot
};
//# sourceMappingURL=styled-root.js.map
