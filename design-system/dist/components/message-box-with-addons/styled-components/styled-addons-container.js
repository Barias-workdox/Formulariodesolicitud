import { MESSAGE_BOX_STYLE_TRANSITION as n } from "../../message-box/message-box.constants.js";
import { themedStyled as i } from "../../../themes/utilities.js";
const l = i("div", ({ $height: e, $isExpanded: o, $isOpen: t }) => ({
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  height: o ? "0px" : `${e}px`,
  transition: t ? n : "none"
}));
export {
  l as StyledAddonsContainer
};
//# sourceMappingURL=styled-addons-container.js.map
