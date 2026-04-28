import { getCustomScrollBarStyles as e } from "../../../themes/custom-scroll-bar.js";
import { themedStyled as r } from "../../../themes/utilities.js";
import { TEXTBOX_CONTAINER_HEIGHT_PX as i } from "../message-box.constants.js";
const x = r(
  "div",
  ({ $theme: o, $isExpanded: t }) => ({
    boxSizing: "border-box",
    minHeight: t ? "unset" : i,
    flex: 1,
    overflow: "auto",
    ...e(o)
  })
);
export {
  x as StyledTextBoxContainer
};
//# sourceMappingURL=styled-text-box-container.js.map
